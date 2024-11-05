<template>
  <section>
    <div class="prodj">
    <div class="viewprodj">Проекты<span>&rarr;</span></div>
    <div style="padding: 20px;"></div>
    <swiper-container>
      <swiper-slide class="prodjcontainer">  
      <div> >18 тонн</div>    
      </swiper-slide>

      <swiper-slide>
        
    <div class="prodjcontainer">
      <img src="" alt="">
      <div> >65 тонн</div>
    </div>
      </swiper-slide>
      <swiper-slide>
           
    <div class="prodjcontainer">
      <img src="" alt="">
      <div> >43 тонны</div>
    </div>
      </swiper-slide>  
    </swiper-container>



   
    <div class="prodjcontainer">
      <img src="" alt="">
      <div> >43 тонны</div>
    </div>
    <div class="prodjcontainer">
      <img src="" alt="">
      <div> >20 тонн</div>
    </div>  
    <div class="prodjcontainer">
      <img src="" alt="">
      <div> >43 тонн</div>
    </div> 
    <div class="prodjcontainer">
      <img src="" alt="">
      <div> >113 тонн</div>//массив
    </div> 
  </div>
  </section>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
register()
</script>

<style scoped>

.prodj {
  display: flex;
}
.viewprodj {
  background-color: white;
  padding: 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 326px;
  height: 80px;
  margin-left: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.prodjcontainer {
  background-color: white;
  padding: 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(250, 250, 250, 0.7);
  width: 326px;
  height: 80px;
  margin-left: 42px;
}
</style>