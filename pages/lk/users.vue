<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Пользователи</h1>
    </template>
    <br>
    <button>добавить пользователя</button>
  </AccountMenuComponent>
  {{ users }}
</template>


<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const users = await $fetch('/api/users')
</script>