<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Вакансии</h1>
    </template>
    <br>
  </AccountMenuComponent>

  <div class="edit-user">
    <div class="user-check">
      <p>название</p>
      <p>описание</p>
      <p></p>
    </div>
    <template v-for="job of jobs" :key="job.id">
      <div class="user-check">
        <input type="text" v-model="job.title"/>
        <input type="text" v-model="job.description"/>
        <button @click="save(job)" class="save-btn">сохранить</button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { job as Job } from '@prisma/client';
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const jobs = await $fetch<Job[]>('/api/jobs')

const save = (job: Job) => {
  $fetch('/api/jobs', { method: 'PUT', body: job })
}
</script>

<style scoped>
.edit-user {
  max-width: 800px;
  margin: 50px auto;
}

.save-btn {
  border: 2px solid black;
  border-radius: 5px;
  padding: 2px;
  text-align: center;
  margin: 10px; 
  width: 200px;
}

.save-btn:active {
  background-color: #1e3a8a;
  color: white;
}

.user-check {
  display: grid;
  grid-template-columns: 360px 150px 225px;
  align-items: center;
  justify-items: start;
  gap: 10px;
  text-align: start;
  border-bottom: 1px solid grey;
  max-width: 1200px;
  
}

h1 {
  color: #1e3a8a;
  font-weight: 700;
}
</style>