<template>
  <footer class="footer_color">
    <div class="footercont">
      <p class="footinfo">
        <img src="/img/sitelogo1.webp" width="128px" class="imglogo" alt="logo">
        Завод металлоконструкций Урал
      </p>
      <div>
        <p class="contactmain">Контакты</p>
        <p class="contact">ООО "ЗМК Урал", 456783, г. Озёрск,<br>ул. Герцена, д. 9, пом. 10</p>
        <p class="contact">по будням с 8:00 до 17:00</p>
        <div style="display: flex; flex-direction: column;">

          <a class="contact" href="tel:+7(351)304-42-35">тел. +7(351) 304-42-35</a>
          <a class="contact" href="mailto:sales@zmkural.com">sales@zmkural.com</a>
        </div>
      </div>
      <div>
        <button @click="popup = true" class="lobtn">Заказать звонок</button>
        <p class="contact">Мы в социальных сетях</p>
        <div class="imgall">
          <a href="https://vk.com/zmkural" target="_blank"><img src="/public/img/vk.webp" width="64" alt="vk"
              class="imgvk"></a>
          <a href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ"
            target="_blank"><img src="/public/img/R_white.webp" width="30" alt="rutube" class="imgru"></a>
        </div>
        <div style="display: flex; flex-direction: column;">
          <NuxtLink to="job" class="contact">Вакансии компании</NuxtLink>
          <a href="companydetails.pdf" class="contact" target="_blank">Скачать реквизиты компании</a>
        </div>
      </div>
    </div>
    <div>
      <p class="confid">&copy; 2024 «Завод металлоконструкций Урал»<br>Все права защищены
        <NuxtLink class="confid" to="/privacy">Политика конфиденциальности</NuxtLink>
      </p>
    </div>
  </footer>
  <ModalComponent v-model="popup"></ModalComponent>
</template>

<script setup lang="ts">
const popup = ref(false)
</script>

<style scoped>
.politiclink {
  font-size: 18px;
}

.footer_color {
  background: linear-gradient(90deg,
      rgb(14, 13, 13)39%,
      rgb(30, 33, 61)96%);
  color: white;
  padding: 20px;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
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
  font-size: 20px;
  width: 247px;
  text-align: center;
  margin-bottom: 10px;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
}

.lobtn:hover {
  background: white;
  color: rgb(30, 33, 61);
  transition: 2s;
}

.footinfo {
  display: flex;
  font-size: 20px;
  flex-direction: column;
}

.contact {
  font-size: 20px;
}

.contactmain {
  font-size: 20px;
  padding-bottom: 32px;
}

.confid {
  font-size: 17px;
  text-align: center;
  padding: 10px 0;
}

.imglogo {
  width: 104px;
}

.imgall {
  display: flex;
  align-items: center;
  gap: 10px;
}

.imgvk {
  width: 64px;
}

.imgru {
  width: 30px;
}

@media screen and (max-width:1366px) {

  .lobtn {
    width: 224px;
  }

  .imglogo {
    width: 82px;
  }

  .footer_color {
    padding: 20px 20px 20px 0;
  }

  .confid {
    font-size: 19px;
  }
  .contact {
    font-size: 19px;
  }
}

@media screen and (max-width:992px) {

  .contact,
  .footinfo,
  .info {
    font-size: 19px;
  }

  .confid {
    font-size: 19px;
  }

  .footinfo {
    display: none;
  }

  .footercont {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    padding-bottom: 10px;
  }

  .lobtn {
    width: 211px;
    font-size: 19px;
  }

  .contactmain {
    padding-bottom: 10px;
    font-size: 19px;
  }
}

@media screen and (max-width:768px) {

  .lobtn {
    width: 222px;
  }

  .confid {
    font-size: 17px;
  }

  .imgvk {
    width: 60px;
  }

  .imgru {
    padding-bottom: 10px;
  }
  .footercont {
    justify-items: end;
  }
}

@media screen and (max-width:576px) {
  .footer_color {
    padding: 10px 10px 10px 10px;
  }

  .contact {
    padding-top: 0;
    padding-bottom: 0;
    font-size: 17px;
  }

  .lobtn {
    margin-bottom: 5px;
    font-size: 17px;
    padding: 5px 0 5px 0;
    width: 212px;
  }

  .contactmain {
    padding-top: 28px;
    padding-bottom: 11px;
    font-size: 17px;
  }

  .imgvk {
    width: 40px;
  }

  .imgru {
    width: 24px;
    padding-bottom: 5px;
  }

  .confid {
    font-size: 16px;
  }

  @media screen and (max-width:410px) {
    .contactmain {
      padding-top: 6px;
    }

    .lobtn {
      margin-bottom: 24px;
    }

    .footer_color {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      padding: 0;
    }

    .lobtn {
      width: 210px;
      font-size: 16px;
      margin: 10px 0;
    }

    .confid {
      font-size: 15px;
    }

    .footercont {
      display: flex;
      text-align: center;
      flex-direction: column;
    }

    .imgall {
      display: block;
    }
    .imgru {
      padding-bottom: 10px;
    }
  }
}
</style>