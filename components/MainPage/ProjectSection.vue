<template>
  <section>
    <div class="advanttext">Выбирая «ЗМК Урал» в качестве своего партнёра, Вы получаете качество и надёжность, которые
      делают наше сотрудничество выгодным.</div>
    <div class="prodj">
      <div>
        <div class="production">Экскурсия на производство<button class="butproj">Смотреть</button><img
            src="/public/img/rutubesquare.webp" alt="rutube" style="width: 74px; padding: 5px;"></div>
        <div class="advant">Наши преимущества<button class="butadvant">Подробнее</button></div>
      </div>
      <div class="projects">
        <!-- <p style="display: flex; justify-content: center;">Проекты</p> -->
        <swiper-container pagination="true" pagination-clickable="true" navigation="true" centered-slides="true">
          <swiper-slide class="prodjswiper" v-for="el of slide" :key="el.id">
            <div class="titlesstyle">
              <p style="display: flex;align-items: center; position: relative;">
                <img class="icons" src="/public/img/calendar.webp" alt="calendar">
                <span style="padding-left: 10px;">{{ el.time }}</span>
              </p>
              <p style="display: flex; text-align: center; align-items: center;">
                <img class="icons" src="/public/img/code.webp" alt="code">
                <span style="padding-left: 10px;"> {{ el.title }}</span>
              </p>
              <p style="display: flex; text-align: center; align-items: center;">
                <img class="icons" src="/public/img/consumer.webp" alt="consumer">
                <span style="padding-left: 10px;">{{ el.name }}</span>
              </p>
              <p style="display: flex; text-align: center; align-items: center;">
                <img class="icons" src="/public/img/quantity.webp" alt="quantity">
                <span style="padding-left: 10px;">{{ el.quantity }}</span>
              </p>
              <button
                style="padding-left: 10px; border: 2px solid white; margin: 0px 170px 0 10px; padding: 5px;">Подробнее</button>
              <div class="imgstyle">
                <NuxtImg fit="cover" width="1300px" height="500px" :src="el.imgproduct" :alt="el.title"></NuxtImg>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
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
  { id: 5, title: 'Опоры ОН в ППУ изоляции', img: '/img/calendar.webp;', name: 'Башнефть', quantity: '> 60 тонн', imgproduct: '' },
  { id: 6, title: 'Серийные опоры', img: '/img/calendar.webp;', name: 'Иркутская Нефтяная Компания', quantity: '> 43 тонн', imgproduct: '' },
]
</script>

<style scoped>
.prodj {
  display: flex;
  justify-content: center;
  gap: 100px;
  background-color: rgb(161, 7, 7);
  height: 560px;
  padding-top: 28px;
}

.viewprodj {
  background-color: white;
  padding: 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 326px;
  height: 80px;
  margin-left: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 290px;
  height: 190px;
}

.projects {
  /* padding: 26px; */
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(56, 52, 52, 0.9);
  color: white;
  width: 1300px;
  height: 500px;
}

.butproj {
  border: 2px solid white;
  margin: 20px 0 0 0;
  padding: 5px 50px 5px 5px;
}

.prodjswiper {
  display: flex;
  padding: 0px 44px;
}


.titlesstyle {
  background-color: rgba(161, 7, 7, 0.7);
  height: 504px;
  width: 338px;
  /* padding: 16px; */
  border-radius: 10px;
  position: relative;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-content: flex-start;
  top: 24px;
  left: 40px;
}

.imgstyle {
  /* background-color: rgba(12, 12, 12, 0.7); */
  height: 500px;
  width: 1300px;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -24px;
  left: -84px;
}

.advanttext {
  font-size: 24px;
  background: rgba(56, 52, 52, 0.5);
  color: white;
  padding: 28px;
  border-radius: 10px;
  margin: 0px 82px 20px 82px;
}

.advant {
  padding: 26px;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 290px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.butadvant {
  border: 2px solid white;
  margin-bottom: 10px;
  padding: 5px;
  width: 152px;
}

.icons {
  width: 40px;
  margin: 10px;
}
</style>
