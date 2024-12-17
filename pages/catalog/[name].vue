<template>
	<div class="container">
		<NuxtLink to="/catalog" class="buttonback">Вернуться назад</NuxtLink>
		<div style="display: flex; align-items: center;gap: 82px;">
			<NuxtImg style="margin-top: 30px;" sizes="300px" :src="el?.img" :alt="el?.name"></NuxtImg>	
			<p style="font-size: 38px; font-family: 'Montserrat', medium;">{{ el?.name }}</p>			
		</div>
		<div class="detailet">подробное описание
			<div>
				<button class="buttons">Расчитать</button>
				<button class="buttons">Заказать</button>
		</div>
		</div>
		<div>
			<p class="titleproduct">{{ el?.title }}</p>
					<p>{{ el?.text }}</p>
					<div v-html="el?.table"></div>
			</div>
		</div>

</template>

<script setup lang="ts">
const route = useRoute()

const catalogStore = useCatalog()

const el = catalogStore.catalog.find(el => translit(el.name) == route.params.name)

function translit(word: string) {
	var answer = '';
	var converter = {
		'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
		'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
		'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
		'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
		'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
		'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
		'э': 'e', 'ю': 'yu', 'я': 'ya',

		'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
		'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
		'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
		'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
		'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
		'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
		'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
	} as Record<string, string>

	for (var i = 0; i < word.length; ++i) {
		if (converter[word[i]] == undefined) {
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}
	answer = answer.trim().replaceAll(' ', '_').toLocaleLowerCase()
	return answer;
}
</script>

<style>
.buttonback {
	border: 1px solid black;
	padding: 10px;
  font-family: 'Montserrat', light;
	font-size: 26px;
	border-radius: 5px;
	width: 260px;
	text-align: center;
}

.buttons {
	border: 1px solid black;
	padding: 10px;
	margin-right: 30px;
	width: 300px;
	text-align: center;
	font-family: 'Montserrat', light;
	font-size: 26px;
	border-radius: 5px;
}

.detailet {
	text-transform: uppercase;
	font-weight: bold;
	margin-top: 30px;
	font-family: 'Montserrat', light;
	font-size: 26px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.titleproduct {
	font-family: 'Montserrat', medium;
	font-size: 26px;
	padding: 12px 0 30px 0;
}
</style>