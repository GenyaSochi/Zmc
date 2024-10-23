<template>
  <div class="view">
  <nav>
    <div><span class="logo">Лого</span>
    <a href="/about" class="nav">Информация о заводе</a>
    <a href="/main" class="nav">Главная</a>
    <a href="/catalog" class="nav">Каталог</a>
    <a href="/contacts" class="nav">Контакты</a>
  </div>
  </nav>
  <div>
    <NuxtPage/>
  </div>
</div>
</template>


<style scoped>
.logo {
  margin: 0;
  padding: 20px 400px 0 20px;
  color: whitesmoke;
}
.nav {
  font-family: serif;
  margin: 0;
  padding: 20px;
  text-decoration: none;
  color: whitesmoke;
}
.view {
  background-color: black;
}
</style>