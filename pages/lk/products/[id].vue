<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Продукция</h1>
    </template>
  </AccountMenuComponent>
  
  {{ product }}
</template>

<script setup lang="ts">
const router = useRoute()
const userStore = useUser()
const product = await $fetch('/api/products/by_id/'+router.params.id)
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const products = []
</script>