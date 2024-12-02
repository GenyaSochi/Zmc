<template>
  <div class="footercont">
    <img src="/img/sitelogo1.png" width="128px" style="margin: 40px 0 0 0;" alt="logo">
    
      <p>Завод металлоконструкций Урал</p>
      <button class="lobtn">Рассчитать стоимость</button>
    

    <div>
      <p style="padding-bottom: 5px;">Контакты</p>
      <p style="font-size: small;">ООО "ЗМК Урал", 456783, г. Озёрск, ул. Герцена, д. 9, помещение 10</p>
      <p style="font-size: small;">по будням с 8:00 до 17:00</p>
    </div>

    <div>
      <p style="padding-bottom: 5px;">+7(351) 304-42-35</p>
      <p style="font-size: small;">Позвоните нам</p>
    </div>

    <div>
      <p style="padding-bottom: 5px;">sales@zmkural.com</p>
      <p style="font-size: small;">Получите расчет заказа</p>
    </div>

    <div>
      <p style="padding-bottom: 5px;">Продукция</p>
      <div v-for="el of prod" :key="el.id">
        <p style="font-size: small;padding-bottom: 5px;">{{ el.prodname }}</p>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">
const prod = [
  { id: 1, prodname: 'ОСТ 36-146-88 опоры стальных технологических трубопроводов' },
  { id: 2, prodname: 'ГОСТ 14911-82 (ОСТ 36-94-83): опоры трубопроводов подвижные' },
  { id: 3, prodname: 'Серия 1-487-1997.00.00 для опор трубопроводов в ППУ изоляции' },
  { id: 4, prodname: 'Серия 5.903-13 Выпуск 6-95, 7-95, 8-95: изделия и детали трубопроводов для тепловых сетей' },
  { id: 5, prodname: 'Серия ОСТ 34.10.610-93 - 34.10.745-93' }
]
</script>

<style>
.footercont {
  background-color: black;
  color: white;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-end;
  gap: 30px;
  font-size: 20px;
  padding: 30px;
}

.lobtn {
  border: 2px solid white;
  padding: 10px;
  color: white;
  font-size: 20px;
  width: 234px;
}
</style>