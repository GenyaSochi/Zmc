<template>
  <section>  
    <!-- <div class="video">
      <video autoplay muted loop id="myVideo" src="/public/video/Crystall1.mp4"></video>
    </div> -->
      <h1 style="padding: 100px 0; text-align: center;color: white;">17 лет производим опоры для трубопроводов</h1>
      <strong class="heading">Наличие собственного конструкторского отдела. Изготовление опор по чертежам заказчика.</strong>    
      <h2 class="text">Количество выпущенной продукции <span class="num">5</span><span class="num">4</span><span class="num">9</span>
        <span class="num">4</span><span class="num">3</span><span class="num">9</span><span class="num">1</span>
        <span class="num">2</span><span class="num">3</span>
      </h2>   
      <div class="allcontainer">     
        <NuxtLink to="/catalog" class="cardcontainer" style="text-align: center;">Выпускаем более ста видов опор</NuxtLink>  
        <NuxtLink to="/projects" class="cardcontainer">Реализованные проекты</NuxtLink> 
        <p class="cardcontainer">Наши преимущества</p>        
        <a href="#sert" class="cardcontainer">Наши сертификаты</a>         
        <p class="cardcontainer">Фотографии завода</p>      
      </div>  
      <h2 class="text">Продукция, выпускаемая заводом, соответствует отравслевым стандартам и нормам качества.</h2>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.text {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgb(250, 250, 250);
  padding: 45px 0 60px 0; 
}

.num {
  border: 2px solid black;
  padding: 2px 10px;
  color: black;
}

.cardcontainer {
  font-size: 22px;
  border-radius: 10px;
  width: 275px;
  height: 166px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(56, 52, 52, 0.5);
  color: white; 
}

.cardcontainer :hover {
  background: black;
  width: 290px;
}

.allcontainer {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 45px;
  padding: 40px 0;
}

.heading { 
  display: flex;
  justify-content: center;
  color: white;
  padding-bottom: 60px;
}

.video {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1000;
  overflow: hidden;
}

#myVideo {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1000;
  transform: translateX(-50%) translateY(-50%);
}
</style>