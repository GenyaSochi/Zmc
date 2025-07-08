<template>
  <div class="cont">
    <h1 class="h1_name">каталог продукции</h1>
    <div v-for="type of types" :key="type.id">

      <h2 class="h2_name">{{ type.name }}</h2>
      <template v-if="type?.outs.length">
        <div class="catalogcontainer2">
          <div v-for="out of type.outs" :key="out.id">
            <h2 class="h2_name">{{ out.name }}</h2>
            <div class="butview">
              <NuxtLink class="but"
                v-for="el of products?.filter((el: any) => el.out_id == out.id && el.type_id == type.id)"
                :key="el.title_en" :to="`/catalog/${el.title_en}`">{{ el.name }}</NuxtLink>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div>
          <div class="butall">
            <NuxtLink class="but" v-for="el of products?.filter((el: any) => el.type_id == type.id)" :key="el.title_en"
              :to="`/catalog/${el.title_en}`">{{ el.name }}</NuxtLink>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">

const { data } = await useFetch('/api/products/catalog')
const types = data.value?.types
const products = data.value?.products
</script>

<style scoped>
.butview {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.but {
  display: flex;
  border: 1px solid black;
  width: 265px;
  height: 68px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 7px;
  margin: 10px;
  font-size: 24px;
  text-align: center;
}

.butall {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 24px;
  padding-bottom: 30px;
}

.cont {
  padding: 0 40px;
}

.h1_name {
  padding-top: 30px;
  text-transform: uppercase;
  font-size: 34px;
  font-weight: bold;
}

.h2_name {
  text-align: center;
  font-size: 34px;
  padding: 30px 0 30px 0;
  font-weight: 600;
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
    font-size: 32px;
  }

  .h2_name {
    font-size: 32px;
  }

  .butview {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
}


@media screen and (max-width:1366px) {
  .h1_name {
    font-size: 30px;
  }

  .h2_name {
    font-size: 30px;
  }
}

@media screen and (max-width:992px) {
  .h1_name {
    font-size: 28px;
  }

  .h2_name {
    font-size: 28px;
  }
}

@media screen and (max-width:768px) {
  .h1_name {
    font-size: 26px;
  }

  .h2_name {
    font-size: 26px;
  }

  .but {
    width: 220px;
  }
}

@media screen and (max-width:576px) {
  .h1_name {
    font-size: 24px;
  }

  .h2_name {
    font-size: 24px;
    padding: 10px 0 10px 0;
  }

  .but {
    width: 157px;
    height: 46px;
    font-size: 18px;
  }

  .butall {
    padding-bottom: 0px;
  }

  .cont {
    padding: 0 10px;
  }
}

@media screen and (max-width:410px) {
  .h1_name {
    font-size: 22px;
  }

  .h2_name {
    font-size: 21px;
  }

  .catalogcontainer2 {
    display: grid;
    grid-template-columns: 1fr;
  }

  .but {
    width: 177px;
  }
}


@media screen and (max-width:320px) {
  .h1_name {
    font-size: 20px;
  }

  .h2_name {
    font-size: 20px;
  }

  .butall {
    padding-bottom: 10px;
  }
}
</style>