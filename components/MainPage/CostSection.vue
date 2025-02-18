<template>
  <section class="container" id="cost">
    <form class="formcost" @submit.prevent="">
      <h2 class="h2cost">Получить рассчёт стоимости продукции</h2>
      <p class="workcost">Наши менеджеры работают по будням с 8.00 до 17.00</p>
      <img class="imgcost" src="/public/img/accounts100.webp" alt="accounts">
      <img class="imgphoto" src="/public/img/zmc12.webp" width="291" alt="photo">
      <div class="allinputcost">
        <input class="inputcost" type="text" id="name" name="name" required placeholder="Ваше имя...">
        <input class="inputcost" type="phone" id="phone" name="phone" required placeholder="+7">
        <input type="file" id="file" name="file" required accept=".xls, .doc, .docx, .pdf">
      </div>
      <div class="perscost">
        <button class="butcost" type="submit">Отправить заявку</button>
        <NuxtLink to="/privacy" class="butinfo">Нажимая на кнопку, Вы соглашаетесь на обработку персональных данных.
        </NuxtLink>
      </div>
      <div style="display: flex;">
      <a href="tel:+7(351)304-42-35" class="info">тел. +7(351) 304-42-35</a>   
      <a href="mailto:sales@zmkural.com" class="info">sales@zmkural.com</a>     
      </div>     
    </form>
  </section>
</template>

<script setup lang="ts">
</script>

<style>
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
  margin-bottom: 30px;
  position: relative;
}

.imgcost {
  position: absolute;
  right: 11%;
  top: 28%;
  z-index: 1;
}
.imgphoto {
  position: absolute;
  right: 11%;
  top: 28%;
  z-index: 1;
}
.workcost {
  font-size: 18px;
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
  height: 33px;
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
  padding: 7px;
  width: 247px;
  font-size: 18px;
}

.perscost {
  display: flex;
  padding-left: 30px;
  align-items: center;
  padding-bottom: 30px;
  gap: 10px;
}

.costmail {
  color: white;
  padding-left: 30px;
  font-size: 18px;
  width: 260px;
}

</style>