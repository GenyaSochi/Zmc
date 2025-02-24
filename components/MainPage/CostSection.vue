<template>
  <section id="cost">
    <form class="formcost" @submit.prevent="">
      <h2 class="h2cost">Получить рассчёт стоимости продукции</h2>
      <p class="workcost">Наши менеджеры работают по будням с 8.00 до 17.00</p>
      <img class="imgcost" src="/public/img/accounts100.webp" alt="accounts">
      <div class="allinputcost">
        <input class="inputcost" type="text" id="name" name="name" required placeholder="Ваше имя...">
        <input class="inputcost" type="phone" id="phone" name="phone" required placeholder="+7">
        <div>
          <input type="file" id="file" name="file" required accept=".xls, .doc, .docx, .pdf" class="custom-file-input">
          <button class="butcost" type="submit">Отправить заявку</button>
        </div>
      </div>
      <div class="perscost">
        <NuxtLink to="/privacy" class="butinfo">Нажимая на кнопку, Вы соглашаетесь на обработку персональных данных.</NuxtLink>
      </div>
      <div>
        <a href="tel:+7(351)304-42-35" class="infocost">тел. +7 (351) 304-42-35</a>
        <a href="mailto:sales@zmkural.com" class="infocost"">sales@zmkural.com</a>    
      </div>
    </form>
  </section>

    <p>Плазменная резка металла</p>
    <p>Рубка листового металла на гильотине</p>
    <p>Штамповка металла</p>
    <p>Вальцовка листов</p>
    <p>Гибка листов</p>
    <p>Сварочные работы любой сложности</p>
    <p>Пескоструйная очистка конструкций</p>
    <p>Изготовление продукции по индивидуальным чертежам</p>

</template>

<script setup lang="ts">
</script>

<style>
.custom-file-input {
  font-size: 18px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
  width: 216px;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}

.custom-file-input::before {
  content: 'Выберите файл';
  display: inline-block;
  background: rgb(30, 33, 61);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.custom-file-input:hover::before {
  background: #0056b3;
}

.h2cost {
  padding: 30px 0;
  font-size: 24px;
}

.formcost {
  background: linear-gradient(90deg,
      rgb(7, 7, 7)39%,
      rgb(30, 33, 61)96%);
  color: white;
  font-size: 18px;
  width: 892px;
  padding-bottom: 30px;
  margin: 30px 0 30px 30px;
  position: relative;
  border: 8px solid rgb(30, 33, 61);
}

.imgcost {
  position: absolute;
  right: 2%;
  top: 4%;
  z-index: 1;
}

.workcost {
  font-size: 20px;
  text-align: center;
  padding: 0 48px 20px 48px;
}

.butinfo {
  font-size: 18px;
}

.inputcost {
  background-color: white;
  text-align: start;
  width: 216px;
  height: 48px;
  border-radius: 5px;
}

.allinputcost {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  padding-left: 30px;
  padding-bottom: 25px;
}

.butcost {
  background-color: rgb(161, 7, 7);
  padding: 5px;
  border-radius: 5px;
  height: 43px;
  width: 216px;
  font-size: 18px;
  text-align: center;
  margin-left: 40px;
}

.perscost {
  padding-left: 30px;
  align-items: center;
  padding-bottom: 30px;
  gap: 10px;
}

.infocost {
  margin-left: 30px;
  font-size: 20px;
  margin-bottom: 12px;
}

</style>