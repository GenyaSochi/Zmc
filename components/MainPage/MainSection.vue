<template>
  <section>
      <div class="video">
        <video autoplay muted id="myVideo" src="/public/video/ministart.mp4"></video>
      </div>
    <h1 class="h1view">17 лет производим опоры для трубопроводов</h1>
    <p class="heading">Наличие собственного конструкторского отдела. Изготовление опор по чертежам
      заказчика.</p>
    <h2 class="text">Количество выпущенной продукции 
      <span class="num">5</span>
      <span class="num">4</span>
      <span class="num">9</span>
      <span class="num">4</span>
      <span class="num">3</span>
      <span class="num">9</span>
      <span class="num" max="9" time="8000">0</span>
      <span class="num" max="9" time="6000">0</span>
      <span class="num" max="9" time="4000">0</span>
    </h2>
    <div class="allcontainer">
      <NuxtLink to="/catalog" class="cardcontainer" style="text-align: center;">Выпускаем более ста видов опор
      </NuxtLink>
      <NuxtLink to="/projects" class="cardcontainer">Реализованные проекты</NuxtLink>
      <a href="#advant" class="cardcontainer">Наши преимущества</a>
      <a href="#cert" class="cardcontainer">Наши сертификаты</a>
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
  padding: 77px 0;
  background-color: rgb(56, 52, 52);
  color: white;
}

.h1view {
  text-align: center;
  color: black;
  padding-bottom: 20px;
}

.num {
  border: 2px solid white;
  padding: 2px 10px;
  color: white;  
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
  padding: 122px 0 80px 0;
}

.heading {
  text-align: center;
  color: black;
  padding-bottom: 400px;
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