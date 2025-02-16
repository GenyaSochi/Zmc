<template>
  <section>
      <div class="video">
        <video autoplay muted id="myVideo" src="/public/video/ministart.mp4"></video>
      </div>
    <h1 class="h1view">17 лет производим опоры для трубопроводов</h1>
    <p class="heading">Наличие собственного конструкторского отдела. Изготовление опор по чертежам
      заказчика.</p>
    <h2 class="digits">Количество выпущенной продукции 
      <span v-for="(digit, index) in digits" :key="index" class="num">{{ digit }}</span>
    </h2>
    <div style="background-color: white;height: 100%;"></div>
    <div class="allcontainer">
      <NuxtLink to="/catalog" class="cardcontainer" style="text-align: center;">Выпускаем более ста видов опор
      </NuxtLink>
      <NuxtLink to="/projects" class="cardcontainer">Реализованные проекты</NuxtLink>
      <a href="#advant" class="cardcontainer">Наши преимущества</a>
      <a href="#cert" class="cardcontainer">Наши сертификаты</a>
      <a href="#photo" class="cardcontainer">Фотографии завода</a>
    </div>
    <h2 class="digits">Продукция, выпускаемая заводом, соответствует отравслевым стандартам и нормам качества.</h2>
  </section>

</template>

<script setup lang="ts">

// Инициализируем массив цифр
const digits = ref([5, 4, 9, 4, 3, 9, 0, 0, 0]);

// Функция для увеличения чисел
const incrementDigits = () => {
  for (let i = digits.value.length - 1; i >= 0; i--) {
    if (digits.value[i] < 9) {
      digits.value[i]++;
      break;
    } else {
      digits.value[i] = 0;
    }
  }
};

// Запускаем интервал каждые 1000 мс
let interval: NodeJS.Timeout;
onMounted(() => {
  interval = setInterval(incrementDigits, 1000);
});

// Очищаем интервал при уничтожении компонента
onUnmounted(() => {
  clearInterval(interval);
});

</script>

<style scoped>
.digits {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 77px 0;
  background:linear-gradient(90deg,
   rgb(58, 55, 55)39%,
   rgb(194, 196, 202)96%); 
  /* background-color: rgb(56, 52, 52); */
  color: white; 
}

.h1view {
  text-align: center;
  color: black;
  padding-bottom: 20px;
}

.num {
  border: 2px solid white;
  padding-top: 9px;
  color: white;  
  height: 50px;
  width: 54px;
  text-align: center;
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
  background-color: rgb(56, 52, 52);
  color: white;
}

.allcontainer {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 45px;
  background-color: white;
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