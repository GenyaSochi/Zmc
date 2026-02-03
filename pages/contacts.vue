<template>
  <div class="contacts-page">
    <section class="contacts-section">
      <h1 class="contacts-section__title">Контакты</h1>
      <div class="contacts-section__info">
        <p class="contacts-section__address">
          ООО "ЗМК Урал", 456783, г. Озёрск, ул. Герцена, д. 9, помещение 10
        </p>
        <p class="contacts-section__hours">по будням с 8:00 до 17:00</p>

        <div class="contacts-section__contact-block">
          <a href="tel:+73513044235" class="contacts-section__phone">+7 (351) 304-42-35</a>
          <p class="contacts-section__description">Позвоните нам</p>
        </div>

        <div class="contacts-section__contact-block">
          <a href="mailto:sales@zmkural.com" class="contacts-section__email">sales@zmkural.com</a>
          <p class="contacts-section__description">Получите расчет заказа</p>
        </div>
      </div>
    </section>

    <ClientOnly>
      <section class="map-section">
        <div class="map-container">
          <iframe
            src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=60.725401%2C55.763619&scroll=false&mode=usermaps&source=mapframe&um=constructor%3A2d85f1366eca4cae667da78986b84a6bfe6739faacd5d3f424e1c7bb7c8cb947&utm_source=mapframe&z=16.52"
            title="Карта расположения ООО 'ЗМК Урал'" height="600" frameborder="0" allowfullscreen loading="lazy"
            class="map-container__iframe"></iframe>
        </div>
      </section>
    </ClientOnly>

    <section class="requisites-section">
      <h2 class="requisites-section__title">Реквизиты компании</h2>

      <div class="requisites-list">
        <div v-for="item in companyData" :key="item.id" class="requisites-item">
          <dt class="requisites-item__title">{{ item.heading }}</dt>
          <dd class="requisites-item__value">
            <p v-if="item.res">{{ item.res }}</p>
            <p v-if="item.res1">{{ item.res1 }}</p>
            <p v-if="item.res2">{{ item.res2 }}</p>
            <p v-if="item.res3">{{ item.res3 }}</p>
            <p v-if="item.res4">{{ item.res4 }}</p>
          </dd>
        </div>
      </div>

      <a href="companydetails.pdf" class="requisites-download" target="_blank" download>
        Скачать реквизиты компании
      </a>
    </section>
  </div>
</template>

<script setup lang="ts">
interface RequisiteItem {
  id: number;
  heading: string;
  res?: string;
  res1?: string;
  res2?: string;
  res3?: string;
  res4?: string;
}

const companyData: RequisiteItem[] = [
  {
    id: 1,
    heading: 'Полное наименование',
    res: 'Общество с ограниченной ответственностью «Завод Металлоконструкций «Урал»'
  },
  {
    id: 2,
    heading: 'Сокращённое наименование',
    res: 'ООО «ЗМК Урал»'
  },
  {
    id: 3,
    heading: 'Юридический адрес',
    res: '456783, Российская Федерация, Челябинская обл., г. Озерск, ул. Герцена, д.9, помещ.10.'
  },
  {
    id: 4,
    heading: 'Почтовый адрес',
    res: '456783, Российская Федерация, Челябинская обл., г. Озерск-3, а/я 313'
  },
  {
    id: 5,
    heading: 'Телефон/факс',
    res: '8 (351) 750-06-81',
    res1: '8 (351) 304-04-60',
    res2: '8 (351) 304-33-68',
    res3: '8 (351) 304-39-13'
  },
  {
    id: 6,
    heading: 'ИНН/КПП',
    res: '7413024662/741301001'
  },
  {
    id: 7,
    heading: 'ОГРН',
    res: '1177456078250'
  },
  {
    id: 8,
    heading: 'Рассчётный счет',
    res: '40702810072000046296'
  },
  {
    id: 9,
    heading: 'Корреспондентский счет',
    res: '30101810700000000602'
  },
  {
    id: 10,
    heading: 'БИК Банка',
    res: '047501602'
  },
  {
    id: 11,
    heading: 'Банк',
    res: 'Челябинское отделение № 8597 ПАО Сбербанк'
  },
  {
    id: 12,
    heading: 'Классификаторы в статическом регистре',
    res: 'ОКТМО 75743000001',
    res1: 'ОКОПФ 12300',
    res2: 'ОКВЭД 25.11',
    res3: 'ОКАТО 75543000000',
    res4: 'ОКПО 19521517'
  },
  {
    id: 13,
    heading: 'Генеральный директор',
    res: 'Редин Андрей Викторович'
  },
  {
    id: 14,
    heading: 'Заместитель генерального директора',
    res: 'Нугаев Марат Рафкатович'
  },
];
</script>

