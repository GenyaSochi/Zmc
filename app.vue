<template>
  <div class="view">
    <nav>
      <div class="nav">        
        <span class="logo">ЛОГО</span>
        <a href="/main" class="nav">Главная</a>
        <a href="/catalog" class="nav">Каталог продукции</a>
        <a href="/projects" class="nav">Проекты</a>
        <a href="/contacts" class="nav">Контакты</a>
        <button>Рассчитать стоимость</button>
        <button>Заказать звонок</button>
      </div>

    </nav>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>


<style scoped>
.logo {
  margin: 0;
  padding: 20px;
  color: whitesmoke;
  width: 64px; 
}

.nav {
  font-family: inherit;
  margin: 0;
  padding: 20px;
  text-decoration: none;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.view {
  background-color: rgb(20, 15, 11);
  padding-top: 20px;
}
</style>