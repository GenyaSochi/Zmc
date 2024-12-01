<template>
  <div class="lo">
    <img src="/img/sitelogo1.png" width="128px" style="margin: 40px 0 0 80px;" alt="logo">
    <p>Завод металлоконструкций Урал</p>
    <button class="lobtn">Рассчитать стоимость</button>
    <div>
      <p>Контакты</p>
      <p>ООО "ЗМК Урал", 456783, г. Озёрск, ул. Герцена, д. 9, помещение 10</p>
      <p>по будням с 8:00 до 17:00 </p>
    </div>
    <div>
      <p>+7(351) 304-42-35</p>
      <p>Позвоните нам</p>
    </div>
    <div>
      <p>sales@zmkural.com</p>
      <p>Получите расчет заказа</p>
    </div>
    <div v-for="el of prod" :key="el.id">
      <p>{{ el.prodname }}</p>
     
    </div>
  </div>

</template>

<script setup lang="ts">
const prod = [
  { id: 1, prodname: 'ОСТ 36-146-88 опоры стальных технологических трубопроводов', prod1: 'КП', prod2: 'ТП', prod3: 'ТР', prod4: 'ВП', prod5: 'УП', prod6: 'КН', prod7: 'КХ',
  prod8: 'ТО', prod9: 'ТХ', prod10: 'ХБ', prod11: 'ШП',
   }
]
</script>
<style>
.lo {
  background-color: black;
  color: white;
  display: flex;
  align-items: flex-end;
  gap: 30px;
  font-size: 20px;
  padding-bottom: 30px;
}

.lobtn {
  border: 2px solid white;
  padding: 10px;
  color: white;
  font-size: 20px;
}
</style>