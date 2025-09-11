<template>
  <h1>Продукция</h1>
  <div>
    <NuxtLink to="/lk">личный кабинет</NuxtLink><br>
    <NuxtLink to="/lk/products">продукт</NuxtLink><br>
    <NuxtLink to="/lk/projects">проект</NuxtLink><br>
    <NuxtLink v-if="userStore.user?.admin"  to="/lk/users">пользователи</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const userStore = useUser()
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const products = []
</script>