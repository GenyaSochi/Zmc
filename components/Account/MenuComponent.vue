<template>
  <div class="proj_all">
    <div><slot name="top"></slot></div>
    <NuxtLink to="/lk/projects">проект</NuxtLink><br>
    <NuxtLink to="/lk/products">продукт</NuxtLink><br>
    <NuxtLink to="/lk/jobs">вакансии</NuxtLink><br>
    <NuxtLink to="/lk">личный кабинет</NuxtLink><br>
    <NuxtLink v-if="userStore.user?.admin" to="/lk/users">пользователи</NuxtLink>
    <div class="buttons" style="display: flex; padding: 10px 0; gap: 10px; flex-direction: column;">
      <button @click="userStore.logOut" type="submit" class="btn">выход</button>
      <NuxtLink to="/" class="btn">на сайт</NuxtLink>
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
  border-radius: 10px;
  margin: 20px auto;
  position: relative; 
}

.buttons {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 150px;
}

@media screen and (max-width:600px) {
  .buttons {
    position: relative;
    width: auto;
  }
}

</style>