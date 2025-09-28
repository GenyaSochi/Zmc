<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Проекты</h1>
    </template>
  </AccountMenuComponent>
  
  {{ project }}
</template>

<script setup lang="ts">
const router = useRoute()
const project = await $fetch('/api/projects/by_id/'+router.params.id)
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
</script>