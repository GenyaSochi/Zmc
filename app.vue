<template>
  <div class="view">
    <nav>
      <div><span class="logo">ЛОГО<a href="/src/img/sitelogo1.png"></a></span>
        <a href="/main" class="nav">Главная</a>      
        <a href="/catalog" class="nav">Каталог продукции</a>
        <a href="/contacts" class="nav">Проекты</a>      
        <a href="/contacts" class="nav">Контакты</a>
        <button>Рассчитать стоимость</button>
        
        
      </div>
      <a href="/src/img/sitelogo1.png" style="background-color: blueviolet ;"></a>
    </nav>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>


<style scoped>
.logo {
  margin: 0;
  padding: 20px 400px 0 20px;
  color: whitesmoke;
  width: 64px;
}

.nav {
  font-family: inherit;
  margin: 0;
  padding: 20px;
  text-decoration: none;
  color: whitesmoke;

}

.view {
  background-color: black;
  padding-top: 20px;
}
</style>