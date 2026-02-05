<template>
  <section id="cost">
    <div class="markup">
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
          <div class="textswiper_left blur"></div>
          <div class="textswiper_right blur"></div>
          <span class="msg">услуги по металлообработке</span>
        </div>
        <swiper-container class="swiper" ref="swiperCont" :init="true" :autoplay="true" :modules="modules"
          effect="cards">
          <swiper-slide v-for="card in cards" :key="card.id">{{ card.title }}</swiper-slide>
        </swiper-container>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
const modules = [EffectCards]

// const target = ref(null as HTMLInputElement | null)
import { ref, computed } from 'vue'

const file = ref<File | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)

const messageType = ref<'success' | 'error' | null>(null)

const messageClass = computed(() => {
  if (messageType.value === 'success') return 'message--success'
  if (messageType.value === 'error') return 'message--error'
  return ''
})


const name = ref('')
const phone = ref('')
const message = ref('')
const isLoading = ref(false)

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
      .replace(/(\d{3})/, '$1')
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


      resetForm()


      setTimeout(() => {
        message.value = ''
        messageType.value = null
      }, 5000)
    } else {
      messageType.value = 'error'
      message.value = data.message


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
  { id: 9, title: 'Плазменная резка металла' },
  { id: 10, title: 'Рубка листового металла на гильотине' },
  { id: 11, title: 'Штамповка металла' },
  { id: 12, title: 'Вальцовка листов' },
  { id: 13, title: 'Гибка листов' },
  { id: 14, title: 'Сварочные работы любой сложности' },
  { id: 15, title: 'Пескоструйная очистка конструкций' },
  { id: 16, title: 'Изготовление продукции по индивидуальным чертежам' },
]
</script>

<style scoped>
#cost {
  background-color: #f5f5f5;
  padding: 40px 20px;
}

.markup {
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

.allswiper {
  overflow: hidden;
}

.grid {
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 0 30px 30px 30px;
}

.custom-file-input {
  font-size: 18px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
  width: 216px;
}

.swiper swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 20px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
  border-radius: 10px;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}

.custom-file-input::before {
  content: 'Выбрать файл';
  display: inline-block;
  background: rgb(30, 33, 61);
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.custom-file-input:hover::before {
  background: #0056b3;
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

.allcards {
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
}

.swiper {
  width: 340px;
  height: 264px;
  overflow: visible;
  max-width: 400px;
  padding-top: 20px;
}

.swiper swiper-slide:nth-child(1n) {
  background-color: rgb(30, 33, 61);
}

.swiper swiper-slide:nth-child(2n) {
  background-color: rgb(161, 7, 7);
}

.swiper swiper-slide:nth-child(3n) {
  background-color: rgb(30, 33, 61);
}

.swiper swiper-slide:nth-child(4n) {
  background-color: rgb(47, 56, 131);
}

.swiper swiper-slide:nth-child(5n) {
  background-color: rgb(161, 7, 7);
}

.swiper swiper-slide:nth-child(6n) {
  background-color: rgb(47, 56, 131);
}

.swiper swiper-slide:nth-child(7n) {
  background-color: rgb(30, 33, 61);
}

.swiper swiper-slide:nth-child(8n) {
  background-color: rgb(161, 7, 7);
}

.textswiper {
  text-align: center;
  color: black;
  text-transform: uppercase;
  position: relative;
  margin: 0 80px;
  padding: 20px 0;
  overflow: hidden;
}

.blur {
  position: absolute;
  height: 91px;
  width: 87px;
  background-color: #f5f5f5;
  z-index: 3;
  filter: blur(10px);
}

.textswiper_left {
  left: -43px;
  top: -15px
}

.textswiper_right {
  right: -43px;
  top: -15px
}


.workcost {
  font-size: 18px;
  text-align: center;
  padding: 0 0 30px 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.butinfo {
  font-size: 16px;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
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

.allinputcost {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;
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
  position: relative;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.perscost {
  text-align: center;
  padding: 20px 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.infocost {
  margin-left: 30px;
  font-size: 20px;
  margin-bottom: 12px;
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

@media screen and (max-width:1600px) {
  .textswiper {
    padding: 0 0 30px 129px;
  }
}

@media screen and (max-width:1450px) {
  .markup {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .formcost {
    margin: 0 auto;
  }

  .h2cost {
    font-size: 26px;
  }
  
}

@media screen and (max-width:1366px) {
  .swiper swiper-slide {
    font-size: 20px;
  }
}

@media screen and (max-width:992px) {

  .markup {
    grid-template-columns: 100%;
    gap: 40px;
  }

  .h2cost {
    font-size: 24px;
  }

  .workcost {
    font-size: 16px;
    padding-bottom: 25px;
  }


  .swiper swiper-slide {
    font-size: 19px;
    height: 200px;
  }

  .msg {
    font-size: 18px;
  }

  .swiper {
    height: 216px;
    width: 284px;
    padding-top: 0;
  }

}

@media screen and (max-width:768px) {
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

  .msg {
    font-size: 16px;
  }
}

@media screen and (max-width:576px) {
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

  .msg {
    animation-duration: 8s;
    font-size: 13px;
  }
}

@media screen and (max-width:480px) {
  #cost {
    padding: 20px 10px;
  }

  .formcost {
    padding: 15px;
  }

  .msg {
    font-size: 14px;
    animation: marquee 20s linear infinite;
  }

  .blur {
    width: 40px;
  }

  .inputcost,
  .butcost,
  .file-label {
    min-height: 44px;
  }

  .inputcost {
    font-size: 16px;
  }
}
</style>