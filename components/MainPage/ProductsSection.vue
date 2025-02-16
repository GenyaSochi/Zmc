<template>
  <section>
    <div class="prod">
      <p class="textprod">Наша экспертиза в обработке металла обеспечивает не только точность и качество, но и
        экономическую
        эффективность для каждого проекта: от плазменной резки до сложных сварочных работ. Наше производство
        гарантирует снижение затрат и повышение долговечности изделий, позволяя Вам успешно реализовывать
        самые амбициозные задачи.</p>
        <NuxtLink to="/catalog" class="seeprod">Каталог продукции</NuxtLink>
        <a href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ" class="seeprod">Экскурсия на производство</a>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style>
.prod {
display: flex;
}

.textprod {
  width: 640px;
  margin-left: 30px;
  font-size: 24px;
  display: flex;
  text-align: center;
  gap: 10px;
  padding: 20px;
  background: linear-gradient(60deg,
      black 0%,
      rgb(95, 90, 90) 80%);
  color: white;
  margin-top: 60px;
}

/* .infoprod {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  font-size: 22px;
  background-color: white;
  min-width: 520px;
  height: 224px;
  color: black;
  font-family: 'Montserrat', light;
  font-size: 20px;
  box-shadow: 1px 0px 6px -1px rgba(15, 23, 29, 0.2);
} */

/* .allinfo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  flex-wrap: wrap;
  padding-top: 70px;
  gap: 20px;
  padding-bottom: 64px;
} */
/* 
.nameprod {
  font-size: 24px;
  text-align: center;
} */

.seeprod {
  width: 640px;
  margin-left: 30px;
  background-color: rgb(161, 7, 7);
  color: white;
  font-size: 24px;
  display: block;
  text-align: center;
  padding: 10px 0;
  text-transform: uppercase;
  margin-top: 60px;
}

/* .orderprod {
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
} */
</style>