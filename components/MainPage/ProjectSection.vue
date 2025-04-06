<template>
  <section>
    <h2 class="ourproj">наши проекты</h2>
    <div class="proj">
      <swiper-container class="swiper" pagination="true" navigation="true" centered-slides="true">
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
        сделают наше сотрудничество выгодным.</h3>
      <div class="blockproduct">
        <div class="production">Экскурсия на производство<a class="butproj"
            href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ">Смотреть</a><img
            src="/public/img/rutubesquare.webp" alt="rutube" style="width: 90px;" class="imgproj"></div>
        <div class="advant"><span class="textspan">Гибкость в производстве</span><span class="textsmall1">Мы
            удовлетворяем любые запросы по объёмам и типам продукции, сочетая индивидуальный подход с точным
            соответствием техническим
            требованиям.</span>
        </div>
        <div class="advant"><span class="textspan">Неизменно высокое качество</span><span class="textsmall2">Мы
            гордимсякачеством наших изделий, что гарантирует Вам безупречность каждой партии и экономию времени.</span>
        </div>
        <div class="advant"><span class="textspan">Прямая коммуникация</span><span class="textsmall3">Общение напрямую с
            нашими конструкторами - преимущество, которое обеспечивает качественную проработку технических вопросов, учитывая
            потребности каждого проекта.</span></div>
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
  color: white;
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
  padding: 10px 18px 26px 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 320px;
  height: 210px;
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
  /* filter: grayscale(1); */
  padding-right: 84px;
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
  background: linear-gradient(90deg,
      rgb(30, 33, 61)0%,
      rgb(10, 10, 10)100%);
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

.imgsize {
  overflow: hidden;
  height: 596px;
}

@media screen and (max-width:1920px) {}

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
}

@media screen and (max-width:1366px) {

  .blockproduct {
    flex-wrap: nowrap;
    gap: 44px;
    padding-left: 20px;
  }

  .advant {
    padding: 12px;
    width: 286px;
    height: 200px;
  }

  .advanttext {
    padding-bottom: 62px;
    font-size: 22px;
  }

  .productstyle {
    height: 470px;
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
    font-size: 18px;
  }

  .textsmall3 {
    font-size: 13px;
  }

  .production {
    font-size: 18px;
    width: 286px;
    height: 200px;
  }

  .butproj {
    font-size: 18px;
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
    height: 235px;
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

  .proj {
    height: 368px;
  }

  .productstyle {
    padding-right: 19px;
    height: 404px;
  }

  .advant {
    height: 235px;
  }

  .butproj {
    margin-top: 0;
  }
  
}

@media screen and (max-width:768px) {}

@media screen and (max-width:576px) {}
</style>
<!-- sizes="1850px sm:500px md:1224px xxl:1850px" -->