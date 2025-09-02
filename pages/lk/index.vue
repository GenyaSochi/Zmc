<template>
  <form @submit.prevent="logIn" class="lk">
    <div v-if="!userStore.user">
      <p class="entrance">Вход для сотрудников</p>
      <label for="login" class="entrance">Введите логин:</label>
      <input type="text" class="llk" v-model="email" required placeholder="логин">
      <label for="login" class="entrance">Введите пароль:</label>
      <input type="text" class="llk" v-model="pass" required placeholder="пароль">
      <button @click="userStore.logOut" type="submit" class="btn">войти</button>
    </div>
    <div v-else>
      <NuxtLink to="/lk">личный кабинет</NuxtLink><br>
      <NuxtLink to="/lk/products">продукт</NuxtLink><br>
      <NuxtLink to="/lk/projects">проект</NuxtLink>
    </div>
  </form>
</template>


<script setup lang="ts">
import md5 from 'md5'
const pass = ref('')
const email = ref('')
const userStore = useUser()

definePageMeta({
  layout: 'admin'
})

const logIn = async()=>{
  userStore.logIn(email.value,md5(pass.value))
}

// import type { project, product, user } from '@prisma/client';

// const route = useRoute()

// interface User {
//   name: string,
//   login: string,
//   pass: string,
// }

// export const useUser = defineStore('user', () => {//user реактивная переменная
//   const user = ref(undefined as undefined | User)//пользователь не авторизован или объкт типа User
//   user.value = undefined // Сбрасываем состояние пользователя
//   delete localStorage.user // Удаляем пользователя из localStorage
//   navigateTo('/lk')// перенаправит на страницу входа в лк


// const logIn = async (login: string, pass: string) => {
//   try {
//     user.value = await $fetch<User>('/api/login', {
//       method: 'POST',
//       body: { login, pass }
//     })
//     return user.value
//   } catch (error) {
//     console.error('Ошибка авторизации:', error)
//     user.value = undefined
//     throw new Error('Неверный логин или пароль')
//   }
// }
// })
</script>

<style scoped>
.lk {
  height: 600px;
  width: 400px;
  padding: 20px;
  
}

.llk {
  color: black;
  height: 60px;
  background-color: white;
  border: 2px solid black;
  margin: 10px;
  padding: 10px;
}

.btn {
  border: 2px solid black;
  padding: 14px;
  margin: 10px;
}

.entrance {
  margin: 10px;
}
</style>