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

<style></style>