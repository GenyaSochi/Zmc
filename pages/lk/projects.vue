<template>
  <div class="proj_all">
    <p class="proj_add">добавить проект</p>
    <NuxtLink to="/lk/projects">проект</NuxtLink><br>
    <NuxtLink to="/lk/products">продукт</NuxtLink><br>
    <NuxtLink to="/lk">личный кабинет</NuxtLink><br>
    <NuxtLink v-if="userStore.user?.admin"  to="/lk/users">пользователи</NuxtLink>
  </div>
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

.proj_all {
  padding: 30px 10px 10px 30px;
  border: 2px solid gray;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  margin: 20px;
}

</style>