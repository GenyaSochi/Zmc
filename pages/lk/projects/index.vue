<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Проекты</h1>
    </template>
    <br>
  </AccountMenuComponent>
  <template v-for="project of projects" :key="project.id">
    <NuxtLink :to="`/lk/projects/${project.id}`">{{project.name}}</NuxtLink><br>
  </template>
  
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const projects = await $fetch('/api/projects/project')
</script>