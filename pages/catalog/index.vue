<template>
  <div class="container">
    <h1>каталог продукции</h1>    
    <div v-for="type of catalogStore.types" :key="type.id">
        <h2>{{ type.name }}</h2>
        <template v-if="type.out.length">
            <div class="catalogcontainer2">
            <div v-for="out_id of type.out" :key="out_id">
            <h2>{{ catalogStore.out.find(el=>el.id==out_id)?.name }}</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr;">
              <NuxtLink style="border: 1px solid black; width: 285px;height: 68px; border-radius: 5px; text-align: center; padding: 7px;margin: 10px;font-size: 24px;" v-for="el of catalogStore.catalog.filter(el=>el.out_id==out_id && el.type_id==type.id)" :key="el.id" :to="`/catalog/${translit(el.name)}`">{{ el.name }}</NuxtLink>
            </div>
          </div>
        </div>
        </template>
        <template v-else>
          <div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;justify-content: center; font-size: 24px; padding-bottom: 30px;">
              <NuxtLink style="border: 1px solid black; width: 285px; height: 68px; border-radius: 5px; text-align: center; padding: 7px; margin: 10px;" v-for="el of catalogStore.catalog.filter(el=>el.type_id==type.id)" :key="el.id" :to="`/catalog/${translit(el.name)}`">{{ el.name }}</NuxtLink>
            </div>
          </div>
        </template>
    </div>
  </div>
</template>

<script setup lang="ts">

const catalogStore = useCatalog()

function translit(word:string){
	var answer = '';
	var converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
  } as Record<string,string>
 
	for (var i = 0; i < word.length; ++i ) {
		if (converter[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}
    answer = answer.trim().replaceAll(' ','_').toLocaleLowerCase()
	return answer;
}

</script>

<style scoped>
h1 {  
  text-transform: uppercase;
  font-size: 40px;
}
h2 {
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
</style>