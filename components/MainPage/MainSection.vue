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
      <NuxtLink to="/catalog" class="support"><img src="/public/img/ohomutnoback.webp" alt="опора" width="164">
      </NuxtLink>
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

const digits = ref([5, 4, 9, 4, 3, 6, 0, 0, 0])

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

let interval: NodeJS.Timeout
onMounted(() => {
  interval = setInterval(incrementDigits, 3000)
})

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
  font-weight: 500;
  color: white;
  text-shadow: 0px 0px 2px #f6f6f6;
  padding: 44px 0;
  gap: 20px;
  box-shadow: 2px 2px 12px rgb(30, 33, 61);
}

.digitsprod {
  font-size: 22px;
  height: 143px;
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
  color: rgb(30, 33, 61);
  text-shadow: 0px 0px 2px #f6f6f6;
  text-align: center;
  font-weight: 500;
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

.support {
  display: none;
  border-radius: 10px;
  width: 100%;
  height: 166px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  animation: supp 5s infinite ease;
  overflow: hidden;
}

@keyframes supp {
  0% {
    transform: rotateY(180deg);
  }

  50% {
    transform: rotateY(140deg);
  }

  100% {
    transform: rotateY(180deg);
  }
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
    height: 310px;
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
    padding: 40px 12px;
    gap: 15px;
    overflow: hidden;
  }

  .cardcontainer {
    width: 100%;
    height: 130px;
    background: rgb(30, 33, 61);
    border-radius: 0;
    color: white;
    font-size: 18px;
    border-radius: 10px;
    font-weight: 400;
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
    height: 250px;
  }

  .digits {
    font-size: 18px;
    gap: 5px;
    padding: 30px 10px;
    font-weight: 400;
  }

  .num {
    padding-top: 4px;
    height: 36px;
    width: 40px;
    font-size: 20px;
  }

  .text {
    font-size: 20px;
  }

  .allcontainer[data-v-02b6184c] {
        grid-template-columns: 1fr 1fr 1fr;
        display: grid;
        padding: 20px 10px;
        gap: 10px;
    }

  /* .cardcontainer {
    width: 100%;
    height: 130px;
    background: rgb(30, 33, 61);
    border-radius: 0;
    color: white;
    font-size: 18px;
    border-radius: 10px;
  } */

  .digitsprod {
    height: 142px;
  }

}

@media screen and (max-width:768px) {

  .video {
    height: 174px;
  }

  .text,
  .digits {
    font-size: 16px;
  }

  .num {
    height: 34px;

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

  .support {
    display: flex;
    height: 130px;
  }

}

@media screen and (max-width:576px) {
  .video {
    height: 120px;
  }

  .heading {
    padding-bottom: 5px;
  }

  .heading1 {
    padding-bottom: 40px;
  }

  .allcontainer {
    grid-template-columns: 49% 49%;
    justify-content: space-between;
    font-size: 17px;
    padding: 10px;
  }

  .num {
    height: 26px;
    font-size: 13px;
    padding-top: 3px;
  }

  .digits {
    gap: 2px;
  }

  .h1view {
    padding-bottom: 88px;
    padding-top: 10px;
  }

  /* @media screen and (max-width:410px) {
    .video {
      height: 130px;
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
      font-size: 10px;
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
      height: 236px;
    }

    .cardcontainer {
      font-size: 16px;
    }
  } */
}
</style>