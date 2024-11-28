<template>
  <section>

    <form class="formcost" @submit.prevent="">
      <h2 class="h2cost">Рассчёт стоимости</h2>
      <p class="pcost">Прикрепите файлы проекта со спецификациями и номер телефона. Менеджер изучит материалы и свяжется с
        Вами в течении дня.</p>
      <div class="allinputcost">
        <input class="inputcost" type="text" id="name" name="name" required placeholder="Ваше имя...">
        <input class="inputcost" type="phone" id="phone" name="phone" required placeholder="+7(___) ___-__-__">
        <input type="file" id="file" name="file" required accept="xls., doc., docx., pdf.">
      </div>
      <div class="perscost">
        <button class="butcost" type="submit">Отправить заявку</button>
        <p>Нажимая на кнопку, Вы соглашаетесь на <NuxtLink to="/privacy"><span style="color: rgb(161, 7, 7);">обработку персональных данных</span></NuxtLink></p>
      </div>
    </form>

  </section>
</template>

<style>
.h2cost {
  padding: 30px 0;
  font-size: 40px;
}

.formcost {
  background-color: black;
  color: white;
  font-size: 24px;
  display: block;
  text-align: center;
  margin: 2px 306px 30px 328px;
}

.pcost {
  padding: 20px 30px;
}

.inputcost {
  background-color: white;
  text-align: start;
  color: black;
  padding: 7px;
}

.allinputcost {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 40px;
  padding-left: 56px;
  padding-bottom: 82px;
}

.butcost {
  background-color: rgb(161, 7, 7);
  padding: 10px;
}

.perscost {
  display: flex;
  gap: 40px;
  padding-left: 56px;
  padding-bottom: 82px;
  align-items: center;
}
</style>