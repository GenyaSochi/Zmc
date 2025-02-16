<template>
	<div class="container">
		<NuxtLink to="/catalog" class="buttonback">Вернуться назад</NuxtLink>
		<div style="display: flex; align-items: center;gap: 82px;">
			<NuxtImg style="margin-top: 30px; filter: grayscale(1);" sizes="300px" :src="data?.img" :alt="data?.name"></NuxtImg>
			<p style="font-size: 38px; font-family: 'Montserrat', medium;">{{ data?.name }}</p>
		</div>
		<div class="detailet">подробное описание<div>
				<NuxtLink to="/cost"><button class="buttons">Расчитать</button></NuxtLink>	
				<NuxtLink to="/call"><button class="buttons">Заказать</button></NuxtLink>
			</div>
		</div>
		<div>
			<p class="titleproduct">{{ data?.title }}</p>
			<div v-html="data?.html"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { product } from '@prisma/client';
const route = useRoute()

// const catalogStore = useCatalog()
const { data } = await useFetch<product|null>(`/api/products/${route.params.name}`)

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