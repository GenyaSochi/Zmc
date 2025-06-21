<template>
  <section id="cost">
    <div class="grid">
      <form class="formcost" @submit.prevent>
        <h2 class="h2cost">Получить рассчёт стоимости продукции</h2>
        <p class="workcost">по будням с 8.00 до 17.00</p> 
        <div class="allinputcost">
          <input class="inputcost" type="text" id="name" name="name" v-model="name" required placeholder="Ваше имя...">
          <input class="inputcost" type="phone" id="phone" name="phone" v-model="phone" required placeholder="+7">       
            <input type="file" id="file" name="file" @change="handleFiles" required accept=".xls, .doc, .docx, .pdf, .odt"
              class="custom-file-input">
            <button class="butcost" type="submit" @click="sendData">Отправить заявку</button>   
            <p v-if="message">{{ message }}</p>      
        </div>
        <div class="perscost" v-if="!message">
          <NuxtLink to="/privacy" class="butinfo">Нажимая на кнопку, Вы соглашаетесь на обработку персональных данных
          </NuxtLink>
        </div>
      </form>
      <div class="allswiper">
        <div class="textswiper">
          <div class="textswiper_left blur"></div>
          <div class="textswiper_right blur"></div>
          <span class="msg">услуги по металлообработке</span>
        </div>
        <swiper-container class="swiper"  ref="swiperCont" :init="true" :modules="modules" effect="cards">
          <swiper-slide v-for="card in cards" :key="card.id">{{ card.title }}</swiper-slide>
        </swiper-container>
      </div>   
    </div>
  </section>
</template>

<script setup lang="ts">
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
const modules = [EffectCards ]
const file = ref(null as any)
const target = ref(null as HTMLInputElement|null)

const name = ref('')
const phone = ref('')
const message = ref('')
const handleFiles = (event: Event ) => {
  target.value = event.target as HTMLInputElement
  // @ts-ignore
  file.value = target.value.files[0]
}

const sendData = async () => {
  const fD = new FormData()
  fD.append('zayavka', 'Заявка отправлена. Мы с Вами свяжемся в ближайшее время.')
  fD.append('name', name.value)
  fD.append('phone', phone.value)
  fD.append('file', file.value)
  const data = await $fetch<{ok:Boolean, message:string}>('/api/orders/calc', {
    method: 'POST',
    body: fD
  })
  console.log(data)
  message.value = data.message
  setTimeout(()=> {
    message.value = ''
    name.value = ''
    phone.value = ''
    if (target.value) target.value.value = ''
  }, 4000)
}


const swiperCont=ref(null)
const swiper = useSwiper(swiperCont,{
  effect: 'cards',
  grabCursor: true,
  cardsEffect: {
    rotate: true,
    perSlideOffset: 8
  },
  loop: true,
})

const cards = [
  { id: 1, title: 'Плазменная резка металла' },
  { id: 2, title: 'Рубка листового металла на гильотине' },
  { id: 3, title: 'Штамповка металла' },
  { id: 4, title: 'Вальцовка листов' },
  { id: 5, title: 'Гибка листов' },
  { id: 6, title: 'Сварочные работы любой сложности' },
  { id: 7, title: 'Пескоструйная очистка конструкций' },
  { id: 8, title: 'Изготовление продукции по индивидуальным чертежам' },
]
</script>

<style scoped>
.allswiper {
  overflow: hidden;
}

.grid {
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 0 30px 30px 30px;
}

.custom-file-input {
  font-size: 18px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
  width: 216px;
}

.swiper swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 20px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
  border-radius: 10px;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}

.custom-file-input::before {
  content: 'Выбрать файл';
  display: inline-block;
  background: rgb(30, 33, 61);
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.custom-file-input:hover::before {
  background: #0056b3;
}

.h2cost {
  text-align: center;
  padding: 30px 0;
  font-size: 20px;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
}

.allcards {
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
}

.swiper {
  width: 340px;
  height: 264px;
  overflow: visible;
  max-width: 400px;
  padding-top: 20px;
}

.swiper swiper-slide:nth-child(1n) {
  background-color: rgb(30, 33, 61);
}

.swiper swiper-slide:nth-child(2n) {
  background-color: rgb(161, 7, 7);
}

.swiper swiper-slide:nth-child(3n) {
  background-color: rgb(30, 33, 61);
}

.swiper swiper-slide:nth-child(4n) {
  background-color: rgb(47, 56, 131);
}

.swiper swiper-slide:nth-child(5n) {
  background-color: rgb(161, 7, 7);
}

.swiper swiper-slide:nth-child(6n) {
  background-color: rgb(47, 56, 131);
}

.swiper swiper-slide:nth-child(7n) {
  background-color: rgb(30, 33, 61);
}

.swiper swiper-slide:nth-child(8n) {
  background-color: rgb(161, 7, 7);
}

.textswiper {
  text-align: center;
  color: black;
  text-transform: uppercase;
  position: relative;
  margin: 0 80px;
  padding: 20px 0;
  overflow: hidden;
}

.blur {
  position: absolute;
  height: 91px;
  width: 87px;
  background-color: white;
  z-index: 1;
  filter: blur(10px);
}

.textswiper_left {
  left: -43px;
  top: -15px
}

.textswiper_right {
  right: -43px;
  top: -15px
}

.formcost {
  background: linear-gradient(90deg,
      rgb(7, 7, 7)39%,
      rgb(30, 33, 61)96%);
  color: white;
  font-size: 20px;
  padding-bottom: 30px;
  border-radius: 10px;
}

.workcost {
  font-size: 20px;
  text-align: center;
  padding: 0 48px 20px 48px;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
}

.butinfo {
  font-size: 16px;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
}

.inputcost {
  background-color: white;
  text-align: start;
  width: 216px;
  height: 48px;
  border-radius: 5px;
  font-size: 18px;
  padding: 20px;
}

.allinputcost {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  padding-left: 30px;
  padding-bottom: 25px;
}

.butcost {
  background-color: rgb(161, 7, 7);
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
  padding: 5px;
  border-radius: 5px;
  height: 43px;
  width: 215px;
  font-size: 18px;
  text-align: center;  
}

.perscost {
  padding-left: 30px;
  align-items: center;
  padding-bottom: 30px;
  gap: 10px;
}

.infocost {
  margin-left: 30px;
  font-size: 20px;
  margin-bottom: 12px;
}

.msg {
  white-space: nowrap;
  overflow: hidden;
  animation: marquee 12s linear infinite;
  display: inline-block;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
}

@keyframes marquee {
  0% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(-100%, 0);
  }
}


