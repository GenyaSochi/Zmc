<template>
  <section id="photo">
    <div class="photocontainer">
      <swiper-container ref="swiperCont" :init="true">
        <swiper-slide v-for="photo of photos" :key="photo.id">
          <NuxtImg class="imgphoto" fit="cover" sizes="205px " :src="photo.img" :alt="photo.title"></NuxtImg>
        </swiper-slide>
      </swiper-container>
    </div>

  </section>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { onMounted } from 'vue'
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

const swiperCont = ref(null)

const swiper = useSwiper(swiperCont, {
  slidesPerView: 6,
  watchSlidesProgress: true,
  breakpoints: {
    1366: {
      slidesPerView: 5
    },
    992: {
      slidesPerView: 5
    },
    768: {
      slidesPerView: 4
    },
    576: {
      slidesPerView: 3
    },
    460: {
      slidesPerView: 2
    }
  }
})

</script>

<style scoped>
.photocontainer {
  padding: 30px 56px 60px 118px;
  cursor: pointer;
}

.imgphoto {
  height: 300px;
}

@media screen and (max-width:1366px) {
  .photocontainer {
    padding: 22px 22px 60px 88px;
  }

  .imgphoto {
    height: 264px;
  }
}

@media screen and (max-width:992px) {
  .photocontainer {
    padding: 0px 22px 30px 50px;
  }

  .imgphoto {
    height: 208px;
  }
}

@media screen and (max-width:768px) {
  .imgphoto {
    height: 180px;
  }

  .photocontainer {
    padding: 0px 22px 10px 65px;
  }
}

@media screen and (max-width:576px) {
  .imgphoto {
    height: 196px;
  }

  .photocontainer {
    padding: 0 10px 10px 26px;
  }

  swiper-container {
    --swiper-theme-color: grey !important;
  }
}

@media screen and (max-width:410px) {
  .imgphoto {
    height: 190px;
    width: 130px;
  }

  .photocontainer {
    text-align: center;
    padding: 0 10px 10px 10px;
  }
  swiper-slide {
    width: 146px;
  }
}

</style>