<template>
  <div class="proj_all">
    <div>
      <slot name="top"></slot>
    </div>
    <NuxtLink to="/lk/projects">Проект</NuxtLink><br>
    <NuxtLink to="/lk/products">Продукт</NuxtLink><br>
    <NuxtLink to="/lk/jobs">Вакансии</NuxtLink><br>
    <NuxtLink to="/lk">Личный кабинет</NuxtLink><br>
    <NuxtLink v-if="userStore.user?.admin" to="/lk/users">Пользователи</NuxtLink>
    <div class="buttons" style="display: flex; padding: 10px 0; gap: 10px; flex-direction: column;">
      <button @click="userStore.logOut" type="submit" class="btn">Выход</button>
      <NuxtLink to="/" class="btn">На сайт</NuxtLink>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUser()
</script>

<style scoped>
.proj_all {
  padding: 30px 10px 20px 30px;
  border: 5px solid #1e3a8a;
  max-width: 800px;
  min-height: 500px;
  border-radius: 10px;
  margin: 20px auto;
}

.buttons {
  padding: 90px 0px;
  width: 150px;
}

@media screen and (max-width:850px) {}
</style>