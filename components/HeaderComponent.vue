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
      <div class="but">
        <a href="/#cost" class="butnav">Рассчитать стоимость</a>
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
  .navtag {
    font-size: 20px;
  }

  .nav {
    font-size: 20px;
    justify-content: space-evenly;
  }

  .but {
    font-size: 20px;
  }

  .butnav {
    font-size: 20px;
  }
}

@media screen and (max-width:1795px) {
  .navtag {
    font-size: 20px;
  }

  .nav {
    font-size: 20px;
    justify-content: space-evenly;
  }

  .but {
    font-size: 20px;
  }

  .link {    
    justify-content: center;
    gap: 30px;
  }

  .butnav {
    font-size: 20px;
    width: 280px;
  }
  .logo img {
    width: 140px;
  }
}

@media screen and (max-width:1581px) {
  .navtag {
    font-size: 19px;
  }

  .nav {
    font-size: 19px;
    justify-content: space-evenly;
  }

  .but {
    font-size: 19px;
  }

  .link {
    display: flex;
    gap: 40px;
  }

  .butnav {
    font-size: 19px;
    width: 260px;
  }

  .logo img {
    width: 130px;
  }
}

@media screen and (max-width:1384px) {
  .navtag {
    font-size: 18px;
  }

  .nav {
    font-size: 18px;
  }

  .but {
    font-size: 18px;
  }

  .butnav {
    font-size: 18px;  
    width: 240px;
  }
  .logo img {
    width: 120px;
  }
}

@media screen and (max-width:1314px) {
  .navtag {
    font-size: 17px;
  }

  .nav {
    font-size: 17px;
  }

  .but {
    font-size: 17px;
    gap: 20px;
  }

  .link {
    display: flex;
    gap: 22px;
  }

  .butnav {
    width: 224px;
    font-size: 17px;
  }
  .logo img {
    width: 110px;
  }
}

@media screen and (max-width:1233px) {
  .navtag {
    font-size: 16px;
  }

  .nav {
    display: flex;
    font-size: 16px;
  }

  .but {
    font-size: 16px;
    gap: 10px;
  }

  .link {
    display: flex;
    gap: 10px;
  }

  .butnav {
    width: 202px;
    font-size: 16px;
  }

  .logo img {
    width: 96px;
  }
}

@media screen and (max-width:998px) {
  .navtag {
    padding: 10px 0;
    font-size: 15px;
  }

  .nav {
    font-size: 15px;
    text-align: center;
  }

  .but {
    font-size: 15px;
    gap: 12px;
  }

  .link {
    display: flex;
    gap: 12px;
    padding-right: 12px;
  }

  .butnav {
    width: 189px;
    font-size: 15px;
  }

  .logo img {
    display: none;
  }
}

@media screen and (max-width:942px) {
  .navtag {
    padding: 10px 0;
    font-size: 15px;
  }

  .nav {
    font-size: 15px;
    text-align: center;
  }

  .but {
    font-size: 15px;
    gap: 10px;
  }

  .link {
    display: flex;
    gap: 10px;
    padding-right: 12px;
  }

  .butnav {
    width: 190px;
    font-size: 15px;
  }

  .logo img {
    display: none;
  }
}

@media screen and (max-width:828px) {
  .navtag {
    padding: 10px 0;
    font-size: 14px;
  }

  .nav {
    font-size: 14px;
    text-align: center;
  }

  .but {
    font-size: 14px;
    gap: 10px;
  }

  .link {
    display: flex;
    gap: 10px;
    padding-right: 12px;
  }

  .butnav {
    width: 177px;
    font-size: 14px;
  }

  .logo img {
    display: none;
  }
}

@media screen and (max-width:829px) {
  .navtag {
    padding: 10px 0;
    font-size: 14px;
  }

  .nav {
    font-size: 14px;
    text-align: center;
  }

  .but {
    display: flex;
    flex-direction: column;
    font-size: 14px;  
    text-align: center; 
  }

  .link {
    display: flex;  
    padding: 0 10px;
  }

  .butnav {
    width: 178px;
    font-size: 14px;   
  }

  .logo img {
    display: none;
  }
}

@media screen and (max-width:576px) {
  .link {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 36px;
    left: 0;
    width: 100%;
    background-color: rgb(30, 33, 61);
    box-sizing: border-box;
  }

  .link.active {
    display: flex;
  }
  .navtag {
    padding: 16px 20px;
    background-color: rgb(30, 33, 61);
    height: 58px;  
    font-size: 14px;
}
  .nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-decoration: none;
    color: white;
    font-size: 14px;
    padding: 10px;    
  }

  .but {
    display: none;
  }

  .logo {
    display: none;
  }

  .burger {
  display: none;
  /* flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10; */
}

.burger span {
  width: 100%;
  height: 3px;
  background: white;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}
}
</style>