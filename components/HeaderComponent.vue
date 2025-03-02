<template>
  <nav class="navtag">        
      <div class="container nav">
        <span><img src="/img/sitelogo1.webp" width="160px" style="padding: 0 20px" alt="logo"></span>
        <div class="link">
          <div class="menu-icon" @click="toggleMenu">☰</div> 
          <div class="link" :class="{ active: isMenuOpen }">        
          <NuxtLink to="/" class="nav">Главная</NuxtLink>
          <NuxtLink to="/catalog" class="nav">Каталог продукции</NuxtLink>
          <NuxtLink to="/projects" class="nav">Проекты</NuxtLink>
          <NuxtLink to="/contacts" class="nav">Контакты</NuxtLink>                 
        </div>
        <div class="but" :class="{ active: isMenuOpen }">
          <a href="#cost" class="butnav">Рассчитать стоимость</a>      
          <button class="butnav" @click="popup=true">Заказать звонок</button>       
        </div>       
      </div>  
    </div>        
  </nav>
  <ModalComponent v-model="popup"></ModalComponent>
</template>

<script setup lang="ts">
const popup = ref(false)
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

</script>

<style scoped>
.navtag {
    padding: 15px 0;
    background-color: rgb(30, 33, 61);
    font-family: 'Montserrat', light;
    font-size: 20px;
    margin-bottom: 30px;
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

.menu-icon {
  display: none;
  font-size: 30px;
  cursor: pointer;
  color: white;
} 
/* Адаптация для экранов меньше 1200px */
@media screen and (max-width: 1200px) {
  .link {
    gap: 40px;
  }

  .butnav {
    width: 200px;
  }
}

/* Адаптация для экранов меньше 998px */
@media screen and (max-width: 998px) {
  .link {
    gap: 30px;
  }

  .but {
    gap: 20px;
  }

  .butnav {
    width: 180px;
    font-size: 18px;
  }
}

/* Адаптация для экранов меньше 768px */
@media screen and (max-width: 768px) {
  .menu-icon {
    display: block;
  }

  .link,
  .but {
    display: none;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 110px;
    left: 0;
    width: 100%;
    background-color: rgb(30, 33, 61);
    padding: 20px;
    text-align: center;
  }

  .link.active,
  .but.active {
    display: flex;
  }

  .butnav {
    width: 100%;
  }
}

/* Адаптация для экранов меньше 576px */
@media screen and (max-width: 576px) {
  .nav {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
  }

  .menu-icon {
    align-self: flex-end;
  }

  .link,
  .but {
    top: 80px;
  }

  .butnav {
    font-size: 16px;
  }
}
</style>