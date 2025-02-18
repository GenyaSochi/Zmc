<template>
  <div class="footercont">
    <div>
      <img src="/img/sitelogo1.webp" width="128px" style="margin: 40px 0 0 120px;" alt="logo">
      <p class="footinfo">Завод металлоконструкций Урал</p>
    </div>

    <div>
      <p class="contact">Контакты</p>
      <p class="info">ООО "ЗМК Урал", 456783, г. Озёрск, ул. Герцена, д. 9, пом. 10</p>
      <p class="info">по будням с 8:00 до 17:00</p>
      <a href="tel:+7(351)304-42-35" class="info"> тел. +7(351) 304-42-35</a>
      <div class="mail">
        <a href="mailto:sales@zmkural.com" class="info">sales@zmkural.com</a>
      </div>
      <p style="text-align: center;" class="infofoot">&copy; 2024 «Завод металлоконструкций Урал». Все правазащищены.</p>
      <p style="text-align: center;">
        <NuxtLink to="/privacy" class="info">Политика конфиденциальности</NuxtLink>
      </p>
    </div>
    <div>
      <a href="#cost"><button class="lobtn">Заказать звонок</button></a>
      <p class="infosoc">мы в социальных сетях</p>
      <div class="mail">
      <a href="https://vk.com/zmkural" target="_blank" style="padding-right: 10px;">Вконтакте</a>
      <a href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ"
        target="_blank">Rutube</a>
      </div>
        <div>
          <NuxtLink to="job" class="info">вакансии компании</NuxtLink>
        </div>
      <a href="companydetails.pdf" class="info" target="_blank">скачать реквизиты компании &#8595;</a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.footercont {
  background:linear-gradient(90deg,
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
  font-size: 20px;
  width: 257px;
  text-align: center;
  margin-top: 102px;
}

.footinfo {
  text-align: center; 
}

.footprod {
  padding-bottom: 20px;
  text-align: center;
}

.contact {
  padding-bottom: 10px;
  margin-top: 124px;
}

.info {
  padding-bottom: 10px;
  font-size: 18px;  
}

.infosoc {
  padding: 10px 0;
  font-size: 18px;
}

.infofoot {
  padding: 10px 0 10px 0;
  font-size: 18px;
  margin-top: 40px;
}

.mail {
  padding-bottom: 10px;
}
</style>