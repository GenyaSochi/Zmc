<template>
  <section id="cert">
    <div class="сertcontainer">
      <h2 class="сerttext">наши сертификаты</h2>
      <img class="certimg" src="/public/img/reward100.webp" alt="reward">
      <swiper-container watchSlidesProgress="true" slidesPerView="5">
        <swiper-slide class="сertswiper" v-for="el of certificate" :key="el.id">
          <a :href="el.pdf" target="_blank">
            <NuxtImg fit="cover" sizes="200px " height="300" :src="el.img" :alt="el.title"></NuxtImg>
          </a>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script setup lang="ts">

import { register } from 'swiper/element/bundle'
register()

const certificate = [
  { id: 1, img: '/img/cert1.webp', title: 'certificate', pdf: 'cert1_pdf.pdf' },
  { id: 2, img: '/img/cert2.webp', title: 'certificate', pdf: 'cert2_pdf.pdf' },
  { id: 3, img: '/img/cert3.webp', title: 'certificate', pdf: 'cert3_pdf.pdf' },
  { id: 4, img: '/img/cert4.webp', title: 'certificate', pdf: 'cert4_pdf.pdf' },
  { id: 5, img: '/img/cert5.webp', title: 'certificate', pdf: 'cert5_pdf.pdf' },
  { id: 6, img: '/img/cert6.webp', title: 'certificate', pdf: 'cert6_pdf.pdf' },
  { id: 7, img: '/img/cert7.webp', title: 'certificate', pdf: 'cert7_pdf.pdf' },
  { id: 8, img: '/img/cert8.webp', title: 'certificate', pdf: 'cert8_pdf.pdf' },
]

</script>

<style>
swiper-container {
  overflow: hidden;
}

.сertcontainer {
  padding: 30px 0;
  height: 600px;
  position: relative;
  background: linear-gradient(90deg,
      rgb(7, 7, 7)39%,
      rgb(30, 33, 61)96%);
}

.сerttext {
  text-align: center;
  text-transform: uppercase;
  color: white;
  padding-bottom: 82px;
  font-size: 34px;
}

.сertswiper {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.certimg {
  position: absolute;
  z-index: 2;
  left: 61%;
  top: 3%
}
</style>
