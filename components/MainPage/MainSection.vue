<template>
  <section>
    <div class="video">
      <video autoplay muted id="myVideo" src="/public/video/start.mp4"></video>
    </div>

    <div class="digits">
      <h2>Количество выпущенной продукции</h2>
      <span v-for="(digit, index) in digits" :key="index" class="num">{{ digit }}</span>
    </div>

    <div class="allcontainer">
      <NuxtLink to="/catalog" class="cardcontainer">Выпускаем более ста видов опор</NuxtLink>
      <NuxtLink to="/projects" class="cardcontainer">Реализованные проекты</NuxtLink>
      <a href="#advant" class="cardcontainer">Наши преимущества</a>
      <a href="#cert" class="cardcontainer">Наши сертификаты</a>
      <a href="#photo" class="cardcontainer">Фотографии завода</a>
    </div>
    <div class="digitsprod">
      <p class="text">17 лет производим опоры для трубопроводов</p>
      <p class="text">Продукция, выпускаемая заводом, соответствует отравслевым стандартам и нормам качества</p>
      <p class="text">Наличие собственного конструкторского отдела</p>
      <p class="text">Изготовление опор по чертежам заказчика</p>
    </div>
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
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(90deg,
      rgb(14, 13, 13)39%,
      rgb(30, 33, 61)96%);
  font-weight: 600;
  color: white;
  text-shadow: 0px 0px 2px #f6f6f6;
  padding: 44px 0;
  gap: 10px;
  box-shadow: 2px 2px 12px rgb(30, 33, 61);
}

.digitsprod {
  font-size: 22px;
  height: 158px;
  padding: 20px;
  background: linear-gradient(90deg,
      rgb(14, 13, 13)39%,
      rgb(30, 33, 61) 96%);
  color: white;
  text-align: center;
  font-weight: 600;
  box-shadow: 2px 2px 14px rgb(30, 33, 61);
  text-shadow: 0px 0px 2px #f6f6f6;
}

.h1view {
  text-align: center;
  color: black;
  padding-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
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
  width: 100%;
  height: 166px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-clip: text;
  color: rgb(30, 33, 61);
  text-align: center;
  font-weight: 700;
  box-shadow: 2px 2px 14px rgb(30, 33, 61);
}

.cardcontainer:hover {
  box-shadow: 4px 4px 20px rgb(30, 33, 61);
  transition: box-shadow 0.5s ease-in-out;
  /* transform: scale(1);  */
}

.text {
  font-size: 22px;
}

.allcontainer {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 45px;
  background-color: white;
  padding: 80px 20px;
  animation: cards cubic-bezier(.04, 1.01, 1, -1.07) infinite 5s;
}

.heading {
  text-align: center;
  color: black;
  padding-bottom: 5px;
  font-size: 22px;
  font-weight: 500;
}

.heading1 {
  text-align: center;
  color: black;
  padding-bottom: 300px;
  font-size: 22px;
  font-weight: 500;
}

.video {
  height: 442px;
  z-index: -1000;
  overflow: hidden;
}

#myVideo {
  position: absolute;
  top: 80px;
  width: 100%;
  z-index: -1000;
}

@media screen and (max-width:1600px) {

  .h1view {
    font-size: 22px;
  }

  .heading {
    font-size: 22px;
  }

  .heading1 {
    padding-bottom: 300px;
  }

  .digits {
    font-size: 20px;
    gap: 10px;
    padding: 60px 0;
  }

  .num {
    padding-top: 5px;
    height: 42px;
    width: 46px;
  }

  .allcontainer {
    padding: 60px 20px;
  }

  .video {
    height: 410px;
  }
}

@media screen and (max-width:1366px) {
  .h1view {
    font-size: 20px;
  }

  .heading {
    font-size: 20px;
  }

  .heading1 {
    font-size: 20px;
    padding-bottom: 275px;
  }

  .digits {
    font-size: 20px;
    gap: 10px;
    padding: 43px 0;
  }

  .digitsprod {
    height: 149px;
    padding: 20px;
  }

  .num {
    padding-top: 6px;
  }

  .allcontainer {
    padding: 56px 20px;
  }

  .cardcontainer {
    font-size: 20px;
    height: 162px;
  }
}

@media screen and (max-width:992px) {
  .h1view {
    font-size: 18px;
    padding-bottom: 139px;
  }

  .heading {
    font-size: 18px;
  }

  .heading1 {
    font-size: 18px;
    padding-bottom: 115px;
  }

  .video {
    height: 300px;
  }

  .digits {
    font-size: 20px;
    gap: 10px;
    padding: 34px 0;
  }

  .num {
    padding-top: 4px;
    height: 36px;
    width: 39px;
    font-size: 20px;
  }

  .text {
    font-size: 20px;
  }

  .allcontainer {
    padding: 20px 5px;
    gap: 13px;
  }

  .cardcontainer {
    width: 100%;
    height: 130px;
    background: rgb(30, 33, 61);
    border-radius: 0;
    color: white;
    font-size: 18px;
    border-radius: 10px;
  }

  .digitsprod {
    height: 142px;
  }

}

@media screen and (max-width:768px) {

  .video {
    height: 250px;
  }

  .text {
    font-size: 18px;
  }

  .digits {
    font-size: 18px;
    gap: 8px;
    padding: 22px 0;
  }

  .num {
    height: 34px;
    width: 36px;
    font-size: 18px;
  }

  .allcontainer {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    padding: 20px 10px;
    gap: 10px;
  }

  .digitsprod {
    height: 145px;
    background: linear-gradient(65deg, rgb(14, 13, 13) 18%, rgb(30, 33, 61) 75%);
  }

  .num {
    height: 33px;
  }

  .heading {
    padding-bottom: 7px;
  }

  .heading1 {
    padding-bottom: 75px;
  }

  .h1view {
    padding-bottom: 110px;
  }
}

@media screen and (max-width:576px) {
  .video {
    height: 200px;
  }

  .heading {
    padding-bottom: 5px;
  }

  .heading1 {
    padding-bottom: 40px;
  }

  .num {
    height: 27px;
    width: 34px;
    font-size: 13px;
  }

  .digits {
    gap: 5px;
    padding: 16px 10px;
  }


  .h1view {
    padding-bottom: 88px;
    padding-top: 10px;
  }

  @media screen and (max-width:410px) {
    .video {
      height: 150px;
    }

    .h1view {
      font-size: 14px;
      padding-top: 5px;
      padding-bottom: 46px;
    }

    .heading {
      font-size: 15px;
    }

    .heading1 {
      font-size: 15px;
      padding-bottom: 10px;
    }

    .digits {
      font-size: 17px;
    }

    .num {
      padding-top: 2px;
      height: 23px;
      width: 48px;
    }

    .text {
      font-size: 17px;
    }

    .digitsprod {
      height: 186px;
    }

    .allcontainer {
      grid-template-columns: 1fr 1fr;
      font-size: 17px;
    }
  }
}
</style>