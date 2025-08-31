<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>  
</template>

<script setup lang="ts">
import { useUser } from '~~/stores/useUser';
onMounted(()=>{
  const userStore = useUser()
  userStore.autoLogin()
})
</script>

<style>
@import url(~/assets/reset.css);
@import url(~/assets/style.css);
</style>