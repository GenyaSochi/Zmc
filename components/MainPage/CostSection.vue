<template>
  <section>
    <form class="formcost" @submit.prevent="">
      <h2 class="h2cost">Получить рассчёт стоимости продукции</h2>
      <p class="pcost">Наши менеджеры работают по будням с 8.00 до 17.00</p>
      <div class="allinputcost">
        <input class="inputcost" type="text" id="name" name="name" required placeholder="Ваше имя...">
        <input class="inputcost" type="phone" id="phone" name="phone" required placeholder="+7(___) ___-__-__">
        <input type="file" id="file" name="file" required accept="xls., doc., docx., pdf.">
      </div>
      <div class="perscost">
        <button class="butcost" type="submit">Отправить заявку</button>
        <NuxtLink to="/privacy">Нажимая на кнопку, Вы соглашаетесь на обработку персональных данных.</NuxtLink>
      </div>
      <div style="display: flex;">
        <NuxtLink to="/" class="costmail"><span>&#9742;</span>+7(351) 304-42-35</NuxtLink>
        <NuxtLink to="/" class="costmail"><span>&#x2709;</span> sales@zmkural.com</NuxtLink>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
</script>

<style>
.h2cost {
  padding: 30px 0;
  font-size: 38px;
}

.formcost {
  background-image: url(/public/img/silver1.webp);
  color: white;
  font-size: 18px;
  text-align: center;
  margin-bottom: 60px;
  padding-bottom: 20px;
}

.pcost {
  padding: 0 52px 20px 52px;
}

.inputcost {
  background-color: white;
  text-align: start;
  width: 265px;
  padding: 7px;
}

.allinputcost {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 40px;
  padding-left: 56px;
  padding-bottom: 42px;
}

.butcost {
  background-color: rgb(161, 7, 7);
  padding: 10px;
  width: 265px;
}

.perscost {
  display: flex;
  gap: 40px;
  padding-left: 56px;
  align-items: center;
  padding-bottom: 30px;
}
.costmail {
  color: white;
  padding: 10px;
  padding-left: 56px;
  display: flex;
  justify-content: space-around;
  width: 304px;
}
</style>