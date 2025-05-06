<template>
  <section>
    <h2 class="addresscont">где мы находимся</h2>
    <div>
      <ClientOnly>
        <div class="card">
          <a href="https://yandex.ru/maps/11214/ozersk/?utm_medium=mapframe&utm_source=maps" class="map_oz">Озёрск</a>
          <a href="https://yandex.ru/maps/11214/ozersk/?from=mapframe&ll=60.725401%2C55.763619&mode=usermaps&source=mapframe&um=constructor%3A2d85f1366eca4cae667da78986b84a6bfe6739faacd5d3f424e1c7bb7c8cb947&utm_medium=mapframe&utm_source=maps&z=16.52"
            class="map_yandex">Яндекс Карты — транспорт, навигация, поиск
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
.map_oz {
  color: #eee;
  font-size: 12px;
  position: absolute;
  top: 0px;
}

.map_yandex {
  color: #eee;
  font-size: 12px;
  position: absolute;
  top: 14px;
}

h2 {
  text-align: center;
}

.addresscont {
  text-transform: uppercase;
  font-size: 34px;
  padding: 30px 0 20px 0;
}

.card {
  position: relative;
  overflow: hidden;
  padding: 0 120px;
}

@media screen and (max-width:1600px) {
  .addresscont {
    font-size: 30px;
  }

  .card {
    padding: 0 120px 30px 120px;
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
    padding: 15px 0 0px 0;
  }

  .card {
    padding: 15px 30px;
  }

  iframe {
    height: 400px;
  }
}

@media screen and (max-width:768px) {
  .addresscont {
    font-size: 20px;
    padding: 10px 0 0 0;
  }

  iframe {
    height: 340px;
  }

  .card {
    padding: 15px 20px 20px 20px;
  }
}


@media screen and (max-width:576px) {
  .addresscont {
    font-size: 18px;
    padding: 10px 0 0 0;
  }

  iframe {
    height: 300px;
  }
}
</style>