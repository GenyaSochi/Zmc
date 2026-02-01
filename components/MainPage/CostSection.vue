<template>
  <section id="cost">
    <div class="grid">
      <form class="formcost" @submit.prevent="sendData">
        <h2 class="h2cost">Получить рассчёт стоимости продукции</h2>
        <p class="workcost">по будням с 8.00 до 17.00</p>

        <div class="allinputcost">
          <input class="inputcost" type="text" id="name" name="name" v-model="name" required placeholder="Ваше имя"
            :disabled="isLoading">

          <input class="inputcost" type="tel" id="phone" name="phone" v-model="phone" required
            placeholder="+7 (___) ___-__-__" :disabled="isLoading" @input="formatPhone">

          <div class="file-upload-container">
            <label for="file" class="file-label">
              <span class="file-label-text">Выбрать файл</span>
              <span class="file-name" v-if="file">{{ truncateFileName(file.name) }}</span>
              <input type="file" id="file" name="file" @change="handleFiles"
                accept=".xls,.doc,.docx,.pdf,.odt,.xlsx,.txt,.rtf" class="custom-file-input" :disabled="isLoading"
                ref="fileInput">
            </label>
            <p class="file-hint">Поддерживаемые форматы: .xls, .doc, .docx, .pdf, .odt</p>
          </div>

          <button class="butcost" type="submit" :disabled="isLoading || !isFormValid"
            :class="{ 'butcost--loading': isLoading }">
            <span v-if="!isLoading">Отправить заявку</span>
            <span v-else class="loader"></span>
          </button>

          <p v-if="message" class="message" :class="messageClass">
            {{ message }}
          </p>
        </div>

        <div class="perscost" v-if="!message">
          <NuxtLink to="/privacy" class="butinfo">
            Нажимая на кнопку, Вы соглашаетесь на обработку персональных данных
          </NuxtLink>
        </div>
      </form>

      <div class="allswiper">
        <div class="textswiper">
          <div class="blur blur-left"></div>
          <div class="blur blur-right"></div>
          <span class="msg">услуги по металлообработке</span>
        </div>

        <div class="swiper-container">
          <Swiper :modules="[SwiperEffectCards]" :effect="'cards'" :grabCursor="true" :loop="true" :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }" :cardsEffect="{
              slideShadows: true,
              rotate: true,
              perSlideOffset: 8,
              perSlideRotate: 2,
            }" class="swiper">
            <SwiperSlide v-for="card in cards" :key="card.id">
              <div class="slide-content">
                {{ card.title }}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'

const messageType = ref<'success' | 'error' | null>(null)

const messageClass = computed(() => {
  if (messageType.value === 'success') return 'message--success'
  if (messageType.value === 'error') return 'message--error'
  return ''
})

const file = ref<File | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)

const name = ref('')
const phone = ref('')
const message = ref('')
const isLoading = ref(false)

const SwiperEffectCards = EffectCards

const isFormValid = computed(() => {
  return name.value.trim().length >= 2 &&
    phone.value.replace(/\D/g, '').length >= 11 &&
    file.value !== null
})

const formatPhone = (event: Event) => {
  const input = event.target as HTMLInputElement
  let value = input.value.replace(/\D/g, '')

  if (value.startsWith('7') || value.startsWith('8')) {
    value = value.substring(1)
  }

  if (value.length > 0) {
    value = '+7 ' + value
      .substring(0, 10)
      .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '($1) $2-$3-$4')
      .replace(/(\d{3})(\d{3})(\d{2})/, '($1) $2-$3')
      .replace(/(\d{3})(\d{3})/, '($1) $2')
      .replace(/(\d{3})/, '($1')
  }

  phone.value = value
}

