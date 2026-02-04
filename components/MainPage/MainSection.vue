<template>
  <section>
    <div class="video">
      <video autoplay muted playsinline id="myVideo" src="/video/start.mp4" type="video/mp4"></video>
    </div>

    <div class="digits">
      <h2>Количество выпущенной продукции</h2>
      <div class="allnum">
        <div class="num" v-for="(digit, index) in digits" :key="index">{{ digit }}</div>
      </div>
    </div>

    <div class="allcontainer">
      <NuxtLink to="/catalog" class="cardcontainer">Выпускаем более ста видов опор</NuxtLink>
      <NuxtLink to="/projects" class="cardcontainer">Реализованные проекты</NuxtLink>
      <a href="#advant" class="cardcontainer">Наши преимущества</a>
      <a href="#cert" class="cardcontainer">Наши сертификаты</a>
      <a href="#photo" class="cardcontainer">Фотографии завода</a>
      <a href="#cost" class="cost">Рассчитать стоимость</a>
    </div>
    <div class="digitsprod">
      <p class="text1">17 лет производим опоры для трубопроводов</p>
      <p class="text2">Продукция завода соответствует отраслевым стандартам и нормам качества</p>
      <p class="text3">Наличие собственного конструкторского отдела</p>
      <p class="text4">Изготовление опор по чертежам заказчика</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// Скрипт остается без изменений
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
  interval = setInterval(incrementDigits, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.video {
  position: relative;
  width: 100%;
  height: 756px;
  min-height: 250px;
  max-height: 450px;
  overflow: hidden;
  z-index: 1;
}

#myVideo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: -1;
}

.digits {
  font-size: 29px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(90deg,
      rgb(14, 13, 13) 39%,
      rgb(30, 33, 61) 96%);
  font-weight: 500;
  color: white;
  text-shadow: 0px 0px 2px #f6f6f6;
  padding: 44px 20px;
  gap: 20px;
  box-shadow: 2px 2px 12px rgb(30, 33, 61);
}

.allnum {
  display: flex;
  gap: 10px;
}

.num {
  border: 2px solid white;
  padding: 7px 0;
  color: white;
  height: 50px;
  width: 54px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 5px;
}

.allcontainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 80px 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.cardcontainer, .cost {
  font-size: 22px;
  border-radius: 10px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgb(30, 33, 61);
  text-shadow: 0px 0px 2px #f6f6f6;
  text-align: center;
  font-weight: 500;
  box-shadow: 2px 2px 14px rgb(30, 33, 61);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  min-height: 166px;
  text-decoration: none;
}

.cost {
  background-color: #e74c3c;
}

.cardcontainer:hover, .cost:hover {
  box-shadow: 4px 4px 20px rgb(30, 33, 61);
  transform: translateY(-5px);
}

.digitsprod {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.text1, .text3 {
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 20px;
  color: #333;
}

.text2, .text4 {
  text-align: center;
  font-size: 34px;
  color: rgb(30, 33, 61);
  padding-bottom: 30px;
  line-height: 1.4;
}

/* Адаптивность */

@media screen and (max-width: 1200px) {
  .allcontainer {
    grid-template-columns: repeat(2, 1fr);
    padding: 60px 20px;
  }
  
  .video {
    height: 540px;
    max-height: 500px;
  }
  
  .text1, .text3 {
    font-size: 36px;
  }
  
  .text2, .text4 {
    font-size: 30px;
  }
}

@media screen and (max-width: 992px) {
  .digits {
    font-size: 22px;
    padding: 30px 15px;
    gap: 15px;
  }
  
  .num {
    height: 45px;
    width: 48px;
    font-size: 20px;
    padding: 5px 0;
  }
  
  .cardcontainer, .cost {
    font-size: 20px;
    min-height: 140px;
  }
  
  .video {
    height: 486px;
    min-height: 220px;
    max-height: 380px;
  }
  
  .text1, .text3 {
    font-size: 32px;
  }
  
  .text2, .text4 {
    font-size: 26px;
  }
  
  .digitsprod {
    padding-top: 20px;
  }
}

@media screen and (max-width: 768px) {
  .allcontainer {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 40px 15px;
  }
  
  .digits {
    flex-direction: column;
    font-size: 20px;
    padding: 25px 15px;
    gap: 15px;
  }
  
  .num {
    height: 40px;
    width: 42px;
    font-size: 18px;
  }
  
  .video {
    height: 432px;
    min-height: 200px;
    max-height: 320px;
  }
  
  #myVideo {   
    object-position: center 25%;
  }
  
  .text1, .text3 {
    font-size: 28px;
  }
  
  .text2, .text4 {
    font-size: 22px;
  }
  
  .digitsprod {
    padding: 15px 15px;
  }
}

@media screen and (max-width: 576px) {
  .video {
    height: 350px;
    min-height: 180px;
    max-height: 280px;
  }
  
  #myVideo {
    object-position: center 15%;
  }
  
  .digits {
    font-size: 18px;
    padding: 20px 10px;
    gap: 12px;
  }
  
  .digits h2 {
    font-size: 20px;
    line-height: 1.3;
  }
  
  .allnum {
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .num {
    height: 35px;
    width: 38px;
    font-size: 16px;
    padding: 4px 0;
  }
  
  .cardcontainer, .cost {
    font-size: 18px;
    min-height: 100px;
    padding: 15px 8px;
    border-radius: 8px;
  }
  
  .text1, .text3 {
    font-size: 22px;
    padding-bottom: 15px;
  }
  
  .text2, .text4 {
    font-size: 18px;
    padding-bottom: 20px;
    line-height: 1.3;
  }
  
  .digitsprod {
    padding: 20px 15px;
  }
}

/* АДАПТАЦИЯ ДО 352px */
@media screen and (max-width: 352px) {
  .video {
    height: 280px;
    min-height: 150px;
    max-height: 220px;
  }
  
  #myVideo {
    object-position: center 10%;
  }
  
  .digits {
    font-size: 16px;
    padding: 15px 8px;
    gap: 10px;
  }
  
  .digits h2 {
    font-size: 18px;
    line-height: 1.2;
  }
  
  .allnum {
    gap: 4px;
  }
  
  .num {
    height: 30px;
    width: 32px;
    font-size: 14px;
    padding: 3px 0;
    border-width: 1px;
  }
  
  .allcontainer {
    padding: 30px 10px;
    gap: 12px;
  }
  
  .cardcontainer, .cost {
    font-size: 16px;
    min-height: 85px;
    padding: 12px 6px;
    border-radius: 6px;
    line-height: 1.3;
  }
  
  .text1, .text3 {
    font-size: 20px;
    padding-bottom: 12px;
  }
  
  .text2, .text4 {
    font-size: 16px;
    padding-bottom: 15px;
    line-height: 1.2;
  }
  
  .digitsprod {
    padding: 15px 10px;
  }
}

/* Дополнительная адаптация для очень маленьких экранов */
@media screen and (max-width: 320px) {
  .video {
    height: 250px;
    min-height: 140px;
    max-height: 200px;
  }
  
  .digits h2 {
    font-size: 16px;
  }
  
  .allnum {
    gap: 3px;
  }
  
  .num {
    height: 28px;
    width: 30px;
    font-size: 13px;
  }
  
  .cardcontainer, .cost {
    font-size: 15px;
    min-height: 80px;
  }
  
  .text1, .text3 {
    font-size: 18px;
  }
  
  .text2, .text4 {
    font-size: 15px;
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.num:last-child {
  animation: blink 3s infinite;
}
</style>