<template>
  <section>
    <div class="prodj">
    <div class="viewprodj">Проекты<span>&rarr;</span></div>
    <div style="padding: 20px;"></div>
    <swiper-container>
      <swiper-slide>1</swiper-slide>
      <swiper-slide>2</swiper-slide>             
      <swiper-slide>3</swiper-slide>  
    </swiper-container>
  </div>
  </section>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
register()
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

/* .prodjcontainer {
  background-color: white;
  padding: 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 326px;
  height: 80px;
  margin-left: 42px;
} */
</style>