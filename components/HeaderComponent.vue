<template>
  <nav class="navtag">
    <div class="nav">
      <span class="logo"><img src="/img/sitelogo1.webp" width="160px" style="padding: 0 20px" alt="logo"></span>
      <div class="link" :class="{ 'active': isMenuOpen }">
        <NuxtLink to="/" class="nav">Главная</NuxtLink>
        <NuxtLink to="/catalog" class="nav">Каталог продукции</NuxtLink>
        <NuxtLink to="/projects" class="nav">Проекты</NuxtLink>
        <NuxtLink to="/contacts" class="nav">Контакты</NuxtLink>
      </div>
      <div class="but" :class="{ 'active': isMenuOpen }">
        <NuxtLink to="/#cost" class="butnav">Рассчитать стоимость</NuxtLink>
        <button class="butnav" @click="popup = true">Заказать звонок</button>
      </div>
      <button class="burger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
  <ModalComponent v-model="popup"></ModalComponent>
</template>

<script setup lang="ts">
const popup = ref(false)
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

</script>

<style scoped>

.navtag {
  padding: 15px 0;
  background-color: rgb(30, 33, 61);
  font-family: 'Montserrat', light;
  font-size: 20px;  
  position: sticky;
  top: 0;
  z-index: 100;
  overflow: hidden;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  color: white;
  font-size: 20px;
  height: 110px;
  font-family: 'Montserrat', light;  
}

.but {
  font-size: 20px;
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

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.burger span {
  width: 100%;
  height: 3px;
  background: white;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

@media screen and (max-width:1920px) {

  .navtag,
  .nav,
  .but,
  .butnav {
    font-size: 20px;
  }

  .nav {
    justify-content: space-evenly;
  }

  .but {
    gap: 30px;
  }

  .link {
    gap: 40px;
  }

  .logo {
    width: 140px;
  }
}

@media screen and (max-width:1600px) {

  .navtag,
  .nav,
  .but,
  .butnav {
    font-size: 19px;
  }

  .nav {
    justify-content: space-evenly;
    padding-right: 20px;
  }

  .but {
    gap: 15px;
  }

  .butnav {
    width: 247px;
  }

  .link {
    gap: 24px;
  }

  .logo {
    width: 120px;
  }
}

@media screen and (max-width:1366px) {

  .navtag,
  .nav,
  .but,
  .butnav {
    font-size: 18px;
  }

  .nav { 
    padding-right: 10px;
  }
  
  .link {
    gap: 40px;
  }
  .but {
    gap: 30px;
  }
  .butnav {
    width: 224px;
  }

  .logo {
    padding: 0 60px 0 0;
  }
}

@media screen and (max-width:992px) {

  .navtag,
  .nav,
  .but,
  .butnav {
    font-size: 17px;
  }

  .nav {
    justify-content: space-evenly;
    padding-left: 10px;
  }

  .but {
    gap: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .butnav {
    text-align: center;
    width: 212px;
  }

  .link {
    gap: 10px;
  }

  .logo {
    display: none;
  }
}

@media screen and (max-width:768px) {

  .navtag,
  .nav,
  .but,
  .butnav {
    font-size: 16px;
  }

  .burger {
    display: flex;
  }

  .navtag {
    padding: 30px 0;
    height: 100px;
  }

  .nav {
    display: flex;
    justify-content: flex-start;
    text-align: center;
    padding-left: 20px;
    height: 40px;
  }

  .link {
    display: none;
    flex-direction: column;
    gap: 8px;
    position: absolute;
    padding-bottom: 10px;
    top: 74px;
    left: 0;
    width: 100%;
    background-color: rgb(30, 33, 61);
  }

  .link.active {
    display: flex;
  }

  .but {
    display: none;
  }

  .logo {
    display: none;
  }
}

@media screen and (max-width:576px) {

  .navtag,
  .nav,
  .but,
  .butnav {
    font-size: 15px;
  }

  .burger {
    display: flex;
  }

  .navtag {
    padding: 30px 0;
    height: 100px;
  }

  .nav {
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    height: 40px;
  }

  .link {
    display: none;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    padding-bottom: 10px;
    top: 74px;
    left: 0;
    width: 100%;
    height: 295px;
    background-color: rgb(30, 33, 61);
  }

  .link.active {
    display: flex;
  }

  .but.active {
    display: flex;
    position: absolute;
    left: 10px;
    top: 272px;
    gap: 18px;
  }

  .butnav {
    border: none;
    width: none;
    text-align: left;
  }

  .logo {
    display: none;
  }
}
</style>