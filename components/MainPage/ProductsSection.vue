<template>
  <section>
    <h2 class="prod">продукция</h2>
    <p class="textprod">Наша экспертиза в обработке металла обеспечивает не только точность и качество, но и
      экономическую
      эффективность для каждого проекта: от плазменной резки до сложных сварочных работ. Наше производство
      гарантирует снижение затрат и повышение долговечности изделий, позволяя Вам успешно реализовывать
      самые амбициозные задачи.</p>
    <div class="allinfo">
      <div class="infoprod" v-for="el of products" :key="el.id">
        <h3 class="nameprod">{{ el.titleprod }}</h3>      
        <div class="buttonstyle">
          <NuxtLink to="/catalog" class="linkprod">Подробнее</NuxtLink>
          <NuxtLink to="/contacts" class="linkorder">Заказать</NuxtLink>
        </div>
      </div>
    </div>
    <NuxtLink to="/catalog" class="seeprod">Каталог продукции</NuxtLink>

  </section>
</template>

<script setup lang="ts">

const products = [
  { id: 1, titleprod: 'Опоры хомутовые, катковые, трубчатые по ОСТ 36-146-88'},
  { id: 2, titleprod: 'Каркасы зданий' },
  { id: 3, titleprod: 'Опоры трубопроводов А14Б (серия 5.900-7: 4 выпуск)' },
  { id: 4, titleprod: 'Эстакады' },
  { id: 5, titleprod: 'Опоры трубопроводов скользящие (серия 4.903-10)' },
  { id: 6, titleprod: 'Стремянки СХ, СГ и ограждения ОСХ, ОСГ (серия 1.405.3-7.94)' },
  { id: 7, titleprod: 'Опоры трубопроводов неподвижные (серия 4.903-10: 4 выпуск)' },
  { id: 8, titleprod: 'Промышленные площадки и их ограждения (серия 1.405.3–7.94)' },
  { id: 9, titleprod: 'Опоры подвижные (хомутовые стальные) ОСТ 36-94-83 (ГОСТ 14911-82)' },
]
</script>

<style>
.prod {
  text-transform: uppercase;
  font-size: 40px;
  color: black;
  padding: 30px 0;
  font-family: 'Montserrat', light;
  font-size: 40px;
}

.textprod {
  text-align: center;
  font-size: 20px; 
  font-family: 'Montserrat', light;
  font-size: 24px;
}

.infoprod {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgb(56, 52, 52);
  width: 488px;
  height: 224px;
  color: white;
  font-family: 'Montserrat', light;
  font-size: 20px;
}

.allinfo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  flex-wrap: wrap;
  padding-top: 60px;
  gap: 30px;
  padding-bottom: 90px;
  margin: 0 210px;
}

.nameprod {
  font-size: 24px;
  text-align: center;
}

.seeprod {
  background-color: rgb(161, 7, 7);
  color: white;  
  font-size: 24px;
  display: block;
  text-align: center;
  margin: 2px 306px 30px 328px;
  border-radius: 5px;
  padding: 10px 0;
}

.orderprod {
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
}

.linkprod {
  border: 1px solid white;
  padding: 5px 14px;
  width: 180px;
}

.linkorder {
  border: 1px solid white;
  padding: 5px 26px;
  width: 180px;
  text-align: center;
}

.buttonstyle {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
</style>