const handleFiles = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const selectedFile = target.files[0]
    const maxSize = 10 * 1024 * 1024

    const allowedExtensions = ['.xls', '.doc', '.docx', '.pdf', '.odt', '.xlsx', '.txt', '.rtf']
    const fileExtension = selectedFile.name.toLowerCase().substring(selectedFile.name.lastIndexOf('.'))

    if (!allowedExtensions.includes(fileExtension)) {
      message.value = 'Недопустимый формат файла. Разрешены: .xls, .doc, .docx, .pdf, .odt, .xlsx, .txt, .rtf'
      messageType.value = 'error'
      target.value = ''
      file.value = null

      setTimeout(() => {
        message.value = ''
        messageType.value = null
      }, 3000)
      return
    }

    if (selectedFile.size > maxSize) {
      message.value = 'Файл слишком большой. Максимальный размер: 10MB'
      messageType.value = 'error'
      target.value = ''
      file.value = null

      setTimeout(() => {
        message.value = ''
        messageType.value = null
      }, 3000)
      return
    }

    file.value = selectedFile
    messageType.value = null
    message.value = ''
  }
}

const truncateFileName = (fileName: string) => {
  if (fileName.length > 30) {
    return fileName.substring(0, 15) + '...' + fileName.substring(fileName.length - 10)
  }
  return fileName
}

const sendData = async () => {
  if (!isFormValid.value || isLoading.value) return

  isLoading.value = true
  message.value = ''
  messageType.value = null

  try {
    const formData = new FormData()
    formData.append('name', name.value.trim())
    formData.append('phone', phone.value.replace(/\D/g, ''))
    if (file.value) {
      formData.append('file', file.value)
    }

    const data = await $fetch<{ ok: boolean, message: string }>('/api/orders/calc', {
      method: 'POST',
      body: formData
    })

    if (data.ok) {
      messageType.value = 'success'
      message.value = data.message
      
      // Сразу сбрасываем форму при успешной отправке
      resetForm()
      
      // Очищаем сообщение через 5 секунд
      setTimeout(() => {
        message.value = ''
        messageType.value = null
      }, 5000)
    } else {
      messageType.value = 'error'
      message.value = data.message
      
      // Очищаем сообщение об ошибке через 5 секунд
      setTimeout(() => {
        message.value = ''
        messageType.value = null
      }, 5000)
    }

  } catch (error) {
    messageType.value = 'error'
    message.value = 'Ошибка отправки. Попробуйте позже.'
    console.error('Ошибка отправки формы:', error)

    setTimeout(() => {
      message.value = ''
      messageType.value = null
    }, 5000)

  } finally {
    isLoading.value = false
  }
}

const resetForm = () => {
  name.value = ''
  phone.value = ''
  file.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const cards = [
  { id: 1, title: 'Плазменная резка металла' },
  { id: 2, title: 'Рубка листового металла на гильотине' },
  { id: 3, title: 'Штамповка металла' },
  { id: 4, title: 'Вальцовка листов' },
  { id: 5, title: 'Гибка листов' },
  { id: 6, title: 'Сварочные работы любой сложности' },
  { id: 7, title: 'Пескоструйная очистка конструкций' },
  { id: 8, title: 'Изготовление продукции по индивидуальным чертежам' },
]
</script>

<style scoped>
#cost {
  background-color: #f5f5f5;
  padding: 40px 20px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
}

