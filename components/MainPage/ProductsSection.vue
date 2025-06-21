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
      <a target="_blank"
        href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ"
        class="seeprod">Экскурсия на производство <img src="/public/img/exc100.webp" alt="exc" class="exc"></a>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.prod {
  display: flex;
  gap: 22px;
  padding: 30px;
  position: relative;
}

.textprod {
  flex: 1;
  font-size: 24px;
  text-align: center;
  gap: 10px;
  padding: 20px;
  background: linear-gradient(60deg,
      black 0%,
      rgb(95, 90, 90) 80%);
  color: white;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
}

.seeprod {
  flex: 1;
  background-color: rgb(30, 33, 61);
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
  color: white;
  font-size: 24px;
  text-align: center;
  padding: 10px 0;
  text-transform: uppercase;
  padding-top: 20px;
}

.apper {
  position: absolute;
  left: 48%;
  top: 33%;
  z-index: 1;
}

.exc {
  position: absolute;
  right: 14%;
  top: 31%;
  z-index: 1;
}

@media screen and (max-width:1366px) {
  .textprod {
    font-size: 19px;
  }

  .seeprod {
    font-size: 19px;
  }

  .exc {
    right: 12%;
  }

  .photocontainer {
    padding: 30px 23px 30px 37px;
  }
}

@media screen and (max-width:992px) {
  .textprod {
    font-size: 14px;
    padding: 10px;
    opacity: 0.8;
  }

  .seeprod {
    font-size: 17px;
    padding-top: 10px;
  }

  .apper {
    width: 60px;
    left: 47%;
    top: 38%;
  }

  .exc {
    width: 60px;
    right: 15%;
    top: 35%;
  }

}

@media screen and (max-width:768px) {
  .textprod {
    display: none;
  }

  img {
    display: none;
  }

  .prod {
    padding: 20px 10px;
  }
}

@media screen and (max-width:320px) {
  .prod {
    flex-direction: column;
  }
  .seeprod {
    font-size: 16px;
  }
}
</style>