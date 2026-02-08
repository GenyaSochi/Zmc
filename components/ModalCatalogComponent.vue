<template>
  <ClientOnly>
    <Teleport to="body">
      <div v-if="popup" class="windowpos" @click.self="closePopup">
        <div class="window">
          <div class="window-header">
            <p class="form">Форма обратной связи</p>
            <button class="close-btn" @click="closePopup" aria-label="Закрыть">
              ×
            </button>
          </div>

          <form @submit.prevent="sendData" class="form-container">
            <div class="input-group">
              <input class="name" type="text" id="name" name="name" v-model="name" required placeholder="Ваше имя"
                :disabled="isLoading">
            </div>

            <div class="input-group">
              <input class="phone" type="tel" id="phone" name="phone" v-model="phone" required
                placeholder="+7 (___) ___-__-__" :disabled="isLoading" @input="formatPhone">
            </div>

            <div class="input-group">
              <input class="question" type="text" id="question" name="question" v-model="question" required
                placeholder="Вопрос о товаре" :disabled="isLoading">
            </div>

            <button type="submit" class="butwindow" :disabled="isLoading || !isFormValid"
              :class="{ 'butwindow--loading': isLoading }">
              <span v-if="!isLoading">отправить запрос</span>
              <span v-else class="loader"></span>
            </button>

            <p class="mess" :class="{ 'mess--success': isSuccess, 'mess--error': isError }">
              {{ message }}
            </p>

            <div class="contacts-info">
              <a href="mailto:sales@zmkural.com" class="info">sales@zmkural.com</a>
              <p class="privacy">
                Нажимая кнопку, вы соглашаетесь с
                <a href="/privacy" target="_blank" class="privacy-link">политикой конфиденциальности</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const popup = defineModel({ default: false })
const name = ref('')
const phone = ref('')
const question = ref('')
const message = ref('')
const isLoading = ref(false)
const isSuccess = ref(false)
const isError = ref(false)


const isFormValid = computed(() => {
  return name.value.trim().length >= 2  && phone.value.replace(/\D/g, '').length >= 11 && question.value.trim().length >=2
  
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

const closePopup = () => {
  popup.value = false
  resetForm()
}

const resetForm = () => {
  setTimeout(() => {
    name.value = ''
    phone.value = ''
    question.value = ''
    message.value = ''
    isLoading.value = false
    isSuccess.value = false
    isError.value = false
  }, 300)
}

const sendData = async () => {
  if (!isFormValid.value || isLoading.value) return

  isLoading.value = true
  message.value = ''
  isSuccess.value = false
  isError.value = false

  try {
    const cleanedPhone = phone.value.replace(/\D/g, '').replace(/^7/, '')

    const data = await $fetch<{ ok: boolean, message: string }>('/api/orders/call', {
      method: 'POST',
      body: {
        name: name.value.trim(),
        phone: cleanedPhone,
        question: question.value.trim()
      }
    })

    isSuccess.value = data.ok
    isError.value = !data.ok
    message.value = data.message

    if (data.ok) {

      setTimeout(() => {
        closePopup()
      }, 3000)
    } else {

      setTimeout(() => {
        message.value = ''
        isError.value = false
      }, 5000)
    }

  } catch (error) {
    isError.value = true
    message.value = 'Ошибка отправки. Попробуйте позже.'

    setTimeout(() => {
      message.value = ''
      isError.value = false
    }, 5000)

  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.windowpos {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.window {
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
  padding: 30px;
  background-color: rgb(30, 33, 61);
  position: relative;
  animation: slideUp 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.window-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
}

.form {
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: rotate(90deg);
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  position: relative;
}

.name,
.phone,
.question{
  border: 2px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 18px;
  padding: 16px 20px;
  width: 100%;
  margin: 0;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.name:focus,
.phone:focus,
.question:focus {
  outline: none;
  border-color: white;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.name::placeholder,
.phone::placeholder,
.question::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.name:disabled,
.phone:disabled,
.question:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.butwindow {
  background-color: white;
  color: rgb(30, 33, 61);
  border: 2px solid white;
  width: 100%;
  font-size: 18px;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  margin-top: 10px;
}

.butwindow:hover:not(:disabled) {
  background-color: rgb(30, 33, 61);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.butwindow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.butwindow--loading {
  position: relative;
}

.loader {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(30, 33, 61, 0.3);
  border-radius: 50%;
  border-top-color: rgb(30, 33, 61);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.mess {
  text-align: center;
  font-size: 16px;
  padding: 10px;
  border-radius: 6px;
  margin: 10px 0 0;
  min-height: 20px;
  transition: all 0.3s ease;
}

.mess--success {
  background-color: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
  border: 1px solid rgba(46, 204, 113, 0.3);
}

.mess--error {
  background-color: rgba(231, 76, 60, 0.1);
  color: #e74c3c;
  border: 1px solid rgba(231, 76, 60, 0.3);
}

.contacts-info {
  margin-top: 20px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.info {
  color: white;
  font-size: 16px;
  text-decoration: none;
  display: block;
  margin-bottom: 15px;
  transition: color 0.3s ease;
}

.info:hover {
  color: #ccc;
  text-decoration: underline;
}

.privacy {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  line-height: 1.4;
  margin: 0;
}

.privacy-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: underline;
}

.privacy-link:hover {
  color: white;
}

@media screen and (max-width: 992px) {
  .window {
    padding: 25px;
    max-width: 400px;
  }

  .form {
    font-size: 22px;
  }

  .name,
  .phone,
  .question {
    font-size: 17px;
    padding: 14px 18px;
  }

  .butwindow {
    font-size: 17px;
    padding: 14px;
  }
}

@media screen and (max-width: 768px) {
  .windowpos {
    padding: 15px;
  }

  .window {
    padding: 20px;
    max-width: 350px;
  }

  .form {
    font-size: 20px;
  }

  .name,
  .phone,
  .question {
    font-size: 16px;
    padding: 12px 16px;
  }

  .butwindow {
    font-size: 16px;
    padding: 12px;
  }

  .mess {
    font-size: 14px;
  }
}

@media screen and (max-width: 480px) {
  .window {
    padding: 20px;
    max-width: 100%;
  }

  .form {
    font-size: 18px;
  }

  .name,
  .phone,
  .question {
    font-size: 15px;
    padding: 12px 14px;
  }

  .butwindow {
    font-size: 15px;
    padding: 12px;
  }

  .close-btn {
    font-size: 28px;
    width: 28px;
    height: 28px;
  }
}

@media screen and (max-width: 320px) {
  .window {
    padding: 15px;
  }

  .form {
    font-size: 16px;
  }

  .name,
  .phone,
  .question {
    font-size: 14px;
    padding: 10px 12px;
  }

  .butwindow {
    font-size: 14px;
    padding: 10px;
  }
}
</style>