<template>

  <nav>
    
      <div class="container nav">
        <span class="logo"><img src="/img/sitelogo1.png" width="128px" style="padding: 0 20px" alt="logo"></span>
        <div class="link">
          <NuxtLink to="/main" class="nav">Главная</NuxtLink>
          <NuxtLink to="/catalog" class="nav">Каталог продукции</NuxtLink>
          <NuxtLink to="/projects" class="nav">Проекты</NuxtLink>
          <NuxtLink to="/contacts" class="nav">Контакты</NuxtLink>
        </div>
        <div class="but">
          <button>Рассчитать стоимость</button>        
          <button>Заказать звонок</button>
        </div>
      </div>
         
  </nav>

</template>


<style scoped>
nav {
    padding: 15px 0;
    background-color: rgb(56, 52, 52);
  }
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: whitesmoke;
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

   
   
</style>