<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Продукция</h1>
    </template>
    <br>
  </AccountMenuComponent>
  <div class="editing-product">
    <template v-for="product of products" :key="product.id">
      <NuxtLink :to="`/lk/products/${product.id}`">{{product.name}}</NuxtLink>
    </template>
  </div>
  
</template>

<script setup lang="ts">
const userStore = useUser()
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const products = await $fetch('/api/products')


</script>

<style>
.editing-product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 800px;
  margin: 0 auto 30px;
}
</style>