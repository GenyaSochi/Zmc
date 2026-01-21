<template>
  <header class="navtag">
    <nav class="nav_all">
      <NuxtLink to="/"><img src="/img/sitelogo1.webp" alt="logo" class="logo"></NuxtLink>
      <div class="link">
        <NuxtLink to="/" class="nav">Главная</NuxtLink>
        <NuxtLink to="/catalog" class="nav">Каталог продукции</NuxtLink>
        <NuxtLink to="/projects" class="nav">Проекты</NuxtLink>
        <NuxtLink to="/contacts" class="nav">Контакты</NuxtLink>
      </div>
      <div class="but">
        <NuxtLink to="/#cost" class="butnav">Рассчитать стоимость</NuxtLink>
      </div>
      <div>
        <button @click="popup = true" class="buttel">+7 (351) 304-42-35</button>
        <button @click="popup = true" class="buttel">+7 (900) 075-70-21</button>
        <NuxtLink to="/#cost" class="buttel">sales@zmkural.com</NuxtLink>
      </div>
      <!-- <button class="butnav" @click="popup = true">Заказать звонок</button> -->
    </nav>
    <button class="burger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <Teleport to="body">
      <div @click="isMenuOpen = false" :style="`top:${top}px`" :class="{ hidden: !isMenuOpen, 'active': isMenuOpen }">
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
const top = ref(0)

const toggleMenu = () => {
  top.value = !isMenuOpen.value ? window.pageYOffset + 80 : 0
  isMenuOpen.value = !isMenuOpen.value
}
function closeOnScroll() {
  isMenuOpen.value = false
}
onMounted(() => {
  document.addEventListener('scroll', closeOnScroll)
})
onBeforeUnmount(() => {
  document.removeEventListener('scroll', closeOnScroll)
})
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
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
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
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid white;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
  padding: 5px;
  width: 294px;
  text-align: center;
  font-size: 20px;
}

.buttel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  font-family: 'Montserrat', light;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
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
  text-shadow: 0px 0px #f6f6f6;
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
  box-shadow: 0px 0px #f6f6f6f6;
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
    text-align: center;
  }

  .link {
    gap: 10px;
  }

  .but {
    gap: 30px;
  }

  .butnav {
    /* width: 224px; */
    display: none;
  }

  .logo {
    /* width: 114px; */
    padding-left: 20px;
  }

  .nav_all {
    gap: 5px;
  }

  .buttel {
    font-size: 18px;
    width: 196px;
  }
}

@media screen and (max-width:992px) {
  .navtag {
    padding-left: 5px;
  }

  .nav {
    justify-content: space-evenly;
    padding-left: 0;
    font-size: 17px;
    text-align: center;
  }

  .but {
    gap: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 17px;
  }

  .butnav {
    text-align: center;
    width: 170px;
  }

  .link {
    gap: 5px;
  }

  .logo {
    display: none;
  }

  .nav_all {
    justify-content: space-around;
  }

  .buttel {
    padding-left: 0;
    font-size: 17px;
  }
}

@media screen and (max-width:768px) {
  .but {
    font-size: 20px;
    display: none;
  }

  .buttel {
    display: none;
  }

  .butnav {
    font-size: 20px;
    border: none;
    width: 300px;
    display: flex;
    justify-content: flex-start;
    padding: 0 0 10px 15px;
  }

  .burger {
    display: flex;
    flex-direction: column;
    right: 25px;
    top: 42px;
  }

  .navtag {
    height: 90px;
    font-size: 18px;
  }

  .nav {
    display: none;
  }

  .active {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 373px;
    background-color: white;
    position: absolute;
    right: 0;
    top: 90px;
    z-index: 101;
    padding-left: 10px;
    background-color: rgb(30, 33, 61);
    color: white;
    font-size: 16px;
    padding-bottom: 8px;
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

  .logo {
    display: flex;
    position: absolute;
    left: 0;
    top: 20px;
    width: 124px;
  }

  a {
    font-size: 20px;
    padding-left: 15px;    
  }
}

@media screen and (max-width:576px) {

  .navtag {
    padding: 24px 0;
    height: 80px;
    font-size: 18px;
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

  /* .butnav {
    border: none;
    width: none;
  } */

  .logo {
    position: absolute;
    left: 10px;   
    top: 14px;
  }

  .burger {
    right: 20px;
    top: 33px;
  }

  .active {

    top: 68px;
  }

  .burger span {
    width: 42px;
  }

  @media screen and (max-width:410px) {
    .active {
      padding-bottom: 3px;
    }

    .logo {
      left: -7px;
    }

    .nav {
      box-shadow: 1px 0px 6px rgb(114, 114, 114);
    }
  }
}
</style>