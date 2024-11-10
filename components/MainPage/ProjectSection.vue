<template>
  <section>

    <div class="prodj">
      <div class="production">Экскурсия на производство<button class="butcontainer">Смотреть</button></div>
      <!-- <div class="production">Проекты<span>&rarr;</span></div> -->
      <div style="padding: 20px;"></div>
      <div class="projects">
        <p>Проекты</p>
        <swiper-container pagination="true" pagination-clickable="true" navigation="true" centered-slides="true"
          autoplay-delay="2500" autoplay-disable-on-interaction="false">
          <swiper-slide class="prodjswiper" v-for="el of slide" :key="el.id">{{ el.id }}.{{ el.text }}</swiper-slide>
        </swiper-container>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
register()

const slide = [
  { id: 1, text: 'ewrwer', img: '' },
  { id: 2, text: 'hfdhg', img: '' },
  { id: 3, text: 'dsfsd', img: '' },
  { id: 4, text: 'erwewr', img: '' },
  { id: 5, text: '23423', img: '' },
  { id: 6, text: 'dgdf', img: '' },
]
</script>

<style scoped>
.prodj {
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: rgb(161, 7, 7);
  height: 400px;
  padding-top: 20px;
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

.production {
  background-color: white;
  padding: 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 290px;
  height: 190px;
}
.projects{
  background-color: white;
  padding: 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 290px;
  height: 190px;
}

.butcontainer {
  border: 2px solid white;
  margin: 20px 0 0 0;
  padding: 5px 25px;
}
</style>
<!-- <img
            src="/public/img/rutubecircle.webp" alt="rutube" style="width: 74px; padding: 5px;"> -->