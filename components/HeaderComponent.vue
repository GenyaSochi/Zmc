<template>
  <header class="navtag">
    <nav class="nav_all">
      <NuxtLink to="/" class="logo-link">
        <img src="/img/sitelogo1.webp" alt="logo" class="logo">
      </NuxtLink>

      <div class="link desktop-links">
        <NuxtLink to="/" class="nav">Главная</NuxtLink>
        <NuxtLink to="/catalog" class="nav">Каталог продукции</NuxtLink>
        <NuxtLink to="/projects" class="nav">Проекты</NuxtLink>
        <NuxtLink to="/contacts" class="nav">Контакты</NuxtLink>
      </div>

      <div class="desktop-contacts">
        <div class="but">
          <NuxtLink to="/#cost" class="butnav">Рассчитать стоимость</NuxtLink>
          <NuxtLink to="/#lobtn" class="butnav" @click="popup = true; closeMenu()">Заказать звонок</NuxtLink>
        </div>
        <div class="contacts">
          <a href="tel:+73513044235" class="buttel">+7 (351) 304-42-35</a>
          <a href="tel:+79000757021" class="buttel">+7 (900) 075-70-21</a>
          <a href="mailto:sales@zmkural.com" class="buttel">sales@zmkural.com</a>
        </div>
      </div>

      <button class="burger" @click="toggleMenu" :aria-expanded="isMenuOpen" aria-label="Меню">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <div v-if="isMenuOpen" class="mobile-menu-overlay" @click="closeMenu"></div>
    <div class="mobile-menu" :class="{ 'mobile-menu--open': isMenuOpen }">
      <div class="mobile-menu-content">
        <NuxtLink to="/" class="mobile-nav" @click="closeMenu">Главная</NuxtLink>
        <NuxtLink to="/catalog" class="mobile-nav" @click="closeMenu">Каталог продукции</NuxtLink>
        <NuxtLink to="/projects" class="mobile-nav" @click="closeMenu">Проекты</NuxtLink>
        <NuxtLink to="/contacts" class="mobile-nav" @click="closeMenu">Контакты</NuxtLink>
        <NuxtLink to="/#cost" class="mobile-nav" @click="closeMenu">Рассчитать стоимость</NuxtLink>

        <div class="mobile-contacts">
          <button @click="popup = true; closeMenu()" class="mobile-contact-btn">+7 (351) 304-42-35</button>
          <button @click="popup = true; closeMenu()" class="mobile-contact-btn">+7 (900) 075-70-21</button>
          <a href="mailto:sales@zmkural.com" class="mobile-contact-btn">sales@zmkural.com</a>
          <button @click="popup = true; closeMenu()" class="mobile-butnav">Заказать звонок</button>
        </div>
      </div>
    </div>
  </header>

  <ModalComponent v-model="popup"></ModalComponent>
</template>

<script setup lang="ts">
const popup = ref(false)
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value

  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const closeOnClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.mobile-menu') && !target.closest('.burger')) {
    closeMenu()
  }
}

const closeOnResize = () => {
  if (window.innerWidth > 768) {
    closeMenu()
  }
}

const closeOnScroll = () => {
  closeMenu()
}

onMounted(() => {
  document.addEventListener('click', closeOnClickOutside)
  window.addEventListener('resize', closeOnResize)
  document.addEventListener('scroll', closeOnScroll)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeOnClickOutside)
  window.removeEventListener('resize', closeOnResize)
  document.removeEventListener('scroll', closeOnScroll)
  document.body.style.overflow = '' // Восстанавливаем скролл
})
</script>

<style scoped>
.navtag {
  padding: 10px 0;
  background-color: rgb(30, 33, 61);
  font-family: 'Montserrat', sans-serif;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
}

.nav_all {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  height: 76px;
}

.logo-link {
  display: flex;
  align-items: center;
}

.logo {
  width: 142px;
  height: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.desktop-links {
  display: flex;
  gap: 40px;
}

.nav {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav:hover {
  color: #ccc;
}

.desktop-contacts {
  display: flex;
  align-items: center;
  gap: 30px;
}

.but {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
}

.butnav {
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  white-space: nowrap;
}

.butnav:hover {
  background-color: white;
  color: rgb(30, 33, 61);
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.buttel {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;
  text-decoration: none;
}

.buttel:hover {
  color: #ccc;
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.burger span {
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.burger[aria-expanded="true"] span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.burger[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
}

.burger[aria-expanded="true"] span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.mobile-menu-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.mobile-menu {
  position: fixed;
  top: 76px;
  right: -100%;
  width: 100%;
  max-width: 400px;
  height: calc(100vh - 76px);
  background-color: rgb(30, 33, 61);
  z-index: 1000;
  transition: right 0.3s ease;
  overflow-y: auto;
}

.mobile-menu--open {
  right: 0;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
}

.mobile-nav {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: color 0.3s ease;
}

.mobile-nav:hover {
  color: #ccc;
}

.mobile-contacts {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.mobile-contact-btn {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  text-align: left;
  padding: 10px 0;
  cursor: pointer;
  transition: color 0.3s ease;
}

.mobile-contact-btn:hover {
  color: #ccc;
}

.mobile-butnav {
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.mobile-butnav:hover {
  background-color: white;
  color: rgb(30, 33, 61);
}

@media screen and (max-width: 1200px) {
  .desktop-links {
    gap: 20px;
  }

  .nav {
    font-size: 16px;
  }

  .desktop-contacts {
    gap: 20px;
  }

  .butnav {
    font-size: 14px;
    padding: 8px 16px;
  }

  .buttel {
    font-size: 13px;
  }
}

@media screen and (max-width: 1181px){
.nav_all {
  justify-content: space-around;
}
}

@media screen and (max-width: 992px) {
  .nav_all {
    padding: 0 15px;
  }

  .desktop-links {
    gap: 15px;
  }

  .nav {
    font-size: 15px;
  }

  .logo {
    width: 120px;
  }
}

@media screen and (max-width: 930px) {
  .butnav {
    display: none;
  }
}

@media screen and (max-width: 768px) {

  .desktop-links,
  .desktop-contacts {
    display: none;
  }

  .burger {
    display: flex;
  }

  .mobile-menu-overlay {
    display: block;
  }

  .nav_all {
    justify-content: space-between;
    height: 70px;
  }

  .logo {
    width: 110px;
  }

  .mobile-menu {
    top: 70px;
    height: calc(100vh - 70px);
  }
}

@media screen and (max-width: 480px) {
  .nav_all {
    padding: 0 10px;
    height: 60px;
  }

  .logo {
    width: 100px;
  }

  .burger {
    width: 25px;
    height: 18px;
  }

  .mobile-menu {
    top: 60px;
    height: calc(100vh - 60px);
    max-width: 100%;
  }

  .mobile-menu-content {
    padding: 15px;
  }

  .mobile-nav {
    font-size: 16px;
    padding: 12px 0;
  }

  .mobile-contact-btn {
    font-size: 14px;
  }
}
</style>