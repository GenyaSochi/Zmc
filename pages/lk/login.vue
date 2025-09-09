<template>
  <div>
    <form @submit.prevent="logIn">
      <input type="text" placeholder="логин">
      <input type="text" placeholder="пароль">
      {{ md5(pass) }}
      <p v-if="error">{{ error }}</p>
      <input type="submit" @click="type= 'login'" value="Login">
      <input type="submit" @click="type= 'reg'" value="Registration">
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUser } from '~/stores/useUser';
import md5 from 'md5';

const userStore = useUser()
const email = ref('')
const pass = ref('')
const error = ref('')
const type = ref('')

const logIn = async () => {
  if (email.value && pass.value) {
    if (type.value == 'login') {
      error.value = await userStore.logIn(email.value, md5(pass.value))
    } else {
      error.value = await userStore.regIn(email.value, md5(pass.value))
    }if(!error.value) {
      navigateTo('/lk')
    }
  } else {
    error.value = 'не введён логин либо пароль'
  }
}
</script>