.formcost {
  background: linear-gradient(135deg, rgb(7, 7, 7) 0%, rgb(30, 33, 61) 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.h2cost {
  text-align: center;
  padding: 0 0 15px 0;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.workcost {
  font-size: 18px;
  text-align: center;
  padding: 0 0 30px 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.allinputcost {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;
}

.inputcost {
  background-color: white;
  color: #333;
  border: 2px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  padding: 0 20px;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.inputcost:focus {
  outline: none;
  border-color: white;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.inputcost::placeholder {
  color: #999;
}

.inputcost:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.file-upload-container {
  margin: 10px 0;
}

.file-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px dashed rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 50px;
}

.file-label:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.6);
}

.file-label-text {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.file-name {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-style: italic;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  text-align: right;
}

.custom-file-input {
  display: none;
}

.file-hint {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin: 5px 0 0;
  text-align: center;
}

.butcost {
  background-color: rgb(161, 7, 7);
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 10px;
  position: relative;
  min-height: 50px;
}

.butcost:hover:not(:disabled) {
  background-color: rgb(180, 20, 20);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(161, 7, 7, 0.3);
}

.butcost:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loader {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.message {
  text-align: center;
  padding: 12px;
  border-radius: 8px;
  margin: 10px 0 0;
  font-size: 16px;
  font-weight: 500;
}

.message--success {
  background-color: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
  border: 1px solid rgba(46, 204, 113, 0.3);
}

.message--error {
  background-color: rgba(231, 76, 60, 0.1);
  color: #e74c3c;
  border: 1px solid rgba(231, 76, 60, 0.3);
}

.perscost {
  text-align: center;
  padding: 20px 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.butinfo {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
  text-align: center;
}

.butinfo:hover {
  color: white;
  text-decoration: underline;
}

/* Стили для свайпера */
.allswiper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.textswiper {
  text-align: center;
  color: #333;
  text-transform: uppercase;
  position: relative;
  width: 100%;
  padding: 20px 0;
  overflow: hidden;
  margin-bottom: 40px;
}

.blur {
  position: absolute;
  height: 100%;
  width: 80px;
  top: 0;
  z-index: 1;
  pointer-events: none;
}

.blur-left {
  left: 0;
  background: linear-gradient(90deg,
      rgba(245, 245, 245, 1) 0%,
      rgba(245, 245, 245, 0) 100%);
}

.blur-right {
  right: 0;
  background: linear-gradient(270deg,
      rgba(245, 245, 245, 1) 0%,
      rgba(245, 245, 245, 0) 100%);
}

.msg {
  white-space: nowrap;
  overflow: hidden;
  animation: marquee 15s linear infinite;
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  color: rgb(30, 33, 61);
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.swiper-container {
  width: 100%;
  max-width: 400px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
}

.slide-content {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  user-select: none;
  transition: transform 0.3s ease;
}

/* Кастомные цвета для слайдов */
.swiper-slide:nth-child(odd) .slide-content {
  background: linear-gradient(135deg, rgb(30, 33, 61) 0%, rgb(47, 56, 131) 100%);
}

.swiper-slide:nth-child(even) .slide-content {
  background: linear-gradient(135deg, rgb(161, 7, 7) 0%, rgb(180, 20, 20) 100%);
}

/* Адаптивная верстка */
@media screen and (max-width: 1200px) {
  .grid {
    gap: 30px;
  }

  .h2cost {
    font-size: 26px;
  }

  .swiper-container {
    height: 280px;
  }
}

@media screen and (max-width: 992px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .formcost {
    padding: 25px;
    order: 2;
  }

  .allswiper {
    order: 1;
  }

  .h2cost {
    font-size: 24px;
  }

  .workcost {
    font-size: 16px;
    padding-bottom: 25px;
  }

  .swiper-container {
    height: 250px;
    max-width: 500px;
    margin: 0 auto;
  }

  .msg {
    font-size: 18px;
  }
}

@media screen and (max-width: 768px) {
  #cost {
    padding: 30px 15px;
  }

  .formcost {
    padding: 20px;
  }

  .h2cost {
    font-size: 22px;
  }

  .inputcost {
    height: 45px;
    font-size: 15px;
  }

  .butcost {
    padding: 12px;
    font-size: 16px;
    min-height: 45px;
  }

  .swiper-container {
    height: 220px;
  }

  .slide-content {
    font-size: 16px;
    padding: 15px;
  }

  .msg {
    font-size: 16px;
  }
}

@media screen and (max-width: 576px) {
  .h2cost {
    font-size: 20px;
  }

  .workcost {
    font-size: 15px;
  }

  .inputcost {
    height: 42px;
  }

  .file-label {
    padding: 10px 15px;
    min-height: 42px;
  }

  .file-label-text {
    font-size: 14px;
  }

  .swiper-container {
    height: 200px;
  }

  .slide-content {
    font-size: 15px;
  }

  .msg {
    font-size: 15px;
  }

  .butinfo {
    font-size: 12px;
  }
}

@media screen and (max-width: 480px) {
  #cost {
    padding: 20px 10px;
  }

  .formcost {
    padding: 15px;
  }

  .h2cost {
    font-size: 18px;
    padding-bottom: 10px;
  }

  .workcost {
    font-size: 14px;
    padding-bottom: 20px;
  }

  .allinputcost {
    gap: 15px;
  }

  .swiper-container {
    height: 180px;
  }

  .slide-content {
    font-size: 14px;
    padding: 12px;
  }

  .msg {
    font-size: 14px;
    animation-duration: 12s;
  }

  .blur {
    width: 40px;
  }
}
</style>