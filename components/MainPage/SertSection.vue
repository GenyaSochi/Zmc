<template>
  <section id="cert">
    <div class="сertcontainer">
      <h2 class="сerttext">наши сертификаты</h2>
      <swiper-container watchSlidesProgress="true" slidesPerView="4">
        <swiper-slide class="сertswiper" v-for="el of certificate" :key="el.id">
          <NuxtImg fit="cover" sizes="200px " height="300" :src="el.img" :alt="el.title"></NuxtImg>    
          <!-- <a href="cert1_pdf.pdf">{{ el.pdf }}</a>    -->
      
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
  { id: 1, img: '/img/cert1.webp', title: 'certificate', pdf:'cert1_pdf.pdf' },
  { id: 2, img: '/img/cert2.webp', title: 'certificate', pdf:'cert2_pdf.pdf' },
  { id: 3, img: '/img/cert3.webp', title: 'certificate', pdf:'cert3_pdf.pdf' },
  { id: 4, img: '/img/cert4.webp', title: 'certificate', pdf:'cert4_pdf.pdf' },
  { id: 5, img: '/img/cert5.webp', title: 'certificate', pdf:'cert5_pdf.pdf' },
  { id: 6, img: '/img/cert6.webp', title: 'certificate', pdf:'cert6_pdf.pdf' },
  { id: 7, img: '/img/cert7.webp', title: 'certificate', pdf:'cert7_pdf.pdf' },
  { id: 8, img: '/img/cert8.webp', title: 'certificate', pdf:'cert8_pdf.pdf' },
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
  height: 600px;
  position: relative;  
  background-image: url(/public/img/sertback.webp);
  /* box-shadow: 1px 0px 6px -1px rgba(24, 106, 168, 0.2); */
}

.сerttext {
  text-align: center;
  text-transform: uppercase;
  color: white;
  padding-bottom: 54px;
  font-size: 40px;
}

.сertswiper {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* transition: 0.5s; */
}

/* .сertswiper:hover {
  transform: scale(1.15);
} */
</style>
