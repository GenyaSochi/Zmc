<template>
  <div class="cont">
    <h1 class="h1_name">каталог продукции</h1>
    
    <div v-for="type of types" :key="type.id" class="type-container">
      <h2 class="h2_name">{{ type.name }}</h2>
      
      <template v-if="type?.outs?.length">
        <div class="outs-container">
          <div v-for="out of type.outs" :key="out.id" class="out-container">
            <h3 class="h3_name">{{ out.name }}</h3>
            <div class="products-grid">
              <NuxtLink 
                v-for="el of products?.filter((el: any) => el.out_id == out.id && el.type_id == type.id)" 
                :key="el.title_en" 
                :to="`/catalog/${el.title_en}`" 
                class="product-link"
              >
                {{ el.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </template>
      
      <template v-else>
        <div class="products-grid">
          <NuxtLink 
            v-for="el of products?.filter((el: any) => el.type_id == type.id)" 
            :key="el.title_en" 
            :to="`/catalog/${el.title_en}`" 
            class="product-link"
          >
            {{ el.name }}
          </NuxtLink>
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
.cont {
  padding: 0 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.h1_name {
  padding-top: 30px;
  text-transform: uppercase;
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.type-container {
  margin-bottom: 50px;
}

.h2_name {
  text-align: center;
  font-size: 28px;
  padding: 20px 0;
  font-weight: 600;
  color: rgb(30, 33, 61);
  border-bottom: 2px solid #eee;
  margin-bottom: 30px;
}

.h3_name {
  text-align: center;
  font-size: 24px;
  padding: 15px 0;
  font-weight: 500;
  color: #555;
  margin-bottom: 20px;
}

.outs-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 30px;
}

.out-container {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  justify-items: center;
}

.product-link {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgb(30, 33, 61);
  background-color: white;
  color: rgb(30, 33, 61);
  width: 100%;
  min-height: 70px;
  border-radius: 8px;
  padding: 12px 15px;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  word-break: break-word;
}

.product-link:hover {
  background-color: rgb(30, 33, 61);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(30, 33, 61, 0.3);
}

@media screen and (max-width: 1200px) {
  .cont {
    padding: 0 30px;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
}

@media screen and (max-width: 992px) {
  .h1_name {
    font-size: 30px;
    margin-bottom: 30px;
  }
  
  .h2_name {
    font-size: 26px;
  }
  
  .h3_name {
    font-size: 22px;
  }
  
  .outs-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .out-container {
    padding: 15px;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }
  
  .product-link {
    font-size: 16px;
    min-height: 60px;
    padding: 10px 12px;
  }
}

@media screen and (max-width: 768px) {
  .cont {
    padding: 0 20px;
  }
  
  .h1_name {
    font-size: 28px;
    padding-top: 20px;
  }
  
  .h2_name {
    font-size: 24px;
    padding: 15px 0;
  }
  
  .h3_name {
    font-size: 20px;
  }
  
  .type-container {
    margin-bottom: 40px;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}

@media screen and (max-width: 576px) {
  .cont {
    padding: 0 15px;
  }
  
  .h1_name {
    font-size: 24px;
    margin-bottom: 25px;
  }
  
  .h2_name {
    font-size: 22px;
  }
  
  .h3_name {
    font-size: 18px;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }
  
  .product-link {
    font-size: 15px;
    min-height: 55px;
    padding: 8px 10px;
    border-width: 1px;
  }
  
  .out-container {
    padding: 12px;
  }
}

@media screen and (max-width: 480px) {
  .h1_name {
    font-size: 22px;
  }
  
  .h2_name {
    font-size: 20px;
  }
  
  .h3_name {
    font-size: 17px;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .product-link {
    max-width: 280px;
    margin: 0 auto;
  }
  
  .outs-container {
    gap: 20px;
  }
}

@media screen and (max-width: 360px) {
  .cont {
    padding: 0 10px;
  }
  
  .h1_name {
    font-size: 20px;
  }
  
  .h2_name {
    font-size: 18px;
  }
  
  .product-link {
    font-size: 14px;
    min-height: 50px;
  }
}
</style>