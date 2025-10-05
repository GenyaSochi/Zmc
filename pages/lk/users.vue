<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Пользователи</h1>
    </template>
    <br>
  </AccountMenuComponent>

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
      <button @click="save(user)" class="save-btn">save</button>
    </div>
  </template>

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
.save-btn {
  border: 2px solid black;
  padding: 2px;
  text-align: center;
}

.user-check {
  display: grid;
  grid-template-columns: 400px 150px 100px 75px;
  align-items: center;
}
</style>