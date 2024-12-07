<template>
  <h1>каталог продукции</h1>
  <br>
  <div class="allcatalog">
    <div class="catalogcontainer1">
      <div>
        <div v-for="el of namecatalog1">
          <h2>{{ el.fullname }}</h2>
        </div>
        <div v-for="el of catalog1" :key="el.id">
          <h2>{{ el.name }}</h2>
        </div>
      </div>
      <div>
        <div v-for="el of namecatalog2">
          <h2>{{ el.fullname }}</h2>
        </div>
        <div v-for="el of catalog2" :key="el.id">
          <h2>{{ el.name }}</h2>
        </div>
      </div>
      <div>
        <div v-for="el of namecatalog3">
          <h2>{{ el.fullname }}</h2>
        </div>
        <div v-for="el of catalog3" :key="el.id">
          <h2>{{ el.name }}</h2>
        </div>
      </div>
    </div>


    <div style="text-align: center;" v-for="el of namecatalog4">
      <h2>{{ el.fullname }}</h2>
    </div>
   
   
      <div style="color: blue;" v-for="el of catalog41" :key="el.id">
        <h2>{{ el.short1 }}</h2>
        
         <h2>{{ el.name }}</h2>
      </div>

      <div style="color: red;" v-for="el of catalog42" :key="el.id">
        <h2>{{ el.short2 }}</h2>
        <h2>{{ el.name }}</h2>
      </div>

   
      <div style="color: green;" v-for="el of catalog43" :key="el.id">
        <h2>{{ el.short3 }}</h2>
        <h2>{{ el.name }}</h2>
      </div>
  



    <div style="text-align: center;padding-top: 30px;" v-for="el of namecatalog5">
      <h2>{{ el.fullname }}</h2>
    </div>
    <div class="catalogcontainer3">
      <div v-for="el of catalog5" :key="el.id">
        <h2>{{ el.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const namecatalog1 = [
  { id: 1, fullname: 'ОСТ 36-146-88 опоры стальных технологических трубопроводов' },
]

const catalog1 = [
  { id: 1, name: 'КП' },
  { id: 2, name: 'ТП' },
  { id: 3, name: 'ТР' },
  { id: 4, name: 'ВП' },
  { id: 5, name: 'УП' },
  { id: 6, name: 'КН' },
  { id: 7, name: 'КХ' },
  { id: 8, name: 'ТО' },
  { id: 9, name: 'ТХ' },
  { id: 10, name: 'ХБ' },
  { id: 11, name: 'ШП' },
]

const namecatalog2 = [
  { id: 2, fullname: 'ГОСТ 14911-82 (ОСТ 36-94-83): опоры трубопроводов подвижные' }
]

const catalog2 = [
  { id: 1, name: 'ОПХ1' },
  { id: 2, name: 'ОПХ2' },
  { id: 3, name: 'ОПХ3  ' },
  { id: 4, name: 'ОПП1' },
  { id: 5, name: 'ОПП2' },
  { id: 6, name: 'ОПП3' },
  { id: 7, name: 'ОПБ1' },
  { id: 8, name: 'ОПБ2' },
]

const namecatalog3 = [
  { id: 3, fullname: 'Серия 1-487-1997.00.00 для опор трубопроводов в ППУ изоляции' }
]

const catalog3 = [
  { id: 1, name: 'ППУ' },
  { id: 2, name: 'СПОк' },
  { id: 3, name: 'СПОн  ' },
  { id: 4, name: 'ФСО1' },
  { id: 5, name: 'ФСО2' },
]

const namecatalog4 = [
  { id: 1, fullname: 'Серия 5.903-13 Выпуск 6-95, 7-95, 8-95: Изделия и детали трубопроводов для тепловых сетей' },
]

const catalog41 = [
  { short1: 'Выпуск 8-95' },
  { id: 1, name: 'ТС-623.000' },
  { id: 2, name: 'ТС-624.000' },
  { id: 3, name: 'ТС-625.000' },
  { id: 4, name: 'ТС-626.00.000' },
  { id: 5, name: 'ТС-627.00.000' },
  { id: 6, name: 'ТС-628.00.000' },
  { id: 7, name: 'ТС-630.00.000' },
  { id: 8, name: 'ТС-632.00.000' },
  { id: 9, name: 'ТС-631.000' },
]
const catalog42 = [
  { short2: 'Выпуск 7-95' },
  { id: 1, name: 'ТС-659.00.00' },
  { id: 2, name: 'ТС-660.00.00' },
  { id: 3, name: 'ТС-661.00.00' },
  { id: 4, name: 'ТС-662.00.00' },
  { id: 5, name: 'ТС-663.00.00' },
  { id: 6, name: 'ТС-664.00.00' },
  { id: 7, name: 'ТС-665.00.00' },
  { id: 8, name: 'ТС-666.00.00' },
  { id: 9, name: 'ТС-667.00.00' },
  { id: 10, name: 'ТС-668.00.00' },
  { id: 11, name: 'ТС-669.00.00' },
  { id: 12, name: 'ТС-670.00.00' },
  { id: 13, name: 'ТС-671.00.00' },
]
const catalog43 = [
  { short3: 'Выпуск 6-95' },
  { id: 1, name: 'ТС-676.00.000' },
  { id: 2, name: 'ТС-677.00.000' },
  { id: 3, name: 'ТС-678.00.000' },
  { id: 4, name: 'ТС-679.00.000' },
  { id: 5, name: 'ТС-680.00.000' },
  { id: 6, name: 'ТС-681.00.000' },
  { id: 7, name: 'ТС-682.00.000' },
  { id: 8, name: 'ТС-685.00.000' },
  { id: 9, name: 'ТС-686.00.000' },
  { id: 10, name: 'ТС-687.00.000' },
  { id: 11, name: 'ТС-688.00.000' },
  { id: 12, name: 'ТС-689.00.000' },
  { id: 13, name: 'ТС-690.00.000' },
]

const namecatalog5 = [
  { id: 5, fullname: 'Серия ОСТ 34.10.610-93-34.10.745-93' }
]

const catalog5 = [
  { id: 1, name: 'ОСТ 34-10-610-93' },
  { id: 2, name: 'ОСТ 34-10-611-93' },
  { id: 3, name: 'ОСТ 34-10-612-93' },
  { id: 4, name: 'ОСТ 34-10-613-93' },
  { id: 5, name: 'ОСТ 34-10-614-93' },
  { id: 6, name: 'ОСТ 34-10-615-93' },
  { id: 7, name: 'ОСТ 34-10-616-93' },
  { id: 8, name: 'ОСТ 34-10-617-93' },
  { id: 9, name: 'ОСТ 34-10-618-93' },
  { id: 10, name: 'ОСТ 34-10-619-93' },
  { id: 11, name: 'ОСТ 34-10-620-93' },
]


</script>

<style scoped>
h1 {
  padding-top: 30px;
  text-transform: uppercase;
  font-size: 28px;
}

.allcatalog {
  height: 100%;
}

.catalogcontainer1 {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 0 30px 158px;
}

.catalogcontainer2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

}

.catalogcontainer3 {
  display: flex;
 
}
</style>