<template>
  <section>
    <div class="containermain">
      <!-- <div class="video">
        <video autoplay muted loop id="myVideo" src="/public/video/Crystall1.mp4"></video>
      </div> -->
      <h1 style="padding: 50px 0; text-align: center;color: white;">17 лет производим опоры для трубопроводов</h1>
      <strong class="heading">Наличие собственного конструкторского отдела.Изготовление опор по чертежам заказчика.</strong>
      <div style="padding: 20px;"></div>
      <div class="text">Количество выпущенной
        продукции <span class="num">5</span><span class="num">4</span><span class="num">9</span><span
          class="num">4</span><span class="num">3</span><span class="num">9</span><span class="num">1</span><span
          class="num">2</span><span class="num">3</span>
      </div>
      <div style="padding: 72px;"></div>
      <div class="allcontainer">
        <div class="cardcontainer">
          <div>Выпускаем более ста видов опор<button class="butcontainer">Подробнее</button></div>
        </div>
        <div class="cardcontainer">
          <div>Реализованные проекты<button class="butcontainer">Подробнее</button></div>
        </div>
        <div class="cardcontainer">
          <div>Наши преимущества<button class="butcontainer">Подробнее</button></div>
        </div>
        <div class="cardcontainer">
          <div>Наши сертификаты<button class="butcontainer">Подробнее</button></div>
        </div>
        <div class="cardcontainer">
          <div>Фотографии завода<button class="butcontainer">Подробнее</button></div>
        </div>
      </div>
      <div style="padding: 26px;"></div>
      <!-- <div class="text">Продукция, выпускаемая заводом, соответствует отравслевым стандартам и нормам качества.</div> -->
      <!-- <div class="production">Экскурсия на производство<button class="butcontainer">Смотреть на<img
            src="/public/img/rutubecircle.webp" alt="rutube" style="width: 64px; padding: 5px;"></button></div> -->
    </div>
    <div style="padding: 50px;"></div>
  </section>
</template>


<script></script>


<style scoped>
.text {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 82px;
  background-color: rgba(250, 250, 250, 0.7);
  padding: 28px;
  border-radius: 10px;
}

.num {
  border: 2px solid black;
  padding: 2px 10px;
  color: black;
}

.cardcontainer {
  font-size: 18px;
  border-radius: 10px;
  width: 186px;
  height: 126px;
  display: flex;
  align-items: center;
  background: rgba(56, 52, 52, 0.5);
  color: white;
  padding: 0 12px;
}

.butcontainer {
  border: 2px solid white;
  padding: 10px 16px;
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.allcontainer {
  display: flex;
  justify-content: center;
  gap: 45px;
}

.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.video {
  position: fixed;
  right: 0;
  bottom: 0;
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