@media screen and (max-width:1600px) {
  .textswiper {
    padding: 0 0 30px 129px;
  }
}

@media screen and (max-width:1366px) {
  .formcost {
    height: 398px;
    border-radius: 10px;
  }

  .h2cost {
    padding: 18px 0;
    font-size: 20px;
  }

  .infocost,
  .workcost {
    font-size: 20px;
  }

  .custom-file-input,
  .butcost,
  .inputcost {
    font-size: 18px;
  }

  .textswiper {
    padding: 0 0 30px 87px;
  }

  .msg {
    font-size: 20px;
  }

  .swiper swiper-slide {
    font-size: 20px;
  }
}

@media screen and (max-width:992px) {
  .h2cost {
    font-size: 19px;
  }

  .infocost {
    font-size: 18px;
  }

  .workcost {
    font-size: 16px;
    padding: 0px 48px 12px 48px;
  }

  .inputcost {
    font-size: 14px;
    width: 214px;
    height: 33px;
  }

  .allinputcost {
    gap: 15px;
    padding-bottom: 10px;
  }

  .custom-file-input::before {
    padding: 8px 20px;
  }

  .butcost {
    font-size: 18px;
  }

  .formcost {
    margin-left: 0;
    padding-bottom: 0;
    height: 362px;
  }

  .butinfo {
    font-size: 16px;
  }

  .swiper swiper-slide {
    font-size: 19px;
    height: 200px;
  }

  .grid {
    gap: 20px;
  }

  .msg {
    font-size: 17px;
  }

  .swiper {
    height: 145px;
    width: 284px;
    padding-top: 0;
  }
}

@media screen and (max-width:768px) {
  .swiper swiper-slide {
    display: none;
  }

  .allinputcost {
    gap: 5px;
  }

  .custom-file-input {
    font-size: 17px;
    padding: 5px;
    border-radius: 8px;
  }

  .grid {
    display: flex;
    flex-direction: column-reverse;
    height: 350px;
    padding: 0 0px 10px 0px;
  }

  .formcost {
    height: 298px;
    border-radius: 0;
  }

  .h2cost {
    padding: 9px 0;
  }
  .butcost {
    font-size: 17px;
  }

}

@media screen and (max-width:576px) {
  .grid {
    height: 388px;
    padding-bottom: 10px;
  }

  .formcost {
    border-radius: 0;
    height: 100%;
  }

  .custom-file-input {
    width: 192px;
    padding: 5px;
  }

  .inputcost {
    width: 190px;
  }

  .butcost {
    width: 190px;
  }

  .textswiper {
    padding: 0;
  }

  .h2cost {
    padding: 10px 0;
    font-size: 18px;
  }

  .workcost {
    font-size: 17px;
  }

  .butinfo {
    font-size: 17px;
  }
  .perscost {
    padding-bottom: 13px;
  }

  .msg {
    font-size: 18px;
  }

  @media screen and (max-width:410px) {
    .h2cost {
      font-size: 16px;
    }
    .workcost {
      font-size: 16px;
    }
    .butcost {
      width: 100%;
      margin: 5px 0 0 2px;
    }
    .butinfo {
      font-size: 15px;
    }
    .formcost {
      height: 330px;
    }
    .grid {
      height: 100%;
      gap: 0;
    }
    .inputcost {
      width: 100%;
    }
    .custom-file-input {
      width: 100%;
    }
    .allinputcost {
      padding: 0 30px;
    }
    .swiper {
      display: none;
    }
    .perscost {
      padding-bottom: 0;
    }
  }
  @media screen and (max-width:230px) {
  .formcost {
    height: 330px;
  }
  }
}
</style>