<template>
  <section id="cert">
    <div class="сertcontainer">
      <h2 class="сerttext">наши сертификаты</h2>
      <swiper-container watchSlidesProgress="true" slidesPerView="4" >
        <swiper-slide class="сertswiper" v-for="el of certificate" :key="el.id">
          <NuxtImg fit="cover" sizes="200px " height="300" :src="el.img" :alt="el.title"></NuxtImg>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script setup lang="ts">

import { register } from 'swiper/element/bundle'
register()
// import { EffectCards } from 'swiper/modules';

const certificate = [
  { id: 1, img: '/img/cert1.webp', title: 'certificate' },
  { id: 2, img: '/img/cert2.webp', title: 'certificate' },
  { id: 3, img: '/img/cert3.webp', title: 'certificate' },
  { id: 4, img: '/img/cert4.webp', title: 'certificate' },
  { id: 5, img: '/img/cert5.webp', title: 'certificate' },
  { id: 6, img: '/img/cert6.webp', title: 'certificate' },
  { id: 7, img: '/img/cert7.webp', title: 'certificate' },
  { id: 8, img: '/img/cert8.webp', title: 'certificate' },
]
// sm:500px md:1024px xxl:1850px

</script>

<style>

swiper-container {
  overflow: hidden;
}

.сertcontainer {
  margin: 0px 120px;
  padding: 30px 0;
  background-image: url(/public/img/mesh_background.webp); 
  height: 600px;
}
 
.сerttext {
  text-transform: uppercase;
  color: white;
  font-size: 40px;
  text-align: center;
  padding-bottom: 54px;  
}

.сertswiper {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

</style>
