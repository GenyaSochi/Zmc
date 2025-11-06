<template>
  <div class="proj_all">
    <div><slot name="top"></slot></div>
    <NuxtLink to="/lk/projects">проект</NuxtLink><br>
    <NuxtLink to="/lk/products">продукт</NuxtLink><br>
    <NuxtLink to="/lk">личный кабинет</NuxtLink><br>
    <NuxtLink v-if="userStore.user?.admin" to="/lk/users">пользователи</NuxtLink>
    <slot></slot>
    <div class="buttons" style="display: flex; padding: 10px 0; gap: 10px; flex-direction: column;">
        <button @click="userStore.logOut" type="submit" class="btn">выход</button>
        <NuxtLink to="/" class="btn">на сайт</NuxtLink>
      </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUser()
</script>

<style scoped>
.proj_all {
  padding: 30px 10px 10px 30px;
  border: 5px solid #1e3a8a;
  max-width: 800px;
  border-radius: 10px;
  margin: 20px auto;
  position: relative; 
}

.btn {
  border: 3px solid #1e3a8a;
  padding: 14px;
  text-align: center;
  border-radius: 10px;
  font-size: 18px;
  flex: 1;
}

.btn:hover {
  color: white;
  background: #1e3a8a;
  transition: background-color 0.3s ease;
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