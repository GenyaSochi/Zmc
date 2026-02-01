<template>
  <form v-if="!userStore.user" @submit.prevent class="lk">
    <div>
      <p class="entrance">Вход для сотрудников</p>
      <label for="login" class="text">Введите логин:</label>
      <input type="text" class="llk" v-model="email" required placeholder="электронная почта">
      <label for="login" class="text">Введите пароль:</label>
      <input type="password" class="llk" v-model="pass" required placeholder="пароль">
      <p v-if="message">{{ message }}</p>
      <div style="display: flex; padding: 10px 0; gap: 10px; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; gap:10px;">
          <button @click="logIn" type="submit" class="btn">войти</button>
          <NuxtLink to="/" class="btn">на сайт</NuxtLink>
        </div>
        <button @click="regIn" type="submit" class="btn">зарегистрироваться</button>
      </div>
    </div>
  </form>
  <div v-else>
    <AccountMenuComponent>
      <template #top>
        <h1>Персональная страница</h1>
      </template>
    </AccountMenuComponent>
  </div>
</template>


<script setup lang="ts">
import md5 from 'md5'
const pass = ref('')
const email = ref('')
const userStore = useUser()
const message = ref('')


definePageMeta({
  layout: 'admin',
})

const logIn = async () => {
  message.value = await userStore.logIn(email.value, md5(pass.value))
}
const regIn = async () => {
  message.value = await userStore.regIn(email.value, md5(pass.value))
}

</script>

<style scoped>
.lk {
  height: 100%;
  max-width: 340px;
  padding: 20px;
  border: 2px solid grey;
  border-radius: 10px;
  margin: 20px 0 0 20px;
}

.llk {
  color: black;
  height: 60px;
  background-color: white;
  border: 2px solid grey;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
}

.btn {
  border: 3px solid #1e3a8a;
  padding: 14px;
  text-align: center;
  border-radius: 10px;
  font-size: 18px;
  flex: 1;
}

.btn:hover {
  color: white;
  background: #1e3a8a;
  transition: background-color 0.3s ease;
}

.entrance {
  font-size: 23px;
  text-align: center;
  padding-bottom: 10px;
}

.text {
  font-size: 20px;
  text-align: center;
  padding: 0 0 10px 10px;
}

h1 {
  color: #1e3a8a;
  font-weight: 700;
}
</style>