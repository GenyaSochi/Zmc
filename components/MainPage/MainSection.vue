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
      <NuxtLink to="/catalog" class="cardcontainer">Выпускаем более ста видов опор</NuxtLink>
      <NuxtLink to="/projects" class="cardcontainer">Реализованные проекты</NuxtLink>
      <a href="#advant" class="cardcontainer">Наши преимущества</a>
      <a href="#cert" class="cardcontainer">Наши сертификаты</a>
      <a href="#photo" class="cardcontainer">Фотографии завода</a>
    </div>
    <h2 class="digitsprod">Продукция, выпускаемая заводом, соответствует отравслевым стандартам и нормам качества.</h2>
  </section>
</template>

<script setup lang="ts">

// Инициализируем массив цифр
const digits = ref([5, 4, 9, 4, 3, 6, 0, 0, 0])

// Функция для увеличения чисел
const incrementDigits = () => {
  for (let i = digits.value.length - 1; i >= 0; i--) {
    if (digits.value[i] < 9) {
      digits.value[i]++
      break;
    } else {
      digits.value[i] = 0
    }
  }
}

// Запускаем интервал каждые 1000 мс
let interval: NodeJS.Timeout
onMounted(() => {
  interval = setInterval(incrementDigits, 3000)
})

// Очищаем интервал при уничтожении компонента
onUnmounted(() => {
  clearInterval(interval)
})

</script>

<style scoped>
.digits {
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;  
  text-align: center;
  background: linear-gradient(90deg,
      rgb(14, 13, 13)39%,
      rgb(30, 33, 61)96%);
  color: white;
  padding: 44px 0;
}
.digitsprod {
  font-size: 28px;
  height: 158px; 
  padding-top: 58px; 
  background: linear-gradient(90deg,
      rgb(14, 13, 13)39%,
      rgb(30, 33, 61)96%);
  color: white;
  margin-bottom: 90px;
  text-align: center;
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
  /* background: url(/img/silver1.webp); */
  background:  rgb(30, 33, 61);
  color: white;
  text-align: center;
}

.allcontainer {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 45px;
  background-color: white;
  padding: 80px 0;
}

.heading {
  text-align: center;
  color: black;
  padding-bottom: 400px;
  font-size: 22px;
}

.video {
  height: 160px;
  z-index: -1000;
  overflow: hidden;
}

#myVideo {
  position: absolute;
  top: 80px;
  width: 100%;
  z-index: -1000;
}

@media screen and (max-width:1920px) {
  .digits {   
    gap: 10px;
    padding: 60px 0;
  }

  .num {
    padding-top: 9px;
    height: 48px;
    width: 52px;
  }
}

@media screen and (max-width:1600px) {

  .h1view,
  .heading {
    font-size: 22px;
  }

  .video {
    height: 130px;
  }

  .digits {
    font-size: 20px;
    gap: 10px;
    padding: 60px 0;
  }

  .num {
    padding-top: 9px;
    height: 46px;
    width: 50px;
  }
  .allcontainer {
    padding: 60px 20px;
  }
}

@media screen and (max-width:1366px) {

  .h1view,
  .heading {
    font-size: 20px;
  }

  .video {
    height: 75px;
  }

  .heading {
    padding-bottom: 316px;
  }

  .digits {
    font-size: 18px;
    gap: 10px;
    padding: 54px 0;
  }

  .num {
    padding-top: 6px; 
  }

  .allcontainer {
    padding: 56px 20px;
  }

  .cardcontainer {
    font-size: 18px;
    height: 162px;
  }
  
}

@media screen and (max-width:992px) {
  .h1view {
    font-size: 18px;
  }

  .heading {
    padding-bottom: 210px;
    font-size: 18px;
  }

  .video {
    height: 33px;
  }

  .digits {
    font-size: 18px;
    gap: 10px;
    padding: 54px 0;
  }

  .num {
    padding-top: 5px;    
  }
  .allcontainer {
    flex-direction: column;
    padding: 20px;
    gap: 13px;
  }
.cardcontainer {
  width: 954px;
  height: 50px;
  background:  rgb(30, 33, 61);
}

}

@media screen and (max-width:768px) {

  .h1view,
  .heading {
    font-size: 17px;
  }

  .video {
    height: 48px;
  }

  .heading {
    padding-bottom: 160px;
  }
}

@media screen and (max-width:576px) {

  .h1view,
  .heading {
    font-size: 16px;
  }

  .video {
    height: 12px;
  }

  .heading {
    padding-bottom: 86px;
  }
}

@media screen and (max-width:350px) {

  .h1view,
  .heading {
    font-size: 15px;
  }

  .video {
    height: 12px;
  }

  .heading {
    padding-bottom: 33px;
  }

  .h1view {
    padding-bottom: 52px;
  }
}
</style>