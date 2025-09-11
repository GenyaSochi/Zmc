<template>
  <h1>Пользователи</h1>
  <NuxtLink to="/lk">личный кабинет</NuxtLink><br>
  <NuxtLink to="/lk/products">продукт</NuxtLink><br>
  <NuxtLink to="/lk/projects">проект</NuxtLink><br>
  <NuxtLink to="/lk/users">пользователи</NuxtLink>
  {{ users }}
</template>


<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const users = await $fetch('/api/users')
</script>