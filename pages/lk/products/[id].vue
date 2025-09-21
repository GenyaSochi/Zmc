<template>
  <h1>Продукция</h1>
  <div>
    <NuxtLink to="/lk">личный кабинет</NuxtLink><br>
    <NuxtLink to="/lk/products">продукт</NuxtLink><br>
    <NuxtLink to="/lk/projects">проект</NuxtLink><br>
    <NuxtLink v-if="userStore.user?.admin"  to="/lk/users">пользователи</NuxtLink>
  </div>
  {{ product }}
</template>

<script setup lang="ts">
const router = useRoute()
const userStore = useUser()
const product = await $fetch('/api/products/'+router.params.id)
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const products = []
</script>