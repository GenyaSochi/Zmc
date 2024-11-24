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
        <NuxtLink to="/catalog">Подробнее</NuxtLink>
        <NuxtLink to="/contacts">Заказать</NuxtLink>
      </div>
    </div>
    <NuxtLink to="/catalog" class="seeprod">Смотреть нашу продукцию</NuxtLink>

  </section>
</template>

<script setup lang="ts">

const products = [
  { id: 1, titleprod: 'Опоры хомутовые, катковые, трубчатые по ОСТ 36-146-88' },
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
}

.textprod {
  text-align: center;
  font-size: 20px;
  padding: 0px 300px;
}

.infoprod {
  padding: 26px;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(218, 131, 189, 0.7);
  width: 382px;
  height: 224px;

}

.allinfo {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
  margin-left: 330px;
  gap: 20px;
  width: 1200px;

}

.nameprod {
  font-size: 24px;
  font-weight: 600;
}

.seeprod {
  width: 400px;
  height: 100px;
  border: 2px solid black;
}

.orderprod {
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
}
</style>