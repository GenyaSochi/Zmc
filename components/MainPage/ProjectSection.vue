<template>
  <section>
    <h2 class="ourproj">наше производство</h2>
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
        <div class="production">Экскурсия на производство<a class="butproj" href="https://vk.com/zmkural">Смотреть</a>
        </div>
        <!-- <div class="production">Экскурсия на производство<a href="https://vk.com/zmkural"
            class="butproj">Смотреть</a><img src="/public/img/rutubesquare.webp" alt="rutube" class="imgproj"></div> -->
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
  padding: 30px 0 46px 0;
  text-align: center;
}

.ouradvant {
  text-align: center;
  text-transform: uppercase;
  color: black;
  font-size: 34px;
  padding: 34px;
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
  left: 364px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-style: oblique;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}

.title {
  text-transform: uppercase;
  color: rgba(30, 33, 61, 1);
  font-size: 34px;
  position: absolute;
  left: 364px;
  bottom: 239px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-style: oblique;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}

.title1 {
  text-transform: uppercase;
  color: rgba(30, 33, 61, 1);
  font-size: 34px;
  position: absolute;
  left: 364px;
  bottom: 194px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-style: oblique;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}

.production {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 0px 18px 26px 18px;
  border-radius: 10px;
  font-size: 22px;
  background-color: #eee;
  width: 340px;
  height: 264px;
  font-weight: 600;
  box-shadow: 2px 2px 14px rgb(30, 33, 61);
  text-align: center;
  gap: 75px;
}

.butproj {
  border: 2px solid gray;
  padding: 20px;
  border-radius: 10px;
  max-width: 240px;
  justify-content: center;
}

.imgstyle {
  height: 560px;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding-right: 340px;
}

.imgproj {
  width: 90px;
}

.advanttext {
  font-size: 24px;
  color: black;
  padding-bottom: 50px;
  text-align: center;
  font-weight: 600;
}

.advant {
  padding: 20px 20px 20px 20px;
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
  height: 520px;
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
  padding-top: 20px;
}

.textsmall3 {
  font-size: 17px;
  text-align: center;
  padding-top: 42px;
}

.blockproduct {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  gap: 30px;
  padding: 0 20px 0 20px;
}

.imgsize {
  overflow: hidden;
  height: 550px;
  box-shadow: 3px 6px 9px rgb(30, 33, 61);
}

swiper-container {
  --swiper-theme-color: grey !important;
}

@media screen and (max-width:2192px) {

  .quant,
  .title,
  .title1 {
    left: 206px;
  }

  .imgstyle {
    padding-right: 240px;
  }
}

@media screen and (max-width:1936px) {
  .imgstyle {
    padding-right: 220px;
  }
}

@media screen and (max-width:1896px) {
  .imgstyle {
    padding-right: 180px;
  }
}

@media screen and (max-width:1844px) {
  .imgstyle {
    padding-right: 140px;
  }
}

@media screen and (max-width:1820px) {
  .imgstyle {
    padding-right: 100px;
  }
}

@media screen and (max-width:1769px) {

  .quant,
  .title,
  .title1 {
    left: 96px;
  }
}

@media screen and (max-width:1670px) {
  .imgstyle {
    padding-right: 67px;
  }
}

@media screen and (max-width:1609px) {
  .imgsize {
    height: 470px;
  }

  .quant {
    font-size: 58px;
    left: 142px;
  }

  .title {
    font-size: 28px;
    left: 142px;
    bottom: 268px;
  }

  .title1 {
    font-size: 28px;
    left: 142px;
    bottom: 232px;
  }

  .ourproj {
    font-size: 30px;
    padding: 20px 0;
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

  .advant {
    height: 335px;
    width: 310px;
  }

  .production {
    height: 335px;
    width: 310px;
    gap: 130px;
  }

  .productstyle {
    height: 573px;
  }
}

@media screen and (max-width:1472px) {

  .quant,
  .title,
  .title1 {
    left: 130px;
  }

  .productstyle {
    height: 599px;
  }
}

@media screen and (max-width:1430px) {

  .quant,
  .title,
  .title1 {
    left: 89px;
  }
}

@media screen and (max-width:1366px) {

  .ourproj {
    font-size: 28px;
  }

  .advant {
    padding: 32px 10px 20px 10px;
    width: 270px;
  }

  .advanttext {
    padding: 0 20px 47px 20px;
    font-size: 24px;
  }

  .productstyle {
    height: 583px;
  }

  .ouradvant {
    font-size: 28px;
    padding: 26px;
  }

  .quant {
    font-size: 56px;
    left: 170px;
  }

  .title {
    font-size: 20px;
    left: 170px;
    bottom: 213px;
  }

  .title1 {
    font-size: 20px;
    left: 170px;
    bottom: 179px;
  }

  .textspan {
    font-size: 20px;
  }

  .production {
    font-size: 20px;
    height: 335px;
    width: 270px;
    gap: 141px;
  }

  .butproj {
    font-size: 20px;
  }

  .imgsize {
    height: 395px;
  }

  .imgstyle {
    height: 478px;
    padding-right: 115px;
  }

  .proj {
    height: 490px;
  }

  swiper-container {
    --swiper-theme-color: grey !important;
  }
}

@media screen and (max-width:1262px) {

  .quant,
  .title,
  .title1 {
    left: 120px;
  }

  .imgstyle {
    padding-right: 66px;
  }
}

@media screen and (max-width:1162px) {

  .title,
  .title1 {
    left: 66px;
  }

  .quant {
    left: 66px;
  }

  .imgsize {
    height: 374px;
  }

  .advant {
    height: 382px;
  }

  .production {
    height: 382px;
    gap: 180px;
  }

  .productstyle {
    height: 620px;
  }

  .imgstyle {
    padding-right: 60px;
  }
}

@media screen and (max-width:1095px) {

  .textsmall1,
  .textsmall2,
  .textsmall3 {
    display: none;
  }

  .title,
  .title1 {
    left: 60px;
  }

  .quant {
    left: 60px;
  }

  .imgstyle {
    padding-right: 36px;
  }

  .production {
    width: 100%;
    height: 65px;
    gap: 26px;
    padding: 0;
    font-size: 18px;
  }

  .productstyle {
    height: 580px;
  }

  .advant {
    width: 100%;
    height: 65px;
    justify-content: center;
    padding: 0;
    font-size: 18px;
  }

  .blockproduct {
    flex-direction: column;
  }

  .butproj {
    display: none;
  }
}

@media screen and (max-width:1056px) {

  .quant,
  .title,
  .title1 {
    left: 50px;
  }
}

@media screen and (max-width:1017px) {
  .productstyle {
    height: 534px;
  }

  /* .blockproduct {
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    display: grid;
    justify-items: center;
    padding: 0 150px 0 150px;
    height: 408px;
  } */

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
    padding-right: 0;
  }

  .imgsize {
    margin: auto;
  }

  .quant {
    font-size: 36px;
    top: 120px;
    left: 286px;
    color: white;
  }

  .units {
    font-size: 36px;
  }

  .title {
    bottom: 167px;
    left: 286px;
    color: white;
  }

  .title1 {
    bottom: 146px;
    left: 286px;
    color: white;
  }

  .textspan {
    font-size: 18px;
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
    height: 396px;
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

  .ourproj {
    font-size: 24px;
  }
}

@media screen and (max-width:912px) {

  .title {
    left: 230px;
    bottom: 162px;
  }

  .title1 {
    left: 230px;
    bottom: 137px;
  }

  .quant {
    left: 230px;
  }
}

@media screen and (max-width:813px) {

  .title {
    left: 205px;
  }

  .title1 {
    left: 205px;
  }

  .quant {
    left: 205px;
  }
}

@media screen and (max-width:768px) {
  .quant {
    left: 158px;
    top: 125px;
  }

  .units {
    font-size: 24px;
  }

  .imgstyle {
    width: 100%;
    height: 303px;
  }

  .proj {
    height: 337px;
  }

  .ouradvant {
    font-size: 20px;
  }

  .productstyle {
    padding-top: 20px;
    height: 523px;
  }


  .advanttext {
    font-size: 18px;
    padding: 10px 20px 20px 20px;
  }

  .imgproj {
    width: 0;
  }

  .butproj {
    padding: 5px 15px 5px 20px;
    border-radius: 5px;
  }

  swiper-container {
    --swiper-theme-color: grey !important;
  }

  .textspan {
    font-size: 18px;
  }

  /* .production {
    display: flex;
    flex-direction: row;
    border-radius: 0;
    height: 75px;
  }

  .advant {
    display: none;
  } */
  /* 
  .blockproduct {
    display: flex;
    height: 122px;
    padding: 0;
  } */
  /* 
  .production {
    padding: 0 20px;
    width: 768px;
    height: 94px;
    justify-content: space-evenly;
  } */

  .title {
    bottom: 109px;
    left: 158px;
  }

  .title1 {
    left: 158px;
    bottom: 84px;
  }

  .ourproj {
    font-size: 20px;
  }
}


@media screen and (max-width:653px) {
  swiper-container {
    --swiper-theme-color: transparent !important;
  }

  .title {
    left: 89px;
    bottom: 113px;
  }

  .quant {
    left: 89px;
    top: 100px;
  }

  .title1 {
    left: 89px;
  }
}

@media screen and (max-width:465px) {
  .title {
    left: 40px;
    bottom: 106px;
  }

  .quant {
    left: 40px;
  }

  .title1 {
    left: 40px;
    bottom: 83px;
  }

  .ouradvant {
    padding-bottom: 27px;
  }

  .productstyle {
    height: 539px;
  }
}

@media screen and (max-width:447px) {
  .productstyle {
    height: 573px;
  }
}

@media screen and (max-width:432px) {
  .title {
    left: 18px;
    bottom: 108px;
  }

  .quant {
    left: 18px;
    top: 106px;
  }

  .title1 {
    left: 18px;
    bottom: 82px;
  }
}

@media screen and (max-width:422px) {
  .title {
    bottom: 108px;
  }

  .title1 {
    bottom: 62px;
  }
}

@media screen and (max-width:413px) {
  .title1 {
    font-size: 19px;
    left: 20px;
    bottom: 81px;
  }

  .title {
    bottom: 107px;
    font-size: 19px;
    left: 20px;
  }

  .quant {
    left: 20px;
  }
}

@media screen and (max-width:403px) {

  .quant {
    left: 10px;
    top: 143px;
  }

  .title {
    bottom: 83px;
    left: 10px;
    font-size: 17px;
  }

  .title1 {
    bottom: 57px;
    left: 10px;
    font-size: 17px;
  }

  .blockproduct {
    height: 275px;
  }

  .advanttext {
    padding: 10px 20px 20px 20px;
  }

  .productstyle {
    height: 504px;
  }

  .production,
  .advant {
    border-radius: 5px;
  }
}

@media screen and (max-width:385px) {
  .title {
    bottom: 100px;
  }

  .title1 {
    bottom: 74px;
  }

  .quant {
    top: 114px;
  }

  .productstyle {
    height: 474px;
    padding-top: 0px;
  }
}
</style>