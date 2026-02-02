<template>
  <section class="map-section">
    <h2 class="addresscont">где мы находимся</h2>

    <div class="map-container">
      <ClientOnly>
        <div class="card">
          <div class="map-links" aria-hidden="true">
            <a href="https://yandex.ru/maps/11214/ozersk/?utm_medium=mapframe&utm_source=maps" class="map_oz">Озёрск</a>
            <a href="https://yandex.ru/maps/11214/ozersk/?from=mapframe&ll=60.725401%2C55.763619&mode=usermaps&source=mapframe&um=constructor%3A2d85f1366eca4cae667da78986b84a6bfe6739faacd5d3f424e1c7bb7c8cb947&utm_medium=mapframe&utm_source=maps&z=16.52"
              class="map_yandex">Яндекс Карты — транспорт, навигация, поиск мест</a>
          </div>

          <iframe
            src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=60.725401%2C55.763619&scroll=false&mode=usermaps&source=mapframe&um=constructor%3A2d85f1366eca4cae667da78986b84a6bfe6739faacd5d3f424e1c7bb7c8cb947&utm_source=mapframe&z=16.52"
            height="600" frameborder="0" allowfullscreen loading="lazy" :title="`Карта проезда к ЗМК Урал в Озёрске`"
            referrerpolicy="no-referrer-when-downgrade" class="map-iframe"></iframe>

          <div v-if="!isMapLoaded" class="map-fallback">
            <p>Карта временно недоступна</p>
            <a href="https://yandex.ru/maps/11214/ozersk/?ll=60.725401%2C55.763619&z=16.52" target="_blank"
              rel="noopener noreferrer" class="fallback-link">
              Открыть карту на Яндекс.Картах
            </a>
          </div>
        </div>
      </ClientOnly>
    </div>

    <div class="contact-info">
      <div class="contact-item">
        <h3 class="contact-title">Адрес:</h3>
        <p class="contact-text">г. Озёрск, Челябинская область</p>
      </div>
      <div class="contact-item">
        <h3 class="contact-title">Телефоны:</h3>
        <p class="tel">
          <a class="contact-text" href="tel:+73513044235">+7 (351) 304-42-35</a>
          <a class="contact-text" href="tel:+79000757021">+7 (900) 075-70-21</a>

        </p>
      </div>
      <div class="contact-item">
        <h3 class="contact-title">Email:</h3>
        <p class="contact-text">
          <a href="mailto:sales@zmkural.com" class="email-link">sales@zmkural.com</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isMapLoaded = ref(true)

onMounted(() => {
  const iframe = document.querySelector('.map-iframe')
  if (iframe) {
    iframe.addEventListener('load', () => {
      isMapLoaded.value = true
    })
    iframe.addEventListener('error', () => {
      isMapLoaded.value = false
    })
  }
})
</script>

<style scoped>
.map-section {
  background-color: #f9f9f9;
  padding: 40px 0;
}

.addresscont {
  text-transform: uppercase;
  font-size: 34px;
  padding: 0 0 30px 0;
  text-align: center;
  color: #333;
  font-weight: 700;
  margin: 0;
}

.map-container { 
  padding: 0 20px;
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.map-links {
  position: absolute;
  top: -100px;
  left: -100px;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
}

.map_oz,
.map_yandex {
  display: block;
  font-size: 0;
}

.map-iframe {
  width: 100%;
  height: 600px;
  border: none;
  display: block;
  border-radius: 12px;
}

.map-fallback {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}

.map-fallback p {
  font-size: 18px;
  color: #666;
  margin-bottom: 15px;
}

.fallback-link {
  display: inline-block;
  background-color: rgb(30, 33, 61);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.fallback-link:hover {
  background-color: rgb(40, 44, 80);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 33, 61, 0.2);
}

.contact-info {
  max-width: 1400px;
  margin: 40px auto 0;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.contact-item {
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}
.tel{
  display: flex;
  gap: 20px;
}
.contact-title {
  font-size: 18px;
  color: rgb(30, 33, 61);
  margin: 0 0 10px 0;
  font-weight: 600;
}

.contact-text {
  font-size: 16px;
  color: #555;
  margin: 8px 0;
  line-height: 1.5;
}

.email-link {
  color: rgb(30, 33, 61);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: rgb(40, 44, 80);
  text-decoration: underline;
}

@media screen and (max-width: 1600px) {
  .addresscont {
    font-size: 32px;
  }

  .map-iframe {
    height: 550px;
  }
}

@media screen and (max-width: 1366px) {
  .addresscont {
    font-size: 30px;
    padding-bottom: 25px;
  }

  .map-iframe {
    height: 500px;
  }

  .map-section {
    padding: 30px 0;
  }
}

@media screen and (max-width: 1200px) {
  .contact-info {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 992px) {
  .addresscont {
    font-size: 28px;
    padding-bottom: 20px;
  }

  .map-iframe {
    height: 450px;
  }

  .map-container {
    padding: 0 15px;
  }

  .contact-info {
    padding: 0 15px;
    gap: 20px;
  }

  .contact-item {
    padding: 20px;
  }
}

@media screen and (max-width: 768px) {
  .addresscont {
    font-size: 26px;
  }

  .map-iframe {
    height: 400px;
  }

  .map-section {
    padding: 25px 0;
  }

  .contact-info {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
}

@media screen and (max-width: 576px) {
  .addresscont {
    font-size: 24px;
    padding-bottom: 15px;
  }

  .map-iframe {
    height: 350px;
  }

  .map-container {
    padding: 0 10px;
  }

  .contact-info {
    padding: 0 10px;
    margin-top: 30px;
  }

  .contact-item {
    padding: 15px;
  }

  .contact-title {
    font-size: 16px;
  }

  .contact-text {
    font-size: 15px;
  }
}

@media screen and (max-width: 480px) {
  .addresscont {
    font-size: 22px;
  }

  .map-iframe {
    height: 300px;
  }

  .map-fallback p {
    font-size: 16px;
  }

  .fallback-link {
    padding: 10px 20px;
    font-size: 14px;
  }
}

@media screen and (max-width: 360px) {
  .addresscont {
    font-size: 20px;
  }

  .map-iframe {
    height: 250px;
  }

  .map-section {
    padding: 20px 0;
  }
}
</style>