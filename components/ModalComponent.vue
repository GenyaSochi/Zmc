<template>
    <ClientOnly>
    <Teleport to="body">    
        <div v-if="popup" class="windowpos" @click.self="popup = false">
            <div class="window">
                <p class="form">Форма обратной связи</p>
                <input class="name" type="text" id="name" name="name" required placeholder="Ваше имя...">
                <input class="phone" type="phone" id="phone" name="phone" required placeholder="+7">
                <div>
                  <!-- <a href="mailto:sales@zmkural.com" class="info">sales@zmkural.com</a> -->
                <button @click="" class="butwindow">отправить запрос</button> 
                <p v-if="successMessage">{{ successMessage }}</p>
                <p v-if="errorMessage">{{ errorMessage }}</p>  
              </div>             
              </div>
        </div>
    </Teleport>
    </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const popup = defineModel({ default: false })

const successMessage = ref('')
const errorMessage = ref('')


</script>

<style scoped>
.window {
  border-radius: 10px;
  width: 270px;
  height: 178px;
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
  margin: 0 0 10px 20px;
  font-size: 16px;
  padding-left: 10px;
}
.phone {
  border: 2px solid white;
  color: white;
  margin: 0 0 10px 20px;
  font-size: 16px;
  padding-left: 10px;
}

.butwindow {
  color: white;
  border: 2px solid white;
  width: 218px;  
  margin: 0 0 10px 20px;
  font-size: 16px;
  padding-left: 10px;  
}

.form {
  color: white;
  padding: 10px 0 20px 20px;
  font-size: 16px;
}
</style>
