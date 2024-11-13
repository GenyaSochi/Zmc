<template>
  <section>    
    <div class="advanttext">Выбирая «ЗМК Урал» в качестве своего партнёра, Вы получаете качество и надёжность, которые делают наше сотрудничество выгодным.</div>
    <div class="prodj">
      <div>
      <div class="production">Экскурсия на производство<button class="butproj">Смотреть</button><img
          src="/public/img/rutubesquare.webp" alt="rutube" style="width: 74px; padding: 5px;"></div>
          <div class="advant">Наши преимущества<button class="butadvant">Смотреть</button></div> 
        </div>   
      <div class="projects">
        <p style="display: flex; justify-content: center;">Проекты</p>
        <swiper-container pagination="true" pagination-clickable="true" navigation="true" centered-slides="true"
          autoplay-delay="2500" autoplay-disable-on-interaction="true">
          <swiper-slide class="prodjswiper" v-for="el of slide" :key="el.id">
            <div class="titlesstyle">
              <p>{{ el.title }}</p>
              <p>{{ el.customer }}</p>
              <p>{{ el.text }}</p>
              <p>{{ el.time }}</p>
            </div>
            <div class="imgstyle">
              <NuxtImg fit="contain" height="250px" :src="el.img" :alt="el.title "></NuxtImg> 
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
  { id: 1, title: 'Мачты прожекторные', customer: 'Росснефть', text: '> 196 тонн', time: 'Апрель - Ноябрь 2020 г.', img: '' },
  { id: 2, title: 'Опоры регулируемые Газпром', customer: 'Росснефть', text: '> 65 тонн', img: '' },
  { id: 3, title: 'ОППС Башнефть', customer: 'Росснефть', text: '> 113 тонн', img: ''  },
  { id: 4, title: 'ОСП, ОПП Роснефть', customer: 'Росснефть', text: '> 98 тонн', img: '' },
  { id: 5, title: 'Опоры ОН в ППУ изоляции Башнефть', customer: 'Росснефть', text: '> 60 тонн', img: '' },
  { id: 6, title: 'Серийные опоры Иркутская Нефтяная Компания', customer: 'Росснефть', text: '> 43 тонн',img: '' },
]
</script>

<style scoped>
.prodj {
  display: flex;
  justify-content: center;
  gap: 100px;
  background-color: rgb(161, 7, 7);
  height: 520px;
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
  background-color: white;
  padding: 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 910px;
  height: 460px;
}
.butproj {
  border: 2px solid white;
  margin: 20px 0 0 0;
  padding: 5px 25px;
}
.prodjswiper {
  display: flex;
  gap: 50px;
  padding: 54px 44px 58px 44px;
}
.titlesstyle {
 background-color: rgba(56, 52, 52, 0.5);
 height: 266px;
 width: 360px;
 padding: 16px;
 border-radius: 10px; 
}
.imgstyle {
 background-color: rgba(12, 12, 12, 0.7);
 height: 266px;
 width: 360px;
 padding: 16px;
 border-radius: 10px; 
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
  padding: 5px 25px;  
  width: 152px;
}


</style>
