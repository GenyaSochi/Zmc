<template>
  <div class="container">
    <h1 class="h1_name">каталог продукции</h1>    
    <div v-for="type of types" :key="type.id">
        <h2 class="h2_name">{{ type.name }}</h2>
        <template v-if="type?.outs.length">
            <div class="catalogcontainer2">
            <div v-for="out of type.outs" :key="out.id">
            <h2 class="h2_name">{{ out.name }}</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr;">
              <NuxtLink style="border: 1px solid black; width: 265px;height: 68px; border-radius: 5px; text-align: center; padding: 7px;margin: 10px;font-size: 24px;" v-for="el of products?.filter((el:any)=>el.out_id==out.id && el.type_id==type.id)" :key="el.title_en" :to="`/catalog/${el.title_en}`">{{ el.name }}</NuxtLink>
            </div>
          </div>
        </div>
        </template>
        <template v-else>
          <div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;justify-content: center; font-size: 24px; padding-bottom: 30px;">
              <NuxtLink style="border: 1px solid black; width: 265px; height: 68px; border-radius: 5px; text-align: center; padding: 7px; margin: 10px;" v-for="el of products?.filter((el:any)=>el.type_id==type.id)" :key="el.title_en" :to="`/catalog/${el.title_en}`">{{ el.name }}</NuxtLink>
            </div>
          </div>
        </template>
    </div>
  </div>
</template>

<script setup lang="ts">

const {data} = await useFetch('/api/products/catalog')
const types = data.value?.types
const products = data.value?.products
</script>

<style scoped>
.h1_name { 
  padding-top: 30px; 
  text-transform: uppercase;
  font-size: 34px;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
}
.h2_name{
  text-align: center;
  font-size: 34px;
  padding: 30px 0 30px 0;
}

.catalogcontainer1 {
  display: grid;
  flex-wrap: wrap;
  justify-content: space-evenly; 
  color: red;
}

.catalogcontainer2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  
}

.catalogcontainer3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
}


@media screen and (max-width:1600px) {
  .h1_name {
    font-size: 30px;
  }
  .h2_name {
    font-size: 30px;
  }
}
</style>