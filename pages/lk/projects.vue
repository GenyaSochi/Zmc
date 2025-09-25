<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Проэкты</h1>
    </template>
    <br>
    <button class="proj_add">добавить проект</button>
  </AccountMenuComponent>
</template>


<script setup lang="ts">
const userStore = useUser()
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})
const projects = []
</script>

<style scoped>
.proj_add{
  font-weight: 500;
  padding-bottom: 40px;
  text-align: center;
}
</style>