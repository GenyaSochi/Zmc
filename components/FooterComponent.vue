<template>
  <footer class="footer_color">
    <div class="footercont">
      <p class="footinfo">
        <img src="/img/sitelogo1.webp" width="128px" class="imgfoot" alt="logo">
        Завод металлоконструкций Урал
      </p>

      <div>
        <p class="contact">Контакты</p>
        <p class="info">ООО "ЗМК Урал", 456783, г. Озёрск,<br>ул. Герцена, д. 9, пом. 10</p>
        <p class="info">по будням с 8:00 до 17:00</p>
        <a href="tel:+7(351)304-42-35" class="tel">тел. +7(351) 304-42-35</a>
        <br>
        <a href="mailto:sales@zmkural.com" class="mail">sales@zmkural.com</a>
      </div>

      <div>
        <button @click="popup = true" class="lobtn">Заказать звонок</button>
        <p class="infosoc">Мы в социальных сетях</p>
        <div>
          <a href="https://vk.com/zmkural" target="_blank" style="font-size: 19px;"><img src="/public/img/vk.webp"
              width="64" alt="vk"></a>
          <a href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ"
            target="_blank" style="font-size: 19px;"><img src="/public/img/R_white.webp" width="30" class="imgsize"
              alt="rutube"></a>
        </div>
        <div>
          <NuxtLink to="job" class="jobs">Вакансии компании</NuxtLink>
        </div>
        <a href="companydetails.pdf" class="req" target="_blank">Скачать реквизиты компании</a>
      </div>
    </div>
    <div>
      <p class="infofoot">&copy; 2024 «Завод металлоконструкций Урал»<br>Все права защищены.
        <NuxtLink style="font-size: 18px;" to="/privacy">Политика конфиденциальности.</NuxtLink>
      </p>
    </div>
  </footer>
  <ModalComponent v-model="popup"></ModalComponent>
</template>

<script setup lang="ts">
const popup = ref(false)
</script>

<style scoped>
.footer_color {
  background: linear-gradient(90deg,
      rgb(14, 13, 13)39%,
      rgb(30, 33, 61)96%);
  color: white;
  padding: 20px;
}

.footercont {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.lobtn {
  border: 2px solid white;
  padding: 10px 0 10px 0;
  color: white;
  font-size: 19px;
  width: 257px;
  text-align: center;
}

.lobtn:hover {
  background: white;
  color: rgb(30, 33, 61);
  transition: 2s;
}

.footinfo {
  display: flex;
  font-size: 19px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.contact {
  font-size: 19px;
}

.info {
  padding: 10px 0 10px 0;
  font-size: 19px;
}

.jobs {
  padding-bottom: 12px;
  font-size: 19px;
}

.infosoc {
  font-size: 19px;
  padding-top: 10px;
}

.infofoot {
  font-size: 18px;
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

.imgsize {
  margin: 0 0 20px 16px;
}

.imgfoot {
  padding-bottom: 10px;
  width: 122px;
}

@media screen and (max-width:1920px) {}

@media screen and (max-width:1600px) {}

@media screen and (max-width:1366px) {
  .infofoot,
  .lobtn,
  .infosoc,
  .req,
  .tel,
  .contact,
  .jobs,
  .footinfo {
    font-size: 18px;
  }

  .info {
    padding-bottom: 10px;
    font-size: 18px;
  }
}

@media screen and (max-width:992px) {
  .infofoot,
  .infosoc,
  .req,
  .tel,
  .contact,
  .jobs,
  .footinfo {
    font-size: 17px;
  }

  .info {
    padding-bottom: 10px;
    font-size: 17px;
  }

  .footinfo {
    display: none;
  }

  .footercont {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  .lobtn {
    width: 176px;
    font-size: 17px;
  }
}


@media screen and (max-width:768px) {}

@media screen and (max-width:576px) {}
</style>