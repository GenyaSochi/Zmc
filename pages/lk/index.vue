<template>
  <div class="lk">
    <p>LK</p>
    <input type="введите логин" class="llk">
    <input type="введите пароль" class="llk">
  </div>
</template>

<!-- 
<script setup lang="ts">
import { ref } from 'vue'
import type { project, product, user } from '@prisma/client';

const route = useRoute()

interface User {
  name: string,
  login: string,
  pass: string,
}

export const useUser = defineStore('user', () => {//user реактивная переменная
  const user = ref(undefined as undefined | User)//пользователь не авторизован или объкт типа User
  user.value = undefined // Сбрасываем состояние пользователя
  delete localStorage.user // Удаляем пользователя из localStorage
  navigateTo('/lk')// перенаправит на страницу входа в лк


const logIn = async (login: string, pass: string) => {
  try {
    user.value = await $fetch<User>('/api/login', {
      method: 'POST',
      body: { login, pass }
    })
    return user.value
  } catch (error) {
    console.error('Ошибка авторизации:', error)
    user.value = undefined
    throw new Error('Неверный логин или пароль')
  }
}
})
</script> -->

<style scoped>
.lk{
 height: 400px;
}

.llk {
  color: black;
  height: 60px;
  background-color: blue;
  margin: 20px;
}
</style>