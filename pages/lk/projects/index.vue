<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Проекты</h1>
    </template>
    <br>
  </AccountMenuComponent>
  <div class="editing-projects">
    <template v-for="project of projects" :key="project.id">
      <NuxtLink :to="`/lk/projects/${project.id}`" class="link">{{project.name}}</NuxtLink>
    </template>
  </div>
  
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const projects = await $fetch('/api/projects/project')
</script>

<style scoped>
.editing-projects {
  display: grid;
  gap: 5px;
  max-width: 800px;
  margin: 50px auto;
}

.editing-projects .link   {
  border: 1px solid gray;
  border-radius: 5px;  
  padding: 3px;
}

.editing-projects .link:hover   {
  background-color: #1e3a8a;  
  color: white;
  transition: background-color 0.3s ease;
}

h1 {
  color: #1e3a8a;
  font-weight: 700;
}
</style>