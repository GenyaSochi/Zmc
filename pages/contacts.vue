<template>
  <div class="container">
    <p class="contacts">Контакты</p>
    <p class="contactsinfo">ООО "ЗМК Урал", 456783, г. Озёрск, ул. Герцена, д. 9, помещение 10</p>
    <p class="contactsinfo1 ">по будням с 8:00 до 17:00</p>
    <div>
      <p class="contactstel">+7(351) 304-42-35</p>
      <p class="info">Позвоните нам</p>
    </div>
    <div>
      <p class="mail">sales@zmkural.com</p>
      <p class="info">Получите расчет заказа</p>
    </div>
  </div>
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

  <div>
    <h1 class="reccomp">Реквизиты компании</h1>
    <div class="rec" v-for="el of datacompany" :key="el.id">
      <p class="rec_info">{{ el.heading }}</p>
      <div>
        <p class="rec_info">{{ el.res }}</p>
        <p class="rec_info">{{ el.res1 }}</p>
        <p class="rec_info">{{ el.res2 }}</p>
        <p class="rec_info">{{ el.res3 }}</p>
        <p class="rec_info">{{ el.res4 }}</p>
      </div>
    </div>
  </div>
  <a href="companydetails.pdf" class="details" target="_blank">Скачать реквизиты компании</a>
</template>

<script setup lang="ts">
const datacompany = [
  { id: 1, heading: 'Полное наименование', res: 'Общество с ограниченной ответственностью «Завод Металлоконструкций «Урал»' },
  { id: 2, heading: 'Сокращённое наименование', res: 'ООО «ЗМК Урал»' },
  { id: 3, heading: 'Юридический адрес', res: '456783, Российская Федерация, Челябинская обл., г. Озерск, ул. Герцена, д.9, помещ.10.' },
  { id: 4, heading: 'Почтовый адрес', res: '456783, Российская Федерация, Челябинская обл., г. Озерск-3, а/я 313' },
  { id: 5, heading: 'Телефон/факс', res: '8 (351) 750-06-81', res1: '8 (351) 304-04-60', res2: '8 (351) 304-33-68', res3: '8 (351) 304-39-13' },
  { id: 6, heading: 'ИНН/КПП', res: '7413024662/741301001' },
  { id: 7, heading: 'ОГРН', res: '1177456078250' },
  { id: 8, heading: 'Рассчётный счет', res: '40702810072000046296' },
  { id: 9, heading: 'Корреспондентский счет', res: '30101810700000000602' },
  { id: 10, heading: 'БИК Банка', res: '047501602' },
  { id: 11, heading: 'Банк', res: 'Челябинское отделение № 8597 ПАО Сбербанк' },
  { id: 12, heading: 'Классификаторы в статическом регистре', res: 'ОКТМО 75743000001', res1: 'ОКОПФ 12300', res2: 'ОКВЭД 25.11', res3: 'ОКАТО 75543000000', res4: 'ОКПО 19521517' },
  { id: 13, heading: 'Генеральный директор', res: 'Редин Андрей Викторович' },
  { id: 14, heading: 'Заместитель генерального директора', res: 'Нугаев Марат Рафкатович' },
]
</script>

<style scoped>
.contacts {
  padding-top: 30px;
  font-size: 34px;
}

.contactsinfo {
  font-size: 18px;
}

.contactsinfo1 {
  font-size: 18px;
  padding-bottom: 40px;
}

.contactstel {
  font-size: 28px;
}

.info {
  padding-bottom: 20px;
  font-size: 18px;
}

.mail {
  font-size: 28px;
}

.rec {
  grid-template-columns: 1fr 1fr;
  display: grid;
  gap: 118px;
  padding: 20px 100px 30px 100px;
  border-bottom: 1px solid #EAEAEA;
}

.rec_info {
  font-size: 24px;
  display: flex;
}

.reccomp {
  font-size: 34px;
  padding-bottom: 20px;
  text-shadow: 1px 0px 6px rgb(160, 158, 158);
}

.card {
  position: relative;
  overflow: hidden;
  padding: 30px 244px;
}

.details {
  background-color: rgb(56, 52, 52);
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
  color: white;
  padding: 10px;
  margin-left: 98px;
  margin-bottom: 30px;
  width: 340px;
  display: flex;
  justify-content: center;
  width: 487px;
}

@media screen and (max-width:1600px) {

  .contacts,
  .reccomp {
    font-size: 32px;
  }

  .card {
    padding: 30px 198px;
  }

  .details {
    width: 403px;
  }
}

@media screen and (max-width:1366px) {
  .contacts {
    font-size: 27px;
  }

  .contactstel,
  .order {
    font-size: 24px;
  }

  .reccomp {
    font-size: 28px;
  }

  .mail {
    font-size: 24px;
  }

  .card {
    padding: 30px 100px;
  }

  .rec_info {
    font-size: 22px;
  }

  .rec {
    padding: 20px 50px 30px 50px;
  }

  .details {
    width: 412px;
    margin-left: 48px;
    font-size: 22px;
  }
}

@media screen and (max-width:992px) {
  .contacts {
    font-size: 26px;
  }

  .contactstel,
  .order {
    font-size: 22px;
  }

  .reccomp {
    font-size: 26px;
  }

  .card {
    padding: 20px 65px;
  }

  .rec {
    padding: 20px;
  }

  .rec_info {
    justify-content: space-between;
    font-size: 18px;
  }

  .details {
    margin-left: 14px;
    font-size: 18px;
    width: 310px;
  }
}


@media screen and (max-width:768px) {
  .contacts {
    font-size: 26px;
  }

  .contactstel,
  .order {
    font-size: 20px;
  }

  .reccomp {
    font-size: 26px;
  }

  .card {
    padding: 20px 94px;
  }

  iframe {
    height: 400px;
  }
  .rec {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .details {
    margin: 0 0 20px 0;
    width: 100%;
  }
}

@media screen and (max-width:576px) {
  .contacts {
    font-size: 24px;
    font-weight: 600;
  }

  .contactstel,
  .order,
  .mail {
    font-size: 20px;
    font-weight: 600;
  }

  .reccomp {
    font-size: 24px;
  }

  .card {
    padding: 20px 25px;
  }

  iframe {
    height: 300px;
  }
}

</style>
