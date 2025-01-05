<template>         
    <div class="container">
        <p class="contacts">Контакты</p>
        <p class="contactsinfo">ООО "ЗМК Урал", 456783, г. Озёрск, ул. Герцена, д. 9, помещение 10</p>
        <p class="contactsinfo1 ">по будням с 8:00 до 17:00</p>
        <div>
          <p class="contactstel">+7(351) 304-42-35</p>
          <p class="tel">Позвоните нам</p>
        </div>
        <div>
          <p class="order">sales@zmkural.com</p>
          <p>Получите расчет заказа</p>
        </div>
      </div> 
      <ClientOnly>
        <div style="position:relative;overflow:hidden; margin: 40px 0; padding: 0 120px">
          <a href="https://yandex.ru/maps/11214/ozersk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Озёрск</a>
          <a href="https://yandex.ru/maps/11214/ozersk/?from=mapframe&ll=60.725401%2C55.763619&mode=usermaps&source=mapframe&um=constructor%3A2d85f1366eca4cae667da78986b84a6bfe6739faacd5d3f424e1c7bb7c8cb947&utm_medium=mapframe&utm_source=maps&z=16.52" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты — транспорт, навигация, поиск мест</a>
          <iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=60.725401%2C55.763619&scroll=false&mode=usermaps&source=mapframe&um=constructor%3A2d85f1366eca4cae667da78986b84a6bfe6739faacd5d3f424e1c7bb7c8cb947&utm_source=mapframe&z=16.52" height="600" frameborder="1" allowfullscreen="true" style="position:relative; width: 100%;"></iframe>
        </div>
      </ClientOnly>     

      <div>
        <h1>Реквизиты компании</h1>
        <div class="rec" v-for="el of datacompany" :key="el.id">
          <p>{{ el.heading }}</p>
          <p>{{ el.res }}</p>
        </div>
        <hr>
      </div>
</template>

<script setup lang="ts">
const datacompany = [
  {id: 1, heading: 'Полное наименование', res: 'Общество с ограниченной ответственностью «Завод Металлоконструкций «Урал»'},
  {id: 2, heading: 'Сокращённое наименование', res: 'ООО «ЗМК Урал»'},
  {id: 3, heading: 'Юридический адрес', res: '456783, Российская Федерация, Челябинская обл., г. Озерск, ул. Герцена, д.9, помещ.10.'},
  {id: 4, heading: 'Почтовый адрес', res: '456783, Российская Федерация, Челябинская обл., г. Озерск-3, а/я 313'},
  {id: 5, heading: 'Телефон/факс', res: '8 (351) 750-06-81, 8 (35130) 4-04-60, 4-33-68, 4-39-13'},
  {id: 6, heading: 'ИНН/КПП', res: '7413024662/741301001'},
  {id: 7, heading: 'ОГРН', res: '1177456078250'},
  {id: 8, heading: 'ОГРН', res: '1177456078250'},
]


</script>

<style>
.contacts {
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

.tel {
  padding-bottom: 20px;
}

.order {
  font-size: 28px; 
}
.rec {
display: flex;
justify-content: space-around;
padding-top: 30px;
}
</style>