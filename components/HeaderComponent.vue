<template>
  <nav class="navtag">
    <div class="container nav">
      <span class="logo"><img src="/img/sitelogo1.webp" width="160px" style="padding: 0 20px" alt="logo"></span>
      <div class="link" :class="{ 'active': isMenuOpen }">
        <NuxtLink to="/" class="nav">Главная</NuxtLink>
        <NuxtLink to="/catalog" class="nav">Каталог продукции</NuxtLink>
        <NuxtLink to="/projects" class="nav">Проекты</NuxtLink>
        <NuxtLink to="/contacts" class="nav">Контакты</NuxtLink>
      </div>
      <div class="but">
        <a href="#cost" class="butnav">Рассчитать стоимость</a>
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
  justify-content: space-between;
  text-decoration: none;
  color: white;
  font-size: 20px;
  height: 110px;
  font-family: 'Montserrat', light;
}

.but {
  font-size: 18px;
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

/* 
@media screen and (max-width:1200px) {
  .navtag {
  padding: 15px 0;
  background-color: rgb(30, 33, 61);
  font-family: 'Montserrat', light;
  font-size: 20px;
 
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: white;
  font-size: 20px;
  height: 110px;
  font-family: 'Montserrat', light;
}

.but {
  font-size: 18px;
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

} */

@media screen and (max-width:998px) {
  .navtag {
    padding: 10px 0;
    font-size: 18px;
  }

  .nav {   
    font-size: 18px;  
    text-align: center; 
  }

  .but {
    font-size: 18px;   
    gap: 12px;   
    margin-right: 16px;
  }

  .link {
    display: flex;
    gap: 18px;
    padding-right: 12px;
  }

  .butnav {
    border: 2px solid white;
    padding: 5px;
    width: 189px;
    text-align: center;
    font-size: 18px;
  }

  .logo img {
    width: 120px;

  }
}

/* @media screen and (max-width:768px) {
  .burger {
    display: flex;
  }

  .link {
    display: none;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 110px;
    left: 0;
    width: 100%;
    background-color: rgb(30, 33, 61);
    padding: 20px;
    box-sizing: border-box;
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
  .burger {
    display: flex;
  }

  .link {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 110px;
    left: 0;
    width: 100%;
    background-color: rgb(30, 33, 61);
    box-sizing: border-box;
  }

  .link.active {
    display: flex;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
} */
</style>