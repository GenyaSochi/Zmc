<template>
  <form class="formcall" @submit.prevent="">

    <h2 class="h2call">Получить обратный звонок</h2>
    <p class="pcall">Наши менеджеры работают по будням с 8.00 до 17.00</p>
    <div class="allinputcall">
      <input class="inputcost" type="text" id="name" name="name" required placeholder="Ваше имя...">
      <input class="inputcost" type="phone" id="phone" name="phone" required placeholder="+7(___) ___-__-__">
    </div>
    <div class="perscall">
      <button class="butcall" type="submit">Отправить заявку</button>
      <NuxtLink to="/privacy">Нажимая на кнопку, Вы соглашаетесь на обработку персональных данных.</NuxtLink>
    </div>
    <div style="display: flex;">
      <NuxtLink to="/" class="callmail"><span>&#9742;</span>+7(351) 304-42-35</NuxtLink>
      <NuxtLink to="/" class="callmail"><span>&#x2709;</span> sales@zmkural.com</NuxtLink>
    </div>
  </form>
</template>

<style scoped>
.formcall {
  background-image: url(/public/img/silver1.webp);
  color: white;
  font-size: 18px;
  text-align: center;
  margin-bottom: 60px;
  padding-bottom: 20px;
  height: 647px;
}

.h2call {
  padding: 30px 0;
  font-size: 38px;
}

.pcall {
  padding: 20px 30px;
}

.allinputcall {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 40px;
  padding-left: 56px;
  padding-bottom: 156px;
}

.perscall {
  display: flex;
  gap: 40px;
  padding-left: 56px;
  align-items: center;
  padding-bottom: 82px;
}

.butcall {
  background-color: rgb(161, 7, 7);
  padding: 10px;
  width: 265px;
}

.callmail {
  color: white;
  padding: 10px;
  padding-left: 56px;
  display: flex;
  justify-content: space-around;
  width: 304px;
}
</style>