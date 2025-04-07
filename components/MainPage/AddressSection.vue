<template>
  <section>
    <div class="addresscont">
      <h2>где мы находимся</h2>
      <ClientOnly>
        <div class="card">
          <a href="https://yandex.ru/maps/11214/ozersk/?utm_medium=mapframe&utm_source=maps"
            style="color:#eee;font-size:12px;position:absolute;top:0px;">Озёрск</a>
          <a href="https://yandex.ru/maps/11214/ozersk/?from=mapframe&ll=60.725401%2C55.763619&mode=usermaps&source=mapframe&um=constructor%3A2d85f1366eca4cae667da78986b84a6bfe6739faacd5d3f424e1c7bb7c8cb947&utm_medium=mapframe&utm_source=maps&z=16.52"
            style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты — транспорт, навигация, поиск
            мест</a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=60.725401%2C55.763619&scroll=false&mode=usermaps&source=mapframe&um=constructor%3A2d85f1366eca4cae667da78986b84a6bfe6739faacd5d3f424e1c7bb7c8cb947&utm_source=mapframe&z=16.52"
            height="600" frameborder="1" allowfullscreen="true" style="position:relative; width: 100%;"></iframe>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
h2 {
  text-align: center;
}

.addresscont {
  text-transform: uppercase;
  font-size: 34px;
  padding-top: 30px;
}

.card {
  position: relative;
  overflow: hidden;
  padding: 0 120px;
}

@media screen and (max-width:1920px) {}

@media screen and (max-width:1600px) {
  .addresscont {
    font-size: 30px;
  }
}

@media screen and (max-width:1366px) {
  .addresscont {
    font-size: 28px;
  }
}

@media screen and (max-width:992px) {
  .addresscont {
    font-size: 24px;
    padding-top: 15px;
  }

  .card {
    padding: 15px 30px;
  }

  iframe {
    height: 400px;
  }
}

@media screen and (max-width:768px) {}

@media screen and (max-width:576px) {}
</style>