<template>
  <footer class="footer_color">
    <div class="footercont">
      <p class="footinfo">
        <img src="/img/sitelogo1.webp" width="128px" class="imgfoot" alt="logo">
        Завод металлоконструкций Урал
      </p>
      <div>
        <p class="contact">Контакты</p>
        <p class="contact">ООО "ЗМК Урал", 456783, г. Озёрск,<br>ул. Герцена, д. 9, пом. 10</p>
        <p class="contact">по будням с 8:00 до 17:00</p>
        <a class="contact" href="tel:+7(351)304-42-35">тел. +7(351) 304-42-35</a>
        <br>
        <a class="contact" href="mailto:sales@zmkural.com">sales@zmkural.com</a>
      </div>

      <div>
        <button @click="popup = true" class="lobtn">Заказать звонок</button>
        <p class="contact">Мы в социальных сетях</p>
        <div>
          <a href="https://vk.com/zmkural" target="_blank" style="font-size: 19px;"><img src="/public/img/vk.webp"
              width="64" alt="vk"></a>
          <a href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ"
            target="_blank" style="font-size: 19px;"><img src="/public/img/R_white.webp" width="30" class="imgsize"
              alt="rutube"></a>
        </div>
        <div>
          <NuxtLink to="job" class="contact">Вакансии компании</NuxtLink>
        </div>
        <a href="companydetails.pdf" class="contact" target="_blank">Скачать реквизиты компании</a>
      </div>
    </div>
    <div>
      <p class="confid">&copy; 2024 «Завод металлоконструкций Урал»<br>Все права защищены.
        <NuxtLink class="confid" to="/privacy">Политика конфиденциальности.</NuxtLink>
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
  margin-bottom: 10px;
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
}

.contact {
  font-size: 19px;
}

.confid {
  font-size: 17px;
  text-align: center;
  padding: 10px 0;
}

.imgsize {
  margin: 0 0 20px 16px;
}

.imgfoot {
  padding-bottom: 10px;
  width: 104px;
}

@media screen and (max-width:1366px) {

  .lobtn .contact,
  .footinfo,
  .info {
    font-size: 18px;
  }

  .imgfoot {
    width: 82px;
  }

  .footer_color {
    padding: 20px 20px 20px 0;
  }

  .confid {
    font-size: 16px;
  }
}

@media screen and (max-width:992px) {

  .contact,
  .footinfo,
  .info {
    font-size: 17px;
  }

  .confid {
    font-size: 15px;
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
    font-size: 17px;
  }
}

@media screen and (max-width:768px) {
  .contact {
    font-size: 16px;
  }

  .lobtn {
    width: 196px;
    font-size: 16px;
  }

  .confid {
    font-size: 14px;
  }
}

@media screen and (max-width:576px) {
  .footer_color {
    padding: 10px 0 0 10px;
  }

  .contact {
    padding-top: 0;
    padding-bottom: 5px;
}
  }

  .lobtn {
    margin-bottom: 4px;
    width: 164px;
  }


</style>