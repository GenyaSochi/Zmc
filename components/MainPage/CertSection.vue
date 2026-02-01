<template>
  <section id="cert">
    <h2 class="certtext">наши сертификаты</h2>
    <div class="certcontainer">
      <swiper-container class="certswiper" ref="swiperCont" :init="true">
        <swiper-slide v-for="el of certificate" :key="el.id">
          <a :href="el.pdf" target="_blank">
            <NuxtImg fit="cover" class="cert" sizes="200px sm:120px md:180px" loading="lazy" :src="el.img"
              :alt="el.title"></NuxtImg>
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
  slidesPerView: 6,
  pagination: true,
  breakpoints: {
    1600: {
      slidesPerView: 6
    },
    1120: {
      slidesPerView: 5
    },
    768: {
      slidesPerView: 4
    },
    576: {
      slidesPerView: 3
    },
    420: {
      slidesPerView: 3
    },
    320: {
      slidesPerView: 2
    }
  }
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
  height: 340px;
}

.certcontainer {
  text-align: center;
  height: 368px;
}

.certtext {
  text-align: center;
  text-transform: uppercase;
  color: black;
  padding: 40px 0;
  font-size: 34px;
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

  swiper-container {
    height: 330px;
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

  .certcontainer {
    height: 308px;
  }

  swiper-container {
    height: 298px;
  }
}

@media screen and (max-width:1017px) {
  .certtext {
    padding: 20px 0 50px 0;
  }
}

@media screen and (max-width:996px) {
  .certtext {
    font-size: 24px;
  }

  .cert {
    height: 214px;
  }

  .certcontainer {
    height: 226px;
  }

  swiper-container {
    height: 244px;
  }
}

@media screen and (max-width:768px) {
  .certtext {
    font-size: 20px;
  }

  .cert {
    height: 184px;
  }

  swiper-container {
    height: 216px;
  }
}

@media screen and (max-width:563px) {
  .cert {
    height: 184px;
  }

  .certcontainer {
    display: flex;
    height: 212px;
  }


  swiper-container {
    --swiper-theme-color: grey !important;
    height: 216px;
  }
}

@media screen and (max-width:466px) {

  .cert {
    height: 184px;
  }

  .certtext {
    padding: 20px 0 30px 0;
  }

  .certcontainer {
    padding-left: 0;
    text-align: center;
  }
}

@media screen and (max-width:407px) {
  .certtext {
    padding-top: 26px;
  }
}
</style>
