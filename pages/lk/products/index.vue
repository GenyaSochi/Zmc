<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Продукция</h1>
    </template>
    <br>
    <button>add product</button>
  </AccountMenuComponent>
  <template v-for="product of products" :key="product.id">
    <NuxtLink :to="`/lk/products/${product.id}`">{{product.name}}</NuxtLink><br>
  </template>
  
</template>

<script setup lang="ts">
const userStore = useUser()
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const products = await $fetch('/api/products')
</script>