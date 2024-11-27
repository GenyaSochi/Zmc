<template>
  <section>    
    <div style="background-color: brown;">
      <h2 class="h2cost">Рассчёт стоимости</h2>
      <p>Прикрепите файлы проекта со спецификациями, оставьте номер телефона. Менеджер изучит материалы и свяжется с
        Вами в течении 15 минут.</p>
      <form @submit.prevent="">
        <input type="text" id="name" name="name" required placeholder="Ваше имя...">
        <input type="tel" id="phone" name="phone" required placeholder="+7(___) ___-__-__">
        <input type="file" id="file" name="file" required accept="xls., doc., docx., pdf.">
      </form>
      <form>
        <input type="submit" value="отправить заявку">        
      </form>
    </div>



  </section>
</template>

<style>
.h2cost {
  padding-top: 30px;
  font-size: 40px;
}
</style>