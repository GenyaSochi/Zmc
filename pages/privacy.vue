<template>
  <h1 class="h1privacy">Политика конфединциальности</h1>
  <div class="allprivacy">
    <p>
      Согласие на обработку персональных данных. Настоящим согласием, в соответствии с Федеральным законом № 152-ФЗ «О
      персональных
      данных» от 27.07.2006 года свободно, своей волей и в своем интересе выражаю свое безусловное согласие на обработку
      моих персональных данных, зарегистрированному в соответствии с законодательством РФ по адресу: ??? (далее по
      тексту
      -
      Оператор).
    </p>
    <br>
    <p>
      Персональные данные - любая информация, относящаяся к определенному или определяемому на основании такой
      информации
      физическому лицу. Настоящее Согласие выдано мною на обработку следующих персональных данных:
    </p>
    <br>
    <p>
      - имя;
    </p>
    <p>
      - телефон;
    </p>
    <p>
      - e-mail;
    </p>
    <p>
      - комментарий.
    </p>
    <br>
    <p>
      Согласие дано Оператору для совершения следующих действий с моими персональными данными, с использованием средств
      автоматизации и/или без использования таких средств: сбор, систематизация, накопление, хранение, уточнение
      (обновление, изменение), использование, обезличивание, а также осуществление любых иных действий, предусмотренных
      действующим законодательством РФ как неавтоматизированными, так и автоматизированными способами. Данное согласие
      дается Оператору для обработки моих персональных данных в следующих целях:
    </p>
    <br>
    <p>
      - предоставление мне услуг/работ;
    </p>
    <p>
      - направление в мой адрес уведомлений, касающихся предоставляемых услуг/работ;
    </p>
    <p>
      - подготовка и направление ответов на мои запросы;
    </p>
    <p>
      - направление в мой адрес информации, в том числе рекламной, о мероприятиях/товарах/услугах/работах Оператора.
    </p>
    <br>
    <p>
      Настоящее согласие действует до момента его отзыва путем направления соответствующего уведомления на электронный
      адрес dir@zmkural.com.
    </p>
    <br>
    <p>
      В случае отзыва моего согласия на обработку персональных данных, Оператор вправе продолжить обработку
      персональных данных без моего согласия при наличии оснований, указанных в пунктах 2 – 11 части 1 статьи 6, части 2
      статьи 10 и части 2 статьи 11 Федерального закона №152-ФЗ «О персональных данных» от 27.07.2006 г.
    </p>
  </div>

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
      <p>Нажимая на кнопку, Вы соглашаетесь на <NuxtLink to="/privacy"><span style="color: rgb(161, 7, 7);">обработку
            персональных данных.</span></NuxtLink>
      </p>
    </div>
    <div class="costinfo">
      <p>Вы можете отправить файлы по почте или связаться с отделом продаж.</p>
      <span style="display: flex; gap: 40px;padding-top: 20px;">
      <NuxtLink to="/" class="costmail">sales@zmkural.com</NuxtLink>
      <NuxtLink to="/" class="costmail">+7(351) 304-42-35</NuxtLink>
    </span>
    </div>
  </form>
</template>

<style>
.h1privacy {
  padding-top: 30px;
}

.allprivacy {
  padding: 30px 0 60px 0;
  margin: 0 48px;
}

.h2cost {
  padding: 30px 0;
  font-size: 40px;
}

.formcost {
  background-color: black;
  color: white;
  font-size: 24px;
  display: block;
  text-align: left;
  margin: 2px 306px 30px 328px;
}

.pcost {
  padding: 0 52px 20px 52px;
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
  padding-bottom: 42px;
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
.costinfo { 
    padding: 30px 50px;
    background: white;
    color: black;
    position: relative; 
    border: 2px solid  rgb(161, 7, 7);
}
.costmail {
  background-color: rgb(161, 7, 7);
  color: white;
  padding: 10px;
}
</style>
