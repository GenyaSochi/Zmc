<template>
  <h1 class="h1">Проекты компании</h1>
  <div class="view">
    <div v-for="el of projects" :key="el.id">
      <p class="projectname">{{ el.name}}</p>
      <div class="infoproject">
        <p class="projecttype">{{ el.projecttype }}</p>
        <p>{{ el.projectname }}</p>
      </div>
      <div class="infoproject">
        <p class="projecttype">{{ el.year }}</p>
        <p>{{ el.yearname }}</p>
      </div>
      <div class="infoproject">
        <p class="projecttype">{{ el.enduser }}</p>
        <p>{{ el.endusername }}</p>
      </div>  
        <p class="projecttype">{{ el.briefinfo }}</p>
        <p class="info">{{ el.info }}</p>        
      </div>
      <!-- <div>
        <img src="/public/img/izp.webp" width="528px">
      </div> -->
  </div>
</template>

<script setup lang="ts">
const projects = [
  {id: 1, name: 'Иркутский завод полимеров', projecttype: 'Вид продукции', projectname: 'Опоры трубопроводов', year: 'Год', yearname:'2022', enduser: 'Конечный потребитель', endusername:' Иркутский завод полимеров', briefinfo:'Краткая информация', info: 'ЗМК Урал принял участие в строительстве первого в Восточной Сибири завода по выпуску полимеров из этана - Иркутский Завод Полимеров (ИЗП), в части производства и поставки опор трубопроводов. К строительству ИЗП привлечена японская инжиниринговая компания Toyo Engineering Corporation, которая отвечает за проектирование и поставку оборудования и материалов. При строительстве ИЗП будет установлено более 1,1 тыс единиц оборудования, которое произведено лидерами мировой машиностроительной промышленности — компаниями в России, Китае, Корее, Японии.', img:'/img/izp.webp'},
  // {id: 2, name:'Опоры по чертежам заказчика', projecttype:'Вид продукции', projectname:'Опоры газохода', year:'Год', yearname:'2022',enduser:'Конечный потребитель', endusername:'ООО "ОЗНО"', briefinfo:'Краткая информация', info:'Нестандартные опоры диаметром от 1113 до 2226 мм изготовлены по чертежам заказчика.'},
  // {id: 3, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 4, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 5, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 6, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 7, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 8, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 9, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 10, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 11, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 12, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 13, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 14, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 15, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 16, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 17, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 18, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 19, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 20, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},
  // {id: 21, name:'', projecttype:'Вид продукции', projectname:'', year:'Год', yearname:'',enduser:'Конечный потребитель', endusername:'', briefinfo:'Краткая информация', info:''},  
]
</script>

<style scoped>
.h1 {
  padding-bottom: 30px;
}
.projectname {
  font-size: 27px;
  font-weight: bold;
  padding-bottom: 20px;  
}
.infoproject {
  display: flex;
  gap: 12px;
  padding-bottom: 14px;
}
.projecttype {
  font-weight: bold;
  padding-bottom: 10px;
}
.info {
  display: flex;
  gap: 40px;
  padding-bottom: 30px;
}
.view {
  margin: 0 120px;
  display: flex;
}
</style>