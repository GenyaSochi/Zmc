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

const swiperCont=ref(null)

const swiper = useSwiper(swiperCont,{
  slidesPerView:8,
  watchSlidesProgress: true
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
    padding: 22px 22px 60px 34px;
  }
}
@media screen and (max-width:992px) {
  .photocontainer {
    padding: 0px 22px 30px 34px;
  }
  .imgphoto {
  height: 240px;
}
}
@media screen and (max-width:768px) {
  .imgphoto {
    height: 180px;
  }
  .photocontainer {
    padding: 0px 22px 10px 34px;
  }
}
@media screen and (max-width:576px) {
  .imgphoto {
    height: 118px;
  }
  .photocontainer {
    padding: 0 10px 10px 10px;
  }
  @media screen and (max-width:410px) {
  .imgphoto {
    height: 90px;
  }
  
}
}
</style>