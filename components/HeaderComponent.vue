<template>
  <nav class="navtag">        
      <div class="container nav">
        <span><img src="/img/sitelogo1.png" width="136px" style="padding: 0 20px" alt="logo"></span>
        <div class="link">         
          <NuxtLink to="/" class="nav">Главная</NuxtLink>
          <NuxtLink to="/catalog" class="nav">Каталог продукции</NuxtLink>
          <NuxtLink to="/projects" class="nav">Проекты</NuxtLink>
          <NuxtLink to="/contacts" class="nav">Контакты</NuxtLink>                 
        </div>
        <div class="but">
          <NuxtLink to="/privacy"><button class="butnav">Рассчитать стоимость</button> </NuxtLink>       
          <button class="butnav">Заказать звонок</button>      
        </div>
      </div>         
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
.navtag {
    padding: 15px 0;
    background-color: rgb(56, 52, 52);
  }
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-family: 'Exo 2', sans-serif;        
}
.but {
   font-size: 18px;
   font-family: 'Exo 2', sans-serif;
   padding: 5px;
   display: flex;
   gap: 30px;
}
.link {
   display: flex;
   gap: 24px;
}
.butnav {
  border: 2px solid white;
  padding: 5px;
}

.button:hover {
  color: black;
  background-color: white;
}

</style>