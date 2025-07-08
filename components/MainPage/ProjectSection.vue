<template>
  <section>
    <h2 class="ourproj">наши проекты</h2>
    <div class="proj">
      <swiper-container class="swiper" ref="swiperCont" :init="true">
        <swiper-slide v-for="el of slide" :key="el.id">
          <div class="imgstyle">
            <p class="quant">{{ el.quantity }} <span class="units">{{ el.unit }}</span></p>
            <p class="title">{{ el.title }}</p>
            <p class="title1">{{ el.title1 }}</p>
            <NuxtImg class="imgsize" fit="cover" :src="el.imgproduct" :alt="el.title"></NuxtImg>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
    <div id="advant" class="productstyle">
      <h2 class="ouradvant">наши преимущества</h2>
      <h3 class="advanttext">Выбирая «ЗМК Урал», Вы получите качество и надёжность, которые
        сделают наше сотрудничество выгодным</h3>
      <div class="blockproduct">
        <div class="production">Экскурсия на производство<a class="butproj"
            href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ">Смотреть</a><img
            src="/public/img/rutubesquare.webp" alt="rutube" class="imgproj"></div>
        <div class="advant"><span class="textspan">Гибкость в производстве</span><span class="textsmall1">Мы
            удовлетворяем любые запросы по объёмам и типам продукции, сочетая индивидуальный подход с точным
            соответствием техническим
            требованиям</span>
        </div>
        <div class="advant"><span class="textspan">Неизменно высокое качество</span><span class="textsmall2">Мы
            гордимсякачеством наших изделий, что гарантирует Вам безупречность каждой партии и экономию времени</span>
        </div>
        <div class="advant"><span class="textspan">Прямая коммуникация</span><span class="textsmall3">Общение напрямую с
            нашими конструкторами - преимущество, которое обеспечивает качественную проработку технических вопросов,
            учитывая потребности каждого проекта</span></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()

const slide = [
  { id: 1, title: 'выпущено готовой продукции', quantity: '> 1500', unit: 'тонн', imgproduct: '/img/masts.webp' },
  { id: 2, title: 'производственных площадей', quantity: '> 2800', unit: 'м²', imgproduct: '/img/photozavod1.webp' },
  { id: 3, title: 'продукции изготовлено по', title1: 'индивидуальным параметрам', quantity: '> 350', unit: 'тонн', imgproduct: '/img/nonstandart.webp' },
  { id: 4, title: 'высококвалифицированных', title1: 'специалистов', quantity: '> 110', unit: '', imgproduct: '/img/spec.webp' },
]

const swiperCont = ref(null)

const swiper = useSwiper(swiperCont, {
  pagination: true,
  navigation: true,
})
</script>

<style scoped>
.proj {
  display: flex;
  justify-content: center;
  height: 605px;
}

.swiper {
  max-width: 100vw;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
}

.swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: var(--swiper-pagination-bottom, 93px);
}

.ourproj {
  text-transform: uppercase;
  color: black;
  font-size: 34px;
  padding: 30px 0;
  text-align: center;  
}

.ouradvant {
  text-align: center;
  text-transform: uppercase;
  color: black;
  font-size: 34px;
  padding-bottom: 30px;
}

.units {
  font-size: 48px;
}

.quant {
  text-transform: uppercase;
  color: rgba(30, 33, 61, 1);
  font-size: 70px;
  position: absolute;
  font-weight: bold;
  font-style: oblique;
  top: 170px;
  left: 66px;
  font-family: 'Montserrat', light;
}

.title {
  text-transform: uppercase;
  color: rgba(30, 33, 61, 1);
  font-size: 34px;
  position: absolute;
  left: 66px;
  bottom: 239px;
  font-weight: bold;
  font-style: oblique;
  font-family: 'Montserrat', light;
}

.title1 {
  text-transform: uppercase;
  color: rgba(30, 33, 61, 1);
  font-size: 34px;
  position: absolute;
  left: 66px;
  bottom: 194px;
  font-weight: bold;
  font-style: oblique;
  font-family: 'Montserrat', light;
}

.production {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0px 18px 26px 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: #eee;
  width: 340px;
  height: 264px;
  font-weight: 600;
  box-shadow: 2px 2px 14px rgb(30, 33, 61);
}

.butproj {
  border: 2px solid white;
  padding: 5px 32px 5px 5px;
  margin-top: 46px;
}

