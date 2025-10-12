<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Проекты</h1>
    </template>
    <br>
  </AccountMenuComponent>
  <div>
    <template v-for="project of projects" :key="project.id">
      <NuxtLink :to="`/lk/projects/${project.id}`" class="editing-projects">{{project.name}}</NuxtLink><br>
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
  border: 1px solid gray;
  border-radius: 5px;  
  display: block;
  margin: 0  auto;
  padding: 3px;
}
.editing-projects:hover   {
  background-color: #1e3a8a;  
  color: white;
  transition: background-color 0.3s ease;
}

h1 {
  color: #1e3a8a;
  font-weight: 700;
}
</style>