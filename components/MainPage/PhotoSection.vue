<template>
  <section id="photo">
    <div class="photocontainer">
      <swiper-container watchSlidesProgress="true" slidesPerView="8">
        <swiper-slide v-for="photo of photos" :key="photo.id">
          <NuxtImg fit="cover" sizes="205px " height="300" :src="photo.img" :alt="photo.title"></NuxtImg>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
register()
const photos = [
  { id: 1, img: '/img/zmc1.webp', title: 'photo' },
  { id: 2, img: '/img/zmc2.webp', title: 'photo' },
  { id: 3, img: '/img/zmc3.webp', title: 'photo' },
  { id: 4, img: '/img/zmc4.webp', title: 'photo' },
  { id: 5, img: '/img/zmc5.webp', title: 'photo' },
  { id: 6, img: '/img/zmc6.webp', title: 'photo' },
  { id: 7, img: '/img/zmc7.webp', title: 'photo' },
  { id: 8, img: '/img/zmc8.webp', title: 'photo' },
  { id: 9, img: '/img/zmc9.webp', title: 'photo' },
  { id: 10, img: '/img/zmc10.webp', title: 'photo' },
  { id: 11, img: '/img/zmc11.webp', title: 'photo' },
  { id: 12, img: '/img/zmc12.webp', title: 'photo' },
  { id: 13, img: '/img/zmc13.webp', title: 'photo' },
  { id: 14, img: '/img/zmc14.webp', title: 'photo' },
  { id: 15, img: '/img/zmc15.webp', title: 'photo' },
]
</script>

<style scoped>
.photocontainer {
  /* background-color: rgb(30, 33, 61); */
  padding: 30px 56px 60px 118px; 
  cursor: pointer;
}
@media screen and (max-width:1920px) {
  
}
@media screen and (max-width:1600px) {
  
}
@media screen and (max-width:1366px) {
  .photocontainer {
    padding: 22px 22px 22px 34px;
  }
}
@media screen and (max-width:992px) {
  
}
@media screen and (max-width:768px) {
  
}
@media screen and (max-width:576px) {
  
}
</style>