.imgstyle {
  height: 560px;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding-right: 84px;
}

.imgproj {
  width: 90px;
}

.advanttext {
  font-size: 24px;
  color: black;
  padding-bottom: 96px;
  text-align: center;
}

.advant {
  padding: 32px 20px 20px 20px;
  border-radius: 10px;
  font-size: 22px;
  background-color: #eee;
  width: 340px;
  height: 264px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 2px 2px 14px rgb(30, 33, 61);
}

.productstyle {
  justify-content: center;
  padding-top: 30px;
  height: 578px;
}

.textspan {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
}

.textsmall1 {
  font-size: 17px;
  text-align: center;
  padding-top: 43px;
}

.textsmall2 {
  font-size: 17px;
  text-align: center;
  padding-top: 42px;
}

.textsmall3 {
  font-size: 17px;
  text-align: center;
  padding-top: 42px;
}

.blockproduct {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  gap: 66px;
}

.imgsize {
  overflow: hidden;
  height: 596px;
  box-shadow: 3px 6px 9px rgb(30, 33, 61);
}

swiper-container {
  --swiper-theme-color: grey !important;
}

@media screen and (max-width:1600px) {
  .imgsize {
    height: 508px;
  }

  .quant {
    font-size: 63px;
    left: 86px;
  }

  .title {
    font-size: 32px;
    left: 86px;
    bottom: 268px;
  }

  .title1 {
    font-size: 32px;
    left: 86px;
    bottom: 232px;
  }

  .ourproj {
    font-size: 30px;
    padding: 30px 0 0 0;
  }

  .ouradvant {
    font-size: 30px;
  }

  .proj {
    height: 580px;
  }

  swiper-container {
    --swiper-theme-color: grey !important;
  }

  .textsmall1,
  .textsmall2,
  .textsmall3 {
    padding-top: 24px;
  }
}

@media screen and (max-width:1366px) {
  .blockproduct {
    flex-wrap: nowrap;
    gap: 44px;
    padding-left: 20px;
  }

  .advant {
    padding: 32px 20px 20px 20px;
    width: 286px;
    height: 272px;
  }

  .advanttext {
    padding-bottom: 62px;
    font-size: 22px;
  }

  .productstyle {
    height: 490px;
  }

  .ouradvant {
    font-size: 28px;
  }

  .quant {
    font-size: 56px;
    left: 86px;
  }

  .title {
    font-size: 28px;
    left: 86px;
    bottom: 213px;
  }

  .title1 {
    font-size: 28px;
    left: 86px;
    bottom: 179px;
  }

  .textspan {
    font-size: 20px;
  }

  .production {
    font-size: 20px;
    width: 286px;
    height: 272px;
  }

  .butproj {
    font-size: 20px;
  }

  .imgsize {
    height: 415px;
  }

  .imgstyle {
    height: 478px;
  }

  .ourproj {
    padding: 30px 0 0 0;
    font-size: 28px;
  }

  .proj {
    height: 490px;
  }

  swiper-container {
    --swiper-theme-color: grey !important;
  }
}

@media screen and (max-width:992px) {
  .quant {
    font-size: 58px;
  }

  .ouradvant {
    font-size: 26px;
  }

  .advanttext {
    font-size: 18px;
    padding-bottom: 24px;
  }

  .imgstyle {
    margin-top: 0;
    height: 349px;
  }

  .imgsize {
    height: 312px;
  }

  .quant {
    left: 108px;
    font-size: 36px;
    top: 120px;
  }

  .units {
    font-size: 36px;
  }

  .title {
    font-size: 17px;
    left: 99px;
    bottom: 167px;
  }

  .title1 {
    font-size: 17px;
    left: 96px;
    bottom: 151px;
  }

  .production {
    font-size: 17px;
    height: 295px;
    padding: 0px 18px 26px 26px;
  }

  .textspan {
    font-size: 17px;
  }

  .ourproj {
    font-size: 24px;
    padding: 30px 0 0 0;
  }

  .ouradvant {
    font-size: 24px;
    padding-bottom: 12px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: var(--swiper-navigation-top-offset, 32%);
  }

  swiper-container {
    --swiper-theme-color: grey !important;
  }

  .proj {
    height: 368px;
  }

  .productstyle {
    padding-right: 19px;
    height: 464px;
  }

  .advant {
    padding: 20px 20px 20px 20px;
    height: 295px;
  }

  .butproj {
    margin-top: 0;
  }

  .imgproj {
    width: 64px;
  }

  .textsmall1 {
    font-size: 15px;
    padding-top: 26px;
  }

  .textsmall2 {
    font-size: 15px;
    padding-top: 5px;
  }

  .textsmall3 {
    padding-top: 26px;
    font-size: 15px;
  }
}

@media screen and (max-width:768px) {
  .ourproj {
    font-size: 20px;
    padding: 20px 0 0 0;
  }

  .imgsize {
    height: 232px;
  }

  .quant {
    font-size: 28px;
    left: 54px;
    top: 84px;
  }

  .units {
    font-size: 24px;
  }

  .imgstyle {
    height: 260px;
  }

  .proj {
    height: 282px;
  }

  .title {
    font-size: 14px;
    left: 52px;
    bottom: 125px;
  }

  .title1 {
    font-size: 14px;
    left: 49px;
    bottom: 106px;
  }

  .ouradvant {
    font-size: 20px;
  }

  .productstyle {
    padding-top: 20px;
    height: 351px;
  }

  .advanttext {
    font-size: 18px;
    padding-bottom: 27px;
  }

  .imgproj {
    width: 0;
  }

  .production {
    font-size: 18px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: none;
    text-align: center;
    padding: 10px;
    gap: 10px;
    height: 108px;
  }

  .textsmall1,
  .textsmall2,
  .textsmall3 {
    display: none;
  }

  .textspan {
    font-size: 18px;
  }

  .butproj {
    display: none;
  }

  .blockproduct {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: flex-start;
    padding-left: 0;
  }

  .advant {
    height: 108px;
  }

  swiper-container {
    --swiper-theme-color: grey !important;
  }

}

@media screen and (max-width:576px) {
  .ourproj {
    font-size: 18px;
    padding: 10px 0 0 0;
  }

  .imgstyle {
    height: 216px;
    padding-right: 48px;
  }

  .imgsize {
    height: 194px;
  }

  swiper-slide {
    width: 100%;
  }

  .quant {
    font-size: 22px;
    left: 46px;
    top: 50px;
  }

  .units {
    font-size: 20px;
  }

  .title {
    font-size: 10px;
    left: 44px;
    bottom: 125px;
  }

  .title1 {
    font-size: 10px;
    left: 42px;
    bottom: 110px;
  }

  .proj {
    height: 235px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: var(--swiper-navigation-top-offset, 41%);
  }

  .swiper-horizontal>.swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: var(--swiper-pagination-bottom, 26px);
  }

  .ouradvant {
    font-size: 18px;
    padding-top: 10px;
  }

  .butproj {
    display: none;
  }

  .production {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    width: 100%;
    height: 40px;
    border-radius: 0;
    padding: 5px;
    font-size: 18px;
  }

  .advanttext {
    font-size: 17px;
  }

  .productstyle {
    padding: 0 10px;
    height: 100%;
  }

  .advant {
    height: 40px;
    border-radius: 0;
    padding: 6px 0;
    width: 100%;
  }

  .textspan {
    font-size: 18px;
  }

  swiper-container {
    --swiper-theme-color: grey !important;
  }
}

@media screen and (max-width:410px) {
  .imgsize {
    height: 344px;
    width: 100%;
  }

  .ourproj {
    padding: 10px 0 7px 0;
  }

  swiper-container {
    --swiper-theme-color: transparent !important;
  }

  .proj {
    height: 244px;
  }

  .title {
    bottom: 44px;
    font-size: 14px;
    color: white;
  }

  .title1 {
    font-size: 14px;
    left: 44px;
    bottom: 26px;
    color: white;
  }

  .quant {
    left: 44px;
    top: 124px;
    color: white;
  }

  .ouradvant {
    padding-top: 0;
  }

  .imgstyle {
    padding-right: 0;
  }
}

@media screen and (max-width:320px) {
  .textspan {
    font-size: 18px;
  }

  .production {
    font-size: 18px;
    text-align: center;
  }

  .advant {
    text-align: center;
  }

  .title {
    bottom: 33px;
    left: 36px;
  }

  .title1 {
    left: 36px;
    bottom: 16px;
  }
}
</style>