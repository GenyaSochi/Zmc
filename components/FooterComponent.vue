<template>
  <div class="footercont">
    <div>
      <img src="/img/sitelogo1.webp" width="128px" style="margin: 40px 0 0 120px;" alt="logo">
      <p class="footinfo">Завод металлоконструкций Урал</p>
      <div></div>
    </div>
    
    <div>
      <p class="footprod">Продукция</p>
      <div v-for="el of prod" :key="el.id">
        <p class="product">{{ el.prodname }}</p>
      </div>
      <p class="empty"></p>
      <NuxtLink to="/cost"><button class="lobtn">Рассчитать стоимость</button></NuxtLink>
    </div>
    
    <div>
      <div>
        <p class="contact">Контакты</p>
        <p class="smallrec">ООО "ЗМК Урал", 456783, г. Озёрск, ул. Герцена, д. 9, помещение 10</p>
        <p class="adress">по будням с 8:00 до 17:00</p>
        <div class="view">
          <a href="tel:+7(351)304-42-35" class="info">+7(351) 304-42-35</a>
          <a href="tel:+7(351)304-42-35" class="small">Позвоните нам</a>
        </div>
        <div class="view">
          <a href="mailto:sales@zmkural.com" class="info">sales@zmkural.com</a>
          <a href="mailto:sales@zmkural.com" class="small">Получите расчет заказа</a>
        </div>
      </div>
      <div></div>
      <a href="companydetails.pdf" class="small" target="_blank">&#8595; скачать реквизиты компании</a>
      <div>
        <p>hr@zmkural.com</p>
        <NuxtLink to="job" class="small">Вакансии компании</NuxtLink>
      </div>
      <div></div>
      <div>
      </div> 
      <div>
        <p class="small">мы в социальных сетях</p>
        <a href="https://vk.com/zmkural" target="_blank" style="padding-right: 10px;">Вконтакте</a>
        <a href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ" target="_blank">Rutube</a>
      </div>
      <div></div>
      <div class="privacy">
        <div class="bottom"></div>
      </div>
      
    </div>
  </div>
  <div class="footercont1">
    <p style="text-align: center;" class="privacysmall">&copy; 2024 «Завод металлоконструкций Урал». Все правазащищены.</p>
    <p style="text-align: center;" class="privacysmall">
       <NuxtLink to="/privacy" class="small">Политика конфиденциальности</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from '#build/components';

const prod = [
  { id: 1, prodname: 'ОСТ 36-146-88 опоры стальных технологических трубопроводов' },
  { id: 2, prodname: 'ГОСТ 14911-82 (ОСТ 36-94-83): опоры трубопроводов подвижные' },
  { id: 3, prodname: 'Серия 1-487-1997.00.00 для опор трубопроводов в ППУ изоляции' },
  { id: 4, prodname: 'Серия 5.903-13 Выпуск 6-95, 7-95, 8-95: изделия и детали трубопроводов для тепловых сетей' },
  { id: 5, prodname: 'Серия ОСТ 34.10.610-93 - 34.10.745-93' },
  { id: 6, prodname: 'Каркасы зданий и эстакады' },
]
</script>

<style>
.footercont {
  background-color: rgb(56, 52, 52);
  color: white;
  display: grid;
  grid-template-columns: 400px 1fr 1fr;
  gap: 20px;
  font-size: 20px;
}

.footercont1 {
  background-color: rgb(56, 52, 52);
  color: white;
  gap: 20px;
  font-size: 20px;
}

.lobtn {
  border: 2px solid white;
  padding: 10px;
  color: white;
  font-size: 20px;
  width: 257px;
  text-align: center;
  margin-bottom: 5px;
}

.privacyfooter {
  background-color: black;
  color: white;
  font-size: small;
  text-align: center;
}

.footinfo {
  text-align: center;
  padding-bottom: 12px;
}

.footprod {
  padding-bottom: 20px;
  text-align: center;
}

.small {
  font-size: 18px;
  padding-bottom: 14px;
}
.adress {
  font-size: 18px;
  padding-bottom: 26px;
}

.smallrec {
  font-size: 18px;
}

.contact {
  padding-bottom: 36px;
}

.product {
  font-size: 18px;
  padding-bottom: 14px;
}

.empty {
  padding-bottom: 20px;
}

.view {
  display: flex;
  flex-direction: column;
}

.privacy {
  text-align: center;
}

.privacysmall {
  font-size: 18px;
  padding-bottom: 10px; 
}

.lower {
  font-size: 16px;
  padding-bottom: 5px;
  padding-bottom: 30px;
}
.bottom {
  margin-bottom: 30px;
}

.info {
  padding-bottom: 6px;
}
</style>