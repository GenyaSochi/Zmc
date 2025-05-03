<template>
  <header class="navtag">
    <div class="nav_all">
      <img src="/img/sitelogo1.webp" alt="logo" class="logo">
      <div class="link">
        <NuxtLink to="/" class="nav">Главная</NuxtLink>
        <NuxtLink to="/catalog" class="nav">Каталог продукции</NuxtLink>
        <NuxtLink to="/projects" class="nav">Проекты</NuxtLink>
        <NuxtLink to="/contacts" class="nav">Контакты</NuxtLink>
      </div>
      <div class="but">
        <NuxtLink to="/#cost" class="butnav">Рассчитать стоимость</NuxtLink>
        <button class="butnav" @click="popup = true">Заказать звонок</button>
      </div>
    </div>
    <button class="burger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <Teleport to="body">
      <div @click="isMenuOpen = false" :class="{ hidden: !isMenuOpen, 'active': isMenuOpen }">
        <NuxtLink to="/">Главная</NuxtLink>
        <NuxtLink to="/catalog">Каталог продукции</NuxtLink>
        <NuxtLink to="/projects">Проекты</NuxtLink>
        <NuxtLink to="/contacts">Контакты</NuxtLink>
        <NuxtLink to="/#cost">Рассчитать стоимость</NuxtLink>
        <button @click="popup = true" class="butnav">Заказать звонок</button>
      </div>
    </Teleport>
  </header>
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
  padding: 10px 0;
  background-color: rgb(30, 33, 61);
  font-family: 'Montserrat', light;
  font-size: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  overflow: hidden;
}

.hidden,
.active {
  display: none;
}

.nav_all {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  color: white;
  font-size: 20px;
  height: 76px;
  font-family: 'Montserrat', light;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  color: white;
  font-size: 20px;
  height: 76px;
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
  width: 50px;
  height: 35px;
  border: none;
  position: absolute;
  background-color: transparent;
  cursor: pointer;
}

.burger span {
  width: 50px;
  height: 3px;
  background: white;
  left: 10px;
}

.burger span:nth-child(1) {
  transform: translateY(-10px);
}

.burger span:nth-child(3) {
  transform: translateY(10px);
}

.logo {
  width: 142px;
  padding: 0 20px;
}

@media screen and (max-width:1920px) {}

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
    width: 144px;
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
    width: 122px;
    padding-left: 20px;
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

  .but {
    font-size: 16px;
  }

  .butnav {
    font-size: 16px;
    border: none;
    text-align: left;
    padding: 0;
  }

  .burger {
    display: flex;
    flex-direction: column;
    right: 25px;
    top: 42px;
  }

  .navtag {
    height: 90px;
    font-size: 16px;
  }

  .nav {
    display: none;
  }

  .active {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 300px;
    background-color: white;
    position: absolute;
    right: 0;
    top: 90px;
    z-index: 101;
    padding-left: 10px;
    background-color: rgb(30, 33, 61);
    color: white;
    font-size: 16px;
    padding-bottom: 21px;
  }

  .link {
    position: absolute;
  }

  .link.active {
    display: flex;
    gap: 10px;
    position: absolute;
    transform: translateY(300px);
    height: 200px;
  }

  .but {
    display: none;
  }

  .logo {
    display: flex;
    position: absolute;
    left: 0;
    top: 25px;
    width: 110px;
  }

  a {
    font-size: 16px;
    padding-bottom: 5px;
  }
}

@media screen and (max-width:576px) {

  .but,
  .butnav {
    font-size: 15px;
  }

  .navtag {
    padding: 24px 0;
    height: 80px;
    font-size: 15px;
  }

  .nav {
    display: flex;
    justify-content: flex-start;
    text-align: center;
    padding-left: 20px;
    height: 40px;
    top: 29px;
    position: absolute;
    left: 650px;
    font-size: 15px;
  }

  .link.active {
    display: flex;
  }

  .but.active {
    display: flex;
    position: absolute;
    left: 0;
    top: 272px;
    gap: 18px;
  }

  .butnav {
    border: none;
    width: none;
    text-align: left;
  }

  .logo {
    position: absolute;
    left: 10px0;
    width: 110px;
    top: 14px;
  }

  .burger {
    right: 20px;
    top: 33px;
  }

  .active {
    width: 224px;
    top: 68px;
  }

  .burger span {
    width: 42px;
  }
}

@media screen and (max-width:320px) {
  .logo {
    width: 94px;
    top: 19px;
  }
  .burger span {
    width: 35px;
  }
  .burger {
    right: 0;
  }
  a {
    font-size: 14px;
  }
  .but, .butnav {
    font-size: 14px;
  }

}
</style>