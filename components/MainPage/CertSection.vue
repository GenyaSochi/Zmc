<template>
  <section id="cert">
    <h2 class="certtext">наши сертификаты</h2>
    <div class="certcontainer">
      <swiper-container class="certswiper" ref="swiperCont" :init="true">
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

const swiperCont = ref(null)

const swiper = useSwiper(swiperCont, {
  slidesPerView: 5,  
})

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

.certcontainer {
 padding-left: 60px;
  height: 368px;
  position: relative;     
}

.certtext {
  text-align: center;
  text-transform: uppercase;
  color: black;
  padding-bottom: 40px;
  font-size: 34px;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
}
.cert {
  height: 300px;
  size: 200px;
  box-shadow: 1px 0px 6px rgb(30, 33, 61);
}

.cert:hover {
  box-shadow: 2px 6px 15px rgb(30, 33, 61);
}

@media screen and (max-width:1600px) {
  .cert {
    height: 280px;
    size: 180px;
  }
  .certtext {
    font-size: 30px;
  }
}

@media screen and (max-width:1366px) {
  .certtext {
    font-size: 28px;
  }
  .cert {
    height: 260px;
    size: 180px;
  }

  @media screen and (max-width:992px) {
    .certtext {
      font-size: 24px;
      padding-bottom: 50px;
    }
    .cert {
      height: 240px;
    }
  }

  @media screen and (max-width:768px) {
    .certtext {
      font-size: 20px;
    } 
    .cert {
      height: 184px;
    }
  }

  @media screen and (max-width:576px) {
    .certtext {
      font-size: 18px;
    }
    .cert {
      height: 136px;
    }
  }

  @media screen and (max-width:410px) {
     .cert {
      height: 98px;
    }
    .certtext {
      padding-bottom: 26px;
    }
  }
}
</style>
