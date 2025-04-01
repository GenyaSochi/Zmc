<template>
  <div class="footercont">
    <div>
      <img src="/img/sitelogo1.webp" width="128px" class="imgfoot" alt="logo">
      <p class="footinfo">Завод металлоконструкций Урал</p>
    </div>

    <div>
      <p class="contact">Контакты</p>
      <p class="info">ООО "ЗМК Урал", 456783, г. Озёрск, ул. Герцена, д. 9, пом. 10</p>
      <p class="info">по будням с 8:00 до 17:00</p>
      <a href="tel:+7(351)304-42-35" class="tel"> тел. +7(351) 304-42-35</a>
      <div class="mail">
        <a href="mailto:sales@zmkural.com" class="info">sales@zmkural.com</a>
      </div>
      <p class="infofoot">&copy; 2024 «Завод металлоконструкций Урал».</p>
      <p style="text-align: center; font-size: 16px;">Все права защищены.</p>
      <p class="politic">
        <NuxtLink to="/privacy" style="font-size: 16px;">Политика конфиденциальности</NuxtLink>
      </p>
    </div>

    <div>
      <button @click="popup = true" class="lobtn">Заказать звонок</button>
      <p class="infosoc">Мы в социальных сетях</p>
      <div style="padding-bottom: 10px;">
        <a href="https://vk.com/zmkural" target="_blank" style="font-size: 19px;"><img src="/public/img/vk.webp"
            width="64" alt="vk"></a>
        <a href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ"
          target="_blank" style="font-size: 19px;"><img src="/public/img/R_white.webp" width="30"
            style="margin: 0 0 20px 14px;" alt="rutube"></a>
      </div>
      <div style="padding-bottom: 10px;">
        <NuxtLink to="job" class="info">Вакансии компании</NuxtLink>
      </div>
      <a href="companydetails.pdf" class="req" target="_blank">Скачать реквизиты компании</a>
    </div>
  </div>
  <ModalComponent v-model="popup"></ModalComponent>
</template>

<script setup lang="ts">
const popup = ref(false)
</script>

<style scoped>
.footercont {
  background: linear-gradient(90deg,
      rgb(14, 13, 13)39%,
      rgb(30, 33, 61)96%);
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  font-size: 20px;
}

.lobtn {
  border: 2px solid white;
  padding: 10px 0 10px 0;
  color: white;
  font-size: 19px;
  width: 257px;
  text-align: center;
  margin: 50px 0 36px 0;
}

.lobtn:hover {
  background: white;
  color: rgb(30, 33, 61);
  transition: 2s;
}

.footinfo {
  text-align: center;
  padding: 10px 70px 0 0;
  font-size: 19px;
}

.contact {
  padding-bottom: 12px;
  margin-top: 132px;
  font-size: 19px;
}

.politic {
  text-align: center;
}

.info {
  padding-bottom: 12px;
  font-size: 19px;
}

.infosoc {
  font-size: 19px;
}

.infofoot {
  padding: 12px 0 12px 0;
  font-size: 18px;
  margin-top: 40px;
  text-align: center;
}

.mail {
  padding-bottom: 12px;
  font-size: 19px;
}

.req {
  font-size: 19px;
}

.tel {
  font-size: 19px;
  padding-bottom: 14px;
}

.imgfoot {
  margin: 40px 0 0 147px;
}

@media screen and (max-width:1920px) {}

@media screen and (max-width:1600px) {
  .footercont {
    gap: 120px;
  }

  .footinfo {
    padding: 10px 0 0 86px;
  }
  .imgfoot {
    margin: 40px 0 0 106px;
  }
}

@media screen and (max-width:1366px) {
  .lobtn {
    font-size: 18px;
  }

  .infosoc {
    font-size: 18px;
  }

  .info {
    padding-bottom: 10px;
    font-size: 18px;
  }

  .req,
  .tel {
    font-size: 18px;
  }

  .contact {
    font-size: 18px;
  }

  .footercont {
    gap: 84px;
  }

  .footinfo {
    padding: 10px 0 0 36px;
  }

  .imgfoot {
    margin: 40px 0 0 54px;
  }
}

@media screen and (max-width:992px) {}

@media screen and (max-width:768px) {}

@media screen and (max-width:576px) {}
</style>