<template>
  <section id="cost">
    <div style="display: flex; flex-direction: row;">
      <form class="formcost" @submit.prevent="">
        <h2 class="h2cost">Получить рассчёт стоимости продукции</h2>
        <p class="workcost">Наши менеджеры работают по будням с 8.00 до 17.00</p>
        <!-- <img class="imgcost" src="/public/img/accounts100.webp" alt="accounts"> -->
        <div class="allinputcost">
          <input class="inputcost" type="text" id="name" name="name" required placeholder="Ваше имя...">
          <input class="inputcost" type="phone" id="phone" name="phone" required placeholder="+7">
          <div>
            <input type="file" id="file" name="file" required accept=".xls, .doc, .docx, .pdf"
              class="custom-file-input">
            <button class="butcost" type="submit">Отправить заявку</button>
          </div>
        </div>
        <div class="perscost">
          <NuxtLink to="/privacy" class="butinfo">Нажимая на кнопку, Вы соглашаетесь на обработку персональных данных.
          </NuxtLink>
        </div>
        <div>
          <a href="tel:+7(351)304-42-35" class="infocost">тел. +7 (351) 304-42-35</a>
          <a href="mailto:sales@zmkural.com" class="infocost"">sales@zmkural.com</a>    
        </div>
      </form>  
      <swiper-container class="swiper" effect="cards" grab-cursor="true" cards-effect-rotate="true" cards-effect-per-slide-offset="8" :modules="modules">
            <swiper-slide v-for="card in cards" :key="card.id" class="showcards">{{ card.title }}</swiper-slide>
      </swiper-container>
        </div>
  </section>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'

register()
const modules = [EffectCards]

const cards = [
  { id: 1, title: 'Плазменная резка металла' },
  { id: 2, title: 'Рубка листового металла на гильотине' },
  { id: 3, title: 'Штамповка металла' },
  { id: 4, title: 'Вальцовка листов' },
  { id: 5, title: 'Гибка листов' },
  { id: 6, title: 'Сварочные работы любой сложности' },
  { id: 7, title: 'Пескоструйная очистка конструкций' },
  { id: 8, title: 'Изготовление продукции по индивидуальным чертежам' },
]
</script>

<style scoped>
.custom-file-input {
  font-size: 18px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
  width: 216px;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}

.custom-file-input::before {
  content: 'Выберите файл';
  display: inline-block;
  background: rgb(30, 33, 61);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.custom-file-input:hover::before {
  background: #0056b3;
}

.h2cost {
  padding: 30px 0;
  font-size: 20px;
}

.allcards {
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
}

.swiper {
  width: 340px;
  height: 492px; 
}

.showcards {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 20px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px; 
}

.showcards:nth-child(1n) {
  background-color: rgb(30, 33, 61);
}

.showcards:nth-child(2n) {
  background-color: rgb(161, 7, 7);  
}

.showcards:nth-child(3n) {
  background-color: rgb(30, 33, 61);
}

.showcards:nth-child(4n) {
  background-color: rgb(47, 56, 131);
}

.showcards:nth-child(5n) {
  background-color: rgb(161, 7, 7);
}

.showcards:nth-child(6n) {
  background-color: rgb(47, 56, 131);
}

.showcards:nth-child(7n) {
  background-color: rgb(30, 33, 61);
}

.showcards:nth-child(8n) {
  background-color: rgb(161, 7, 7);
}

.formcost {
  background: linear-gradient(90deg,
      rgb(7, 7, 7)39%,
      rgb(30, 33, 61)96%);
  color: white;
  font-size: 20px;
  width: 1150px;
  padding-bottom: 30px;
  margin: 0 60px 30px 60px;
}

/* .imgcost {
  position: absolute;
  right: 24%;
  top: 31%;
  z-index: 1;
} */

.workcost {
  font-size: 20px;
  text-align: center;
  padding: 0 48px 20px 48px;
}

.butinfo {
  font-size: 16px;
}

.inputcost {
  background-color: white;
  text-align: start;
  width: 216px;
  height: 48px;
  border-radius: 5px;
}

.allinputcost {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  padding-left: 30px;
  padding-bottom: 25px;
}

.butcost {
  background-color: rgb(161, 7, 7);
  padding: 5px;
  border-radius: 5px;
  height: 43px;
  width: 190px;
  font-size: 18px;
  text-align: center;
  margin-left: 40px;
}

.perscost {
  padding-left: 30px;
  align-items: center;
  padding-bottom: 30px;
  gap: 10px;
}

.infocost {
  margin-left: 30px;
  font-size: 20px;
  margin-bottom: 12px;
}
</style>