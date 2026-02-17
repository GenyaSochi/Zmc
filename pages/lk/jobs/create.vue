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

    <div class="user-check">
      <input type="text" placeholder="должность" v-model="job.title">
      <input type="text" placeholder="описание" v-model="job.description">
      <button @click="save()" class="save-btn">сохранить</button>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { job as Job } from '@prisma/client';
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const job = ref({} as Job)

const save = () => {
  $fetch('/api/jobs', { method: 'POST', body: job.value })
  navigateTo('/lk/jobs')
}

const delJob = () => {

}
</script>

<style scoped>
.edit-user {
  max-width: 800px;
  margin: 50px auto;
}

.save-btn {
  border: 1px solid grey;
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
  gap: 30px;
  text-align: start;
  border-bottom: 1px solid grey;
  max-width: 1200px;
}

h1 {
  color: #1e3a8a;
  font-weight: 700;
}

.btn {
  border: 3px solid #1e3a8a;
  padding: 14px;
  text-align: center;
  border-radius: 10px;
  font-size: 18px;
  flex: 1;
}
</style>