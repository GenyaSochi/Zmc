<template>
  <nav class="navtag">
    <div class="nav">
      <img src="/img/sitelogo1.webp" alt="logo" class="logo">
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
      <button class="burger" @click="toggleMenu ">
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
  justify-content: space-evenly;
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
  width: 50px;
  height: 25px;
  /* background: transparent; */
  /* border: none; */
  cursor: pointer;
  /* padding: 0;
  z-index: 10; */
  position: absolute;
}

.burger span {
  width: 100%;
  height: 3px;
  background: white;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.logo {
  width: 144px;
  padding: 0 20px;
}

@media screen and (max-width:1920px) {

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
    padding: 22px 0;
    height: 100px;
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
  }
  /* 
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
    } */

  .link.active {
    display: flex;
  }

  .but {
    display: none;
  }

  .logo {
    display: flex;
    position: absolute;
    right: 549px;
    width: 110px;
  }
}

@media screen and (max-width:576px) {

  .navtag,
  .nav,
  .but,
  .butnav {
    font-size: 15px;
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
    top: 29px;
    position: absolute;
    left: 650px;  
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

  /* .logo {   
    display: flex;
    position: absolute;
    right: 549px;
    width: 110px;
  } */
  .burger {
    left: 480px;
  }
}
</style>