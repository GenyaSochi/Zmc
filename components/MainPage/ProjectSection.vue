<template>
  <section>
    <div class="proj">
      <h2 class="ourproj">наши проекты</h2>
      <swiper-container pagination="true" pagination-clickable="true" navigation="true" centered-slides="true">
        <swiper-slide class="prodjswiper" v-for="el of slide" :key="el.id">

          <div class="imgstyle">
            <p class="quant">{{ el.quantity }} <span class="units">{{ el.unit }}</span></p>          
            <p class="title">{{ el.title }}</p>
            <p class="title1">{{ el.title1 }}</p>
            <NuxtImg fit="cover" sizes="1850px sm:500px md:1024px xxl:1850px" height="500" :src="el.imgproduct"
              :alt="el.title"></NuxtImg>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
    <div id="advant" class="productstyle">
      <h2 class="ouradvant">наши преимущества</h2>
      <h3 class="advanttext">Выбирая «ЗМК Урал» в качестве своего партнёра, Вы получаете качество и надёжность, которые
        делают наше сотрудничество выгодным.</h3>
      <div class="blockproduct">
        <div class="production">Экскурсия на производство<a class="butproj"
            href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ">Смотреть</a><img
            src="/public/img/rutubesquare.webp" alt="rutube" style="width: 90px;"></div>
        <div class="advant"><span class="textspan">Гибкость в производстве</span><span class="textsmall1">Мы
            удовлетворяем любые запросы по объёмам и типам продукции, сочетая индивидуальный подход с точным
            соответствием техническим
            требованиям.</span>
        </div>
        <div class="advant"><span class="textspan">Неизменно высокое качество</span><span class="textsmall2">Мы гордимся
            качеством наших изделий, что гарантирует Вам безупречность каждой партии и экономию времени.</span></div>
        <div class="advant"><span class="textspan">Прямая коммуникация</span><span class="textsmall3">Общение напрямую с
            нашими
            конструкторами - преимущество, которое обеспечивает качественную проработку технических вопросов, учитывая
            потребности каждого проекта.</span></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
register()

const slide = [
  { id: 1, title: 'выпущеной готовой продукции', quantity: '> 1500', unit:'тонн', imgproduct: '/img/masts.webp' },
  { id: 2, title: 'производственных площадей', quantity: '> 2800', unit:'м²', imgproduct: '/img/photozavod1.webp' },
  { id: 3, title: 'продукции изготовлено по', title1: 'индивидуальным параметрам', quantity: '> 350', unit:'тонн', imgproduct: '/img/nonstandart.webp' },
  { id: 4, title: 'высококвалифицированных', title1: 'специалистов', quantity: '> 110', unit:'', imgproduct: '/img/spec.webp' },
]
</script>

<style scoped>
.proj {
  display: flex;
  justify-content: center;
  height: 700px;
  margin-bottom: 90px;
}

.ourproj {
  text-transform: uppercase;
  color: white;
  font-size: 40px;
  display: flex;
  position: absolute;
  padding: 30px 0;
}

.ouradvant {
  text-transform: uppercase;
  color: white;
  font-size: 40px;
  padding-bottom: 30px;
}
.units {
  font-size: 48px;
}

.quant {
  text-transform: uppercase;
  color: white;
  font-size: 80px;
  position: absolute;
  font-weight: bold;
  font-style: oblique;
  filter: drop-shadow(2px 4px 6px black);
  top: 252px;
  left: 79px;
  font-family: 'Montserrat', light;
  /* font-family: 'Exo 2', sans-serif; */
}

.title {
  text-transform: uppercase;
  color: white;
  font-size: 48px;
  position: absolute;
  left: 77px;
  bottom: 137px;
  font-weight: bold;
  font-style: oblique;
  font-family: 'Montserrat', light;
  /* font-family: 'Exo 2', sans-serif; */
  filter: drop-shadow(2px 4px 6px black);
}

.title1 {
  text-transform: uppercase;
  color: white;
  font-size: 48px;
  position: absolute;
  left: 69px;
  bottom: 76px;
  font-weight: bold;
  font-style: oblique;
  font-family: 'Montserrat', light;
  /* font-family: 'Exo 2', sans-serif; */
  filter: drop-shadow(2px 4px 6px black);
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
  padding: 10px 18px 26px 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 320px;
  height: 210px;
}

.butproj {
  border: 2px solid white;
  padding: 5px 50px 5px 5px;
  margin-top: 46px;
}

.imgstyle {
  height: 564px;
  width: 100vw;
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
  padding-bottom: 96px;
  text-align: center;
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
  justify-content: flex-start;
}

.productstyle {
  background-color: rgb(56, 52, 52);
  justify-content: center;
  padding-top: 30px;
  height: 600px;
}

.textspan {
  text-align: center;
  padding-bottom: 10px;
  font-size: 22px;
}

.textsmall1 {
  font-size: 14px;
  text-align: center;
  padding-top: 12px;
}

.textsmall2 {
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
}

.textsmall3 {
  font-size: 14px;
  text-align: center;
  padding-top: 12px;
}

.blockproduct {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  gap: 66px;
}
</style>
