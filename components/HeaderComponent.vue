<template>
  <nav class="navtag">        
      <div class="container nav">
        <span><img src="/img/sitelogo1.webp" width="160px" style="padding: 0 20px" alt="logo"></span>
        <div class="link">         
          <NuxtLink to="/" class="nav">Главная</NuxtLink>
          <NuxtLink to="/catalog" class="nav">Каталог продукции</NuxtLink>
          <NuxtLink to="/projects" class="nav">Проекты</NuxtLink>
          <NuxtLink to="/contacts" class="nav">Контакты</NuxtLink>                 
        </div>
        <div class="but">
          <a href="#cost" class="butnav">Рассчитать стоимость</a>      
          <button class="butnav" @click="popup=true">Заказать звонок</button>       
        </div>       
      </div>         
  </nav>
  <ModalComponent v-model="popup"></ModalComponent>
</template>

<script setup lang="ts">
const popup = ref(false)

</script>

<style scoped>
.navtag {
    padding: 15px 0;
    background-color: rgb(30, 33, 61);
    font-family: 'Montserrat', light;
    font-size: 20px;
    margin-bottom: 30px;
  }
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: white;
    font-size: 20px;
    height: 110px;
    font-family: 'Montserrat', light;      
}
.but {
   font-size: 18px;
   font-family: 'Montserrat', light;
   padding: 5px;
   display: flex;
   gap: 30px;
}
.link {
   display: flex;
   gap: 60px;
}
.butnav {
  border: 2px solid white;
  padding: 5px;
  width: 294px;
  text-align: center;
  font-size: 20px;
}

.button:hover {
  color: black;
  background-color: white;
}

</style>