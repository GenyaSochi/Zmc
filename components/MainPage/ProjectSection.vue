<template>
  <section>
    <h2 class="ourproj">наше производство</h2>
    <div class="proj">
      <swiper-container class="swiper" ref="swiperCont" :init="true">
        <swiper-slide v-for="el of slide" :key="el.id">
          <div class="imgstyle">
            <div class="text-overlay">
              <p class="quant">{{ el.quantity }}</p>
              <p class="title">{{ el.title }}</p>
            </div>
            <NuxtImg class="imgsize" fit="cover" :src="el.imgproduct" :alt="el.title"></NuxtImg>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
    <div id="advant">
      <h2 class="ouradvant">наши преимущества</h2>
      <h3 class="advanttext">Выбирая «ЗМК Урал», Вы получите качество и надёжность, которые
        сделают наше сотрудничество выгодным</h3>
      <div class="blockproduct">
        <div class="production">Знакомство с производством<a class="butproj" href="https://vk.com/zmkural" target="_blank">Смотреть</a>
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
import { onMounted, ref } from 'vue'

register()

const slide = [
  { id: 1, title: 'выпущено готовой продукции', quantity: '> 1500 тонн', imgproduct: '/img/masts.webp' },
  { id: 2, title: 'производственных площадей', quantity: '> 2800 м²', imgproduct: '/img/photozavod1.webp' },
  { id: 3, title: 'продукции изготовлено по индивидуальным параметрам', quantity: '> 350 тонн', imgproduct: '/img/nonstandart.webp' },
  { id: 4, title: 'высококвалифицированных специалистов', quantity: '> 110', imgproduct: '/img/spec.webp' },
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
}

.swiper {
  max-width: 100vw;
  width: 100%;
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
  padding: 10px 0 46px 0;
  text-align: center;
}

.ouradvant {
  text-align: center;
  text-transform: uppercase;
  color: black;
  font-size: 34px;
  padding: 34px;
}

.quant {
  color: white;
  font-size: 70px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin-bottom: 15px;
  line-height: 1.2;
  text-align: center;
}

.title {
  text-transform: uppercase;
  color: white;
  font-size: 34px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  max-width: 80%;
  line-height: 1.3;
  text-align: center;
}

.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  text-align: center;
  padding: 20px;
  pointer-events: none;
}

.imgstyle {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 550px;
  overflow: hidden;
}

.production {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  text-decoration: none;
  color: inherit;
  display: inline-block;
}

.butproj:hover {
  background-color: #f0f0f0;
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
  flex-wrap: wrap;
}

.imgsize {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 3px 6px 9px rgb(30, 33, 61);
}

swiper-container {
  --swiper-theme-color: white !important;
  overflow: hidden;
}
swiper-container {
  --swiper-theme-color: white !important;
  --swiper-pagination-bullet-size: 20px;
  --swiper-pagination-bullet-width: 20px;
  --swiper-pagination-bullet-height: 20px;
  overflow: hidden;
  padding-bottom: 40px; 
}

swiper-container::part(pagination) {
  bottom: 10px;
}
swiper-container::part(bullet) {
  width: 20px !important;
  height: 20px !important;
  background: #ccc;
  opacity: 1;
  margin: 0 8px !important;
  transition: all 0.3s ease;
}

swiper-container::part(bullet-active) {
  background: white !important;
  width: 25px !important;
  height: 25px !important;
  border: 3px solid white !important;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

@media screen and (max-width: 1200px) {
  .blockproduct {
    gap: 20px;
  }

  .textsmall3, .textsmall1 {
    padding-top: 20px;
  }

  .production,
  .advant {
    width: 300px;
  }
}

@media screen and (max-width: 992px) {
  .quant {
    font-size: 50px;
  }

  .title {
    font-size: 26px;
  }

  .imgstyle {
    height: 450px;
  }

  .blockproduct { 
    align-items: center;
  }

  .production,
  .advant {
    width: 100%;
    max-width: 500px;
  }
}

@media screen and (max-width: 768px) {
  .quant {
    font-size: 36px;
  }

  .title {
    font-size: 20px;
  }

  .imgstyle {
    height: 400px;
  }

  .ouradvant {
    font-size: 28px;
    padding: 20px;
  }

  .advanttext {
    font-size: 20px;
    padding: 0 15px 30px;
  }

  .ourproj {
    font-size: 28px;

  }
}

@media screen and (max-width: 480px) {
  .quant {
    font-size: 28px;
  }

  .title {
    font-size: 16px;
    max-width: 90%;
  }

  .imgstyle {
    height: 300px;
  }

  .ouradvant {
    font-size: 24px;
    padding: 15px;
  }

  .advanttext {
    font-size: 18px;
  }

  .ourproj {
    font-size: 24px;
  }

  .production,
  .advant {
    height: auto;
    min-height: 200px;
    padding: 15px;
  }

  .textspan {
    font-size: 20px;
  }

  .textsmall1,
  .textsmall2,
  .textsmall3 {
    font-size: 16px;
    padding-top: 20px;
  }
}
</style>