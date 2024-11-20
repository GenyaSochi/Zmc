<template>
  <section>
    <div class="proj">
      <p class="ourproj">наши проекты</p>
      <swiper-container pagination="true" pagination-clickable="true" navigation="true" centered-slides="true">
        <swiper-slide class="prodjswiper" v-for="el of slide" :key="el.id">

          <div class="imgstyle">
            <p class="quant">{{ el.quantity }}</p>
            <p class="title">{{ el.title }}</p>
            <NuxtImg fit="cover" sizes="1920px sm:600px md:1024px xxl:1920px" height="564" :src="el.imgproduct"
              :alt="el.title"></NuxtImg>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
    <div class="productstyle">
      <div class="ouradvant">наши преимущества</div>
      <div class="advanttext">Выбирая «ЗМК Урал» в качестве своего партнёра, Вы получаете качество и надёжность, которые
        делают наше сотрудничество выгодным.</div>

      <div class="production">Экскурсия на производство<button class="butproj">Смотреть</button><img
          src="/public/img/rutubesquare.webp" alt="rutube" style="width: 74px; padding: 5px;"></div>
      <div class="advant"><span class="textspan">Гибкость в производстве</span><span class="textsmall">Мы
          удовлетворяем любые запросы по
          объёмам и типам продукции, сочетая индивидуальный подход с точным соответствием техническим требованиям.</span>
      </div>
      <div class="advant"><span class="textspan">Неизменно высокое качество</span><span class="textsmall">Мы гордимся тем, что у нас не
          возникает претензий к качеству наших изделий при приёмке, что гарантирует вам безупречность каждой партии и
          экономию времени.</span></div>
      <div class="advant"><span class="textspan">Прямая коммуникация</span><span class="textsmall">Прямое общение с конструкторами, минуя
          менеджеров - наше преимущество, которое обеспечивает качественную проработку технических вопросов, учитывая
          потребности каждого проекта.</span></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
register()

const slide = [
  { id: 1, title: 'Мачты прожекторные', img: '/img/calendar.webp;', name: 'Роснефть', quantity: '> 196 тонн', time: 'Апрель - Ноябрь 2020 г.', imgproduct: '/img/masts.jpg' },
  { id: 2, title: 'Опоры регулируемые', img: '/img/calendar.webp;', name: 'Газпром', quantity: '> 65 тонн', time: 'Май - Июнь 2020 г.', imgproduct: '' },
  { id: 3, title: 'ОППС', img: '/img/calendar.webp;', name: 'Башнефть', quantity: '> 113 тонн', time: 'Январь - Февраль 2020 г.', imgproduct: '' },
  { id: 4, title: 'ОСП, ОПП', img: '/img/calendar.webp;', name: 'Роснефть', quantity: '> 98 тонн', time: 'Сентябрь 2019 г.', imgproduct: '' },
  { id: 5, title: 'Опоры ОН в ППУ изоляции', img: '/img/calendar.webp;', name: 'Башнефть', quantity: '> 60 тонн', time: 'Июнь 2019', imgproduct: '' },
  { id: 6, title: 'Серийные опоры', img: '/img/calendar.webp;', name: 'Иркутская Нефтяная Компания', quantity: '> 43 тонн', time: 'Апрель 2020 г.', imgproduct: '' },
]
</script>

<style scoped>
.proj {
  display: flex;
  justify-content: center;
  background-color: rgb(161, 7, 7);
  height: 700px;
}

.ourproj {
  text-transform: uppercase;
  color: white;
  font-size: 40px;
  display: flex;
  position: absolute;
  padding-top: 20px;
}

.ouradvant {
  text-transform: uppercase;
  color: white;
  font-size: 40px;
}

.quant {
  text-transform: uppercase;
  color: white;
  font-size: 88px;
  position: absolute;
  font-weight: bold;
  Font-style: oblique;
}

.title {
  text-transform: uppercase;
  color: white;
  font-size: 88px;
  position: absolute;
  bottom: 82px;
  font-weight: bold;
  Font-style: oblique;
}

swiper-container {
  overflow: hidden;
}

.production {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 320px;
  height: 210px;
}

.butproj {
  border: 2px solid white;
  margin: 20px 0 0 0;
  padding: 5px 50px 5px 5px;
}

.imgstyle {
  height: 564px;
  width: 100vw;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  filter: grayscale(1);
  margin-top: 88px;
}

.advanttext {
  font-size: 24px;
  color: white;
}

.advant {
  padding: 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 320px;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* .butadvant {
  border: 2px solid white;
  margin-bottom: 10px;
  padding: 5px;
  width: 152px;
} */

.productstyle {
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 30px;
}

.textspan {
  display: flex;
  text-align: center;
  padding-bottom: 10px;
}

.textsmall {
  font-size: 14px;
}

</style>
