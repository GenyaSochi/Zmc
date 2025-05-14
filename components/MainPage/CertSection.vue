<template>
  <section id="cert">
    <div class="certcontainer">
      <h2 class="certtext">наши сертификаты</h2>
      <img class="certimg" src="/public/img/reward100.webp" alt="reward">
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

const swiperCont=ref(null)

const swiper = useSwiper(swiperCont,{
  slidesPerView:5
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
  padding: 30px 0;
  height: 600px;
  position: relative;
  background: linear-gradient(90deg,
      rgb(7, 7, 7)39%,
      rgb(30, 33, 61)96%);
}

.certtext {
  text-align: center;
  text-transform: uppercase;
  color: white;
  padding-bottom: 82px;
  font-size: 34px;
}

/* .certswiper swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
} */

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

  .certcontainer {
    height: 556px;
  }

  .certimg {
    left: 63%;
  }

  .certtext {
    font-size: 30px;
  }

}

@media screen and (max-width:1366px) {
  .certtext {
    font-size: 28px;
  }

  .certimg {
    left: 63%;
  }

  .certcontainer {
    height: 500px;
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

    .certimg {
      width: 55px;
      top: 5%;
      left: 65%;
    }

    .certcontainer {
      height: 380px;
    }

    .cert {
      height: 240px;
    }
  }

  @media screen and (max-width:768px) {
    .certtext {
      font-size: 20px;
    }

    .certcontainer {
      padding: 12px 0;
      height: 250px;
    }

    .certimg {
      width: 50px;
      top: 2%;
      left: 66%;
    }

    .cert {
      height: 184px;
    }
  }

  @media screen and (max-width:576px) {
    .certtext {
      font-size: 18px;
    }

    .certimg {
      left: 69%;
    }

    .cert {
      height: 136px;
    }
  }

  @media screen and (max-width:410px) {
    .certimg {
     display: none;
      
    }

    .cert {
      height: 98px;
    }

    .certcontainer {
      height: 201px;
    }
  }
}
</style>
