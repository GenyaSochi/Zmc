<template>
  <section>

    <div class="prodj">
      <div class="production">Экскурсия на производство<button class="butcontainer">Смотреть</button><img
          src="/public/img/rutubesquare.webp" alt="rutube" style="width: 74px; padding: 5px;"></div>
      <div style="padding: 20px;"></div>
      <div class="projects">
        <p>Проекты</p>
        <swiper-container pagination="true" pagination-clickable="true" navigation="true" centered-slides="true"
          autoplay-delay="2500" autoplay-disable-on-interaction="false">
          <swiper-slide class="prodjswiper" v-for="el of slide" :key="el.id">{{ el.title }}.{{ el.text }}.{{ el.description}}.{{ el.img }}</swiper-slide>
        </swiper-container>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
register()

const slide = [
  { id: 1, title: 'Мачты прожекторные', text: '> 196 тонн', description: 'Было изготовлено 28 мачт. Мачты были спроектированы на основе технического задания заказчика. За основу взята серийная конструкция и доработана по правилам безопасной эксплуатации в районах крайнего севера. Большое количество времени потребовалось на проектирование и согласование КД с институтом и заказчиком.', img: '/public/img/masts.jpg' as any},
  { id: 2, title: 'Опоры регулируемые', text: '> 65 тонн', description: 'Газпром', img: '' },
  { id: 3, title: 'ОППС', text: '> 113 тонн', description: '', img: ''  },
  { id: 4, title: '', text: 'hfdhg', description: '', img: '' },
  { id: 5, title: '', text: 'hfdhg', description: '', img: '' },
  { id: 6, title: '', text: 'hfdhg', description: '', img: '' },
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
  width: 566px;
  height: 400px;
}

.butcontainer {
  border: 2px solid white;
  margin: 20px 0 0 0;
  padding: 5px 25px;
}
</style>
