<template>
  <section id="cert">
    <div class="сertcontainer">
      <h2 class="сerttext">наши сертификаты</h2>
      <img class="certimg" src="/public/img/reward100.webp" alt="reward">
      <swiper-container class="сertswiper" watchSlidesProgress="true" slidesPerView="5">
        <swiper-slide v-for="el of certificate" :key="el.id">
          <a :href="el.pdf" target="_blank">
            <NuxtImg fit="cover" class="cert" :src="el.img" :alt="el.title"></NuxtImg>
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

<style scoped>
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

.сertswiper swiper-slide {
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

.cert {
  height: 300px;
  size: 200px;
}

@media screen and (max-width:1600px) {
.cert {
  height: 280px;
  size: 180px;
}
.сertcontainer {
  height: 556px;
}
.certimg {
  left: 63%;
}
.сerttext {
  font-size: 30px;
}
  
}
@media screen and (max-width:1366px) {
  .сerttext {
    font-size: 28px;
  }
  .certimg {
    left: 63%;
  }
 .сertcontainer {
  height: 500px;
 }
 .cert {
  height: 260px;
  size: 180px;
 }

@media screen and (max-width:992px) {
  .сerttext {
    font-size: 24px;
    padding-bottom: 50px;
  }
  .certimg {
    width: 55px;
    top: 5%;
  }

  .сertcontainer {
    height: 420px;
  }
}
@media screen and (max-width:768px) {
  .сerttext {
    font-size: 20px;
  }
  .сertcontainer {
    padding: 12px 0;
    height: 288px;
  }
  .certimg {
    width: 50px;
    top: 2%;
    left: 64%;
  }
  .cert {
    height: 184px;
  }
}
@media screen and (max-width:576px) {
  .сerttext {
    font-size: 18px;
  }
  .certimg {
    left: 66%;
  }
}
}
</style>
