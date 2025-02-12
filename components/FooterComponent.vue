<template>
  <div class="footercont">
    <img src="/img/sitelogo1.webp" width="128px" style="margin: 40px 0 0 120px;" alt="logo">

    <p class="footinfo">Завод металлоконструкций Урал</p>
    <NuxtLink to="/cost"><button class="lobtn">Рассчитать стоимость</button></NuxtLink>

    <div></div>
    <div>
      <p class="footprod">Продукция</p>
      <div v-for="el of prod" :key="el.id">
        <p class="product">{{ el.prodname }}</p>
      </div>
      <p class="empty"></p>
    </div>

    <div>
      <p class="contact">Контакты</p>
      <p class="small">ООО "ЗМК Урал", 456783, г. Озёрск, ул. Герцена, д. 9, помещение 10</p>
      <p class="small">по будням с 8:00 до 17:00</p>
      <div>
        <p class="view">+7(351) 304-42-35</p>
        <p class="small">Позвоните нам</p>
      </div>
      <div>
        <p class="view">sales@zmkural.com</p>
        <NuxtLink to="/cost" class="small">Получите расчет заказа</NuxtLink>
      </div>
    </div>
    <div></div>
    <div></div>
    <div>
      <p>hr@zmkural.com</p>
      <NuxtLink to="job" class="small">Вакансии компании</NuxtLink>
    </div>
    <div></div>
    <div></div>
    <a href="companydetails.pdf" class="small" target="_blank">&#8595; скачать реквизиты компании</a>
    <div></div>
    <div></div>
    <div>
      <p class="small">мы в социальных сетях</p>
      <a href="https://vk.com/zmkural" target="_blank" style="padding-right: 10px;">Вконтакте</a>
      <a href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ" target="_blank">Rutube</a>
    </div>
    <div></div>
    <div class="privacy">
      <p class="privacysmall">&copy; 2024 «Завод металлоконструкций Урал». Все права
        защищены.</p>
      <NuxtLink to="/privacy" class="small">Политика конфиденциальности</NuxtLink>
      <div class="bottom"> </div>
    </div>
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
  align-items: flex-end;
  gap: 30px;
  font-size: 20px;
  height: 100%;
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
  padding-bottom: 77px;
  text-align: center;
}

.small {
  font-size: 16px;
  padding-bottom: 5px;
}

.smallrec {
  font-size: 16px;
}

.contact {
  padding-bottom: 72px;
}

.product {
  font-size: 16px;
  padding-bottom: 10px;
}

.empty {
  padding-bottom: 20px;
}

.view {
  padding: 24px 0 5px 0;
}

.privacy {
  text-align: center;
}

.privacysmall {
  font-size: 16px;
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
</style>