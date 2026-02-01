<template>
  <footer class="footer_color">
    <div class="footercont">
      <p class="footinfo">
        <img src="/img/sitelogo1.webp" width="128" class="imglogo" alt="logo">
        Завод металлоконструкций Урал
      </p>
      <div>
        <p class="contact">Контакты</p>
        <p class="contact">ООО "ЗМК Урал", 456783, г. Озёрск,</p>
        <p class="contact">ул. Герцена, д. 9, пом. 10</p>
        <p class="contact">по будням с 8:00 до 17:00</p>
        <div style="display: flex; flex-direction: column;">
          <a class="contact" href="tel:+73513044235">тел. +7 (351) 304-42-35</a>
          <a class="contact" href="mailto:sales@zmkural.com">sales@zmkural.com</a>
        </div>
      </div>
      <div class="footer-section">
        <button @click="popup = true; closeMenu()" class="lobtn" >Заказать звонок</button>
        <p class="contact">Мы в социальных сетях</p>
        <div class="imgall">
          <a href="https://vk.com/zmkural" target="_blank" rel="noopener noreferrer">
            <img src="/img/vk.webp" width="64" alt="VK" class="imgvk">
          </a>
          <a href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ"
            target="_blank" rel="noopener noreferrer">
            <img src="/img/R_white.webp" width="30" alt="Rutube" class="imgru">
          </a>
        </div>
        <div class="footer-links">
          <NuxtLink to="/job" class="contact link">Вакансии компании</NuxtLink>
          <a href="/companydetails.pdf" class="contact link" target="_blank" rel="noopener noreferrer">
            Скачать реквизиты компании
          </a>
        </div>
      </div>
    </div>
    <div class="confids">
      <p class="confid">&copy; 2024 «Завод металлоконструкций Урал»</p>
      <p class="confid">Все права защищены</p>
      <NuxtLink class="confid link" to="/privacy">Политика конфиденциальности</NuxtLink>
      <NuxtLink class="confid link" to="/lk">Личный кабинет</NuxtLink>
    </div>
  </footer>
  <ModalComponent v-model="popup"></ModalComponent>
</template>

<script setup lang="ts">
const popup = ref<boolean>(false)
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
</script>

<style scoped>
.footer_color {
  background: linear-gradient(90deg,
      rgb(12, 13, 13) 9%,
      rgb(30, 33, 61) 96%);
  color: white;
  padding: 20px;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
}

.footercont {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 5px 5px 10px;
  margin-bottom: 20px;
}

.lobtn {
  border: 2px solid white;
  padding: 10px 0;
  color: white;
  font-size: 20px;
  width: 247px;
  text-align: center;
  margin-bottom: 10px;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.lobtn:hover {
  background: white;
  color: rgb(30, 33, 61);
  text-shadow: none;
}

.footinfo {
  display: flex;
  font-size: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;  
}

.contact {
  font-size: 20px;
  padding: 10px 0;
  margin: 0;
}

.link {
  text-decoration: none;
  color: white;
  transition: opacity 0.3s ease;
}

.link:hover {
  opacity: 0.8;
}

.confid {
  font-size: 16px;
  text-align: center;
  padding-bottom: 10px;
  margin: 0;
}

.imglogo {
  width: 104px;
  height: auto;
}

.imgall {
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  margin: 10px 0;
}

.imgvk,
.imgru {
  transition: transform 0.3s ease;
}

.imgvk:hover,
.imgru:hover {
  transform: scale(1.1);
}

.confids {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.footer-section,
.footer-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 1366px) {
  .lobtn {
    width: 224px;
  }

  .imglogo {
    width: 82px;
  }

  .confid,
  .contact {
    font-size: 18px;
  }
}

@media screen and (max-width: 992px) {
  .contact,
  .footinfo,
  .lobtn {
    font-size: 18px;
  }

  .footinfo {
    display: none;
  }

  .footercont {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .lobtn {
    width: 236px;
  }
}

@media screen and (max-width: 768px) {
  .lobtn {
    width: 222px;
    font-size: 17px;
  }

  .confid {
    font-size: 16px;
  }

  .imgvk {
    width: 60px;
  }

  .imgru {
    width: 28px;
  }

  .footercont {
    flex-direction: column;
    text-align: center;
  }

  .contact {
    font-size: 17px;
    padding: 8px 0;
  }
}
 @media screen and (max-width: 676px) {
  .footercont {
    display: block;
  }
  .imgru{
    padding-bottom: 3px;
  }
 }
@media screen and (max-width: 576px) {
  .footer_color {
    padding: 15px;
  }

  .lobtn {
    width: 212px;
    font-size: 16px;
    padding: 8px 0;
    margin: 5px 0 15px;
  }

  .imgvk {
    width: 50px;
  }

  .imgru {
    width: 24px;
  }

  .confid {
    font-size: 14px;
    padding-bottom: 8px;
  }

  .contact {
    font-size: 16px;
  }
}

@media screen and (max-width: 410px) {
  .footer_color {
    padding: 10px;
  }

  .lobtn {
    width: 200px;
    font-size: 15px;
    margin: 10px 0;
  }

  .confid {
    font-size: 13px;
  }

  .contact {
    font-size: 15px;
  }
}
</style>