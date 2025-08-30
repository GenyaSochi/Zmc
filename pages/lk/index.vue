<template>

  <div class="lk">
    <p>Личный кабинет</p>
    <input type="text" class="llk" required placeholder="введите логин">
    <input type="text" class="llk" v-model="pass" required placeholder="введите пароль">
    {{ md5(pass) }}
  </div>

</template>


<script setup lang="ts">
import md5 from 'md5'
const pass = ref('')


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
  height: 100%;

}

.llk {
  color: black;
  height: 60px;
  background-color: white;
  border: 2px solid black;
  margin: 20px;
}



</style>