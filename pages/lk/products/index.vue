<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Продукция</h1>
    </template>
    <br>
  </AccountMenuComponent>
  <div class="editing-product">
    <template v-for="product of products" :key="product.id">
      <NuxtLink :to="`/lk/products/${product.id}`" class="redact-product">{{ product.name }}</NuxtLink>
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

<style scoped>
.editing-product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 800px;
  margin: 0 auto 30px;
  gap: 5px;
}

.redact-product {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 3px;
}

.redact-product:hover {
  background-color: #1e3a8a;
  color: white;
  transition: background-color 0.3s ease;
}

h1 {
  color: #1e3a8a;
  font-weight: 700;
}
</style>
