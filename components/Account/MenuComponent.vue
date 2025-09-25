<template>
  <div class="proj_all">
    <div><slot name="top"></slot></div>
    <NuxtLink to="/lk/projects">проект</NuxtLink><br>
    <NuxtLink to="/lk/products">продукт</NuxtLink><br>
    <NuxtLink to="/lk">личный кабинет</NuxtLink><br>
    <NuxtLink v-if="userStore.user?.admin"  to="/lk/users">пользователи</NuxtLink>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const userStore = useUser()
</script>

<style scoped>
.proj_all {
  padding: 30px 10px 10px 30px;
  border: 2px solid gray;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  margin: 20px;
}
</style>