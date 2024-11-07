<template>
  <section>
    <div class="prodj">
    <div class="viewprodj">Проекты<span>&rarr;</span></div>
    <div style="padding: 20px;"></div>
    <swiper-container class="prodjslaid" pagination="true" pagination-clickable="true" navigation="true" space-between="30"
    centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
      <swiper-slide class="prodjswiper" v-for="el of slide" :key="el.id">{{ el.id }}.{{ el.text }}</swiper-slide>
    </swiper-container>   
  </div>
  </section>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
register()

const slide = [
 {id: 1 , text: 'ewrwer', img:'' },
 {id: 2 , text: 'hfdhg', img:'' },
 {id: 3 , text: 'dsfsd', img:'' },
 {id: 4 , text: 'erwewr', img:'' },
 {id: 5 , text: '23423', img:'' },
 {id: 6 , text: 'dgdf', img:''},
]
</script>

<style scoped>

.prodj {
  display: flex;
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

.prodjslaid {
  background-color: white;
  padding: 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 326px;
  height: 80px;
  margin-left: 42px;  
}


</style>
