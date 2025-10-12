<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Пользователи</h1>
    </template>
    <br>
  </AccountMenuComponent>

  <div class="edit-user">
    <div class="user-check">
      <p>почта</p>
      <p>активный</p>
      <p>админ</p>
      <p></p>
    </div>
    <template v-for="user of users" :key="user.id">
      <div class="user-check">
        <p>{{ user.email }}</p>
        <input type="checkbox" v-model="user.active">
        <input type="checkbox" v-model="user.admin">
        <button @click="save(user)" class="save-btn">сохранить</button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { user as User } from '@prisma/client';
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const users = await $fetch<User[]>('/api/users')

const save = (user: User) => {
  $fetch('/api/users', { method: 'PUT', body: user })
}
</script>

<style>
.edit-user {
  max-width: 800px;
  margin: 50px auto;
}

.save-btn {
  border: 2px solid black;
  border-radius: 5px;
  padding: 2px;
  text-align: center;
  margin: 10px; 
}

.save-btn:active {
  background-color: #1e3a8a;
  color: white;
}

.user-check {
  display: grid;
  grid-template-columns: 360px 150px 100px 160px;
  align-items: center;
  gap: 10px;
  text-align: center;
  border-bottom: 1px solid grey;
  max-width: 1200px;
}

</style>