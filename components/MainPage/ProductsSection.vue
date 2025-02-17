<template>
  <section>
    <div class="prod">
      <p class="textprod">Наша экспертиза в обработке металла обеспечивает не только точность и качество, но и
        экономическую
        эффективность для каждого проекта: от плазменной резки до сложных сварочных работ. Наше производство
        гарантирует снижение затрат и повышение долговечности изделий, позволяя Вам успешно реализовывать
        самые амбициозные задачи.</p>
      <NuxtLink to="/catalog" class="seeprod">Каталог продукции<img src="/public/img/apper100.webp" alt="apper"
          class="apper"></NuxtLink>
      <a href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ"
        class="seeprod">Экскурсия на производство <img src="/public/img/exc100.webp" alt="exc" class="exc"
          target="_blank"></a>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style>
.prod {
  display: flex;
  gap: 22px;
  margin: 30px;
  position: relative;
}

.textprod {
  width: 640px;
  font-size: 24px;
  text-align: center;
  gap: 10px;
  padding: 20px;
  background: linear-gradient(60deg,
      black 0%,
      rgb(95, 90, 90) 80%);
  color: white;
}

.seeprod {
  width: 640px;
  background-color: rgb(30, 33, 61);
  color: white;
  font-size: 24px;
  text-align: center;
  padding: 10px 0;
  text-transform: uppercase;
  padding-top: 20px;
}

.apper {
  position: absolute;
  left: 47%;
  top: 33%;
  z-index: 1;
}

.exc {
  position: absolute;
  right: 14%;
  top: 31%;
  z-index: 1;
}
</style>