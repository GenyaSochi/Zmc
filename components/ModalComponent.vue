<template>
  <ClientOnly>
    <Teleport to="body">
      <div v-if="popup" class="windowpos" @click.self="popup = false">
        <div class="window">
          <p class="form">Форма обратной связи</p>
          <input class="name" type="text" id="name" name="name" v-model="name" required placeholder="Ваше имя...">
          <input class="phone" type="phone" id="phone" name="phone" v-model="phone" required placeholder="+7">
          <button @click="sendData" class="butwindow">отправить запрос</button>
          <p class="mess" v-if="message">{{ message }}</p>
          <div>
            <!-- <a href="mailto:sales@zmkural.com" class="info">sales@zmkural.com</a> -->
          </div>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const popup = defineModel({ default: false })
const name = ref('')
const phone = ref('')
const message = ref('')

const sendData = async () => {
  const data = await $fetch<{ ok: Boolean, message: string }>('/api/orders/call', {
    method: 'POST',
    body: { name: name.value, phone: phone.value }
  })
  message.value = data.message
  setTimeout(() => {
    popup.value = false
    name.value = ''
    phone.value = ''
    message.value = ''
  }, 5000)
}
</script>

<style scoped>
.mess {
  color: white;
  text-align: center;
}
.window {
  border-radius: 10px;
  width: 427px;
  height: 315px;
  padding: 10px;
  background-color: rgb(30, 33, 61);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.windowpos {
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #00000090;
}

.name {
  border: 2px solid white;
  color: white;
  font-size: 28px;
  padding-left: 10px;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.phone {
  border: 2px solid white;
  color: white;
  font-size: 28px;
  padding-left: 10px;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.butwindow {
  color: white;
  border: 2px solid white;
  width: 100%;
  font-size: 28px;
  padding-left: 10px;
  padding-bottom: 20px;
  text-align: center;
  border-radius: 5px;
}

.form {
  color: white;
  padding: 10px 0 20px 20px;
  font-size: 28px;
}

@media screen and (max-width:992px) {
  .window {
    width: 388px;
  }

  .form,
  .name,
  .phone,
  .butwindow {
    font-size: 26px;
    padding-bottom: 16px;
  }
}

@media screen and (max-width:576px) {
  .window {
    width: 356px;
    height: 270px;
  }

  .form,
  .name,
  .phone,
  .butwindow {
    font-size: 24px;
    padding-bottom: 14px;
  }
}

@media screen and (max-width:410px) {
  .window {
    width: 336px;
    height: 250px;
  }

  .form,
  .name,
  .phone,
  .butwindow {
    font-size: 22px;
    padding-bottom: 12px;
  }
}

@media screen and (max-width:320px) {
  .window {
    width: 280px;
    height: 210px;    
  }

  .form,
  .name,
  .phone,
  .butwindow {
    font-size: 18px;
    padding-bottom: 8px;
  }  
}
</style>