<style scoped>
.contacts-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.contacts-section {
  margin-bottom: 40px;
}

.contacts-section__title {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
}

.contacts-section__info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contacts-section__address,
.contacts-section__hours {
  font-size: 18px;
  color: #555;
  line-height: 1.5;
}

.contacts-section__contact-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contacts-section__phone,
.contacts-section__email {
  font-size: 28px;
  font-weight: 600;
  color: #1a73e8;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contacts-section__phone:hover,
.contacts-section__email:hover {
  color: #0d47a1;
  text-decoration: underline;
}

.contacts-section__description {
  font-size: 18px;
  color: #666;
}

.map-section {
  margin-bottom: 40px;
}

.map-container {
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.map-container__iframe {
  width: 100%;
  display: block;
}

.requisites-section {
  margin-bottom: 40px;
}

.requisites-section__title {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
}

.requisites-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eaeaea;
}

.requisites-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
}

.requisites-item__title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.requisites-item__value {
  font-size: 24px;
  color: #555;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.requisites-item__value p {
  margin: 0;
}

.requisites-download {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
  margin-top: 30px;
  border: 2px solid transparent;
}

.requisites-download:hover {
  background-color: #34495e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.requisites-download:active {
  transform: translateY(0);
}

@media screen and (max-width: 1600px) {

  .contacts-section__title,
  .requisites-section__title {
    font-size: 32px;
  }

  .requisites-item {
    gap: 118px;
  }

  .requisites-download {
    width: 487px;
    font-size: 18px;
  }
}

@media screen and (max-width: 1366px) {
  .contacts-section__title {
    font-size: 27px;
  }

  .contacts-section__phone,
  .contacts-section__email {
    font-size: 24px;
  }

  .requisites-section__title {
    font-size: 28px;
  }

  .map-section {
    padding: 30px 100px;
  }

  .requisites-item__title,
  .requisites-item__value {
    font-size: 22px;
  }

  .requisites-item {
    padding: 20px 50px 30px 50px;
    gap: 80px;
  }

  .requisites-download {
    width: 412px;
    margin-left: 48px;
    font-size: 22px;
  }
}

@media screen and (max-width: 1200px) {
  .contacts-page {
    max-width: 1000px;
  }

  .requisites-item {
    gap: 60px;
  }
}

@media screen and (max-width: 992px) {
  .contacts-section__title {
    font-size: 26px;
  }

  .contacts-section__phone,
  .contacts-section__email {
    font-size: 22px;
  }

  .requisites-section__title {
    font-size: 26px;
  }

  .map-section {
    padding: 20px 65px;
  }

  .requisites-item {
    padding: 20px;
    gap: 40px;
  }

  .requisites-item__title,
  .requisites-item__value {
    font-size: 18px;
  }

  .requisites-download {
    width: 310px;
    margin-left: 14px;
    font-size: 18px;
  }
}

@media screen and (max-width: 768px) {
  .contacts-section__title {
    font-size: 26px;
  }

  .contacts-section__phone,
  .contacts-section__email {
    font-size: 20px;
  }

  .requisites-section__title {
    font-size: 26px;
  }

  .map-section {
    padding: 20px 94px;
  }

  .map-container__iframe {
    height: 400px;
  }

  .requisites-item {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .requisites-download {
    margin: 0 0 20px 0;
    width: 100%;
  }
}

@media screen and (max-width: 576px) {
  .contacts-page {
    padding: 15px;
  }

  .contacts-section__title {
    font-size: 24px;
    font-weight: 600;
  }

  .contacts-section__phone,
  .contacts-section__email {
    font-size: 20px;
    font-weight: 600;
  }

  .contacts-section__address,
  .contacts-section__hours,
  .contacts-section__description {
    font-size: 16px;
  }

  .requisites-section__title {
    font-size: 24px;
  }

  .map-section {
    padding: 20px 25px;
  }

  .map-container__iframe {
    height: 300px;
  }

  .requisites-item__title,
  .requisites-item__value {
    font-size: 16px;
  }

  .requisites-item {
    padding: 12px 0;
  }

  .requisites-download {
    font-size: 18px;
    padding: 12px;  
  }
}

@media screen and (max-width: 480px) {
  .contacts-page {
    padding: 10px;
  }

  .contacts-section__title,
  .requisites-section__title {
    font-size: 22px;
  }

  .contacts-section__phone,
  .contacts-section__email {
    font-size: 18px;
  }

  .map-section {
    padding: 15px;
  }

  .map-container__iframe {
    height: 250px;
  }
}
</style>