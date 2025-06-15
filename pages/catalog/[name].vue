<template>
	<div>
		<NuxtLink to="/catalog" class="buttonback">Вернуться назад</NuxtLink>
		<div class="catalog">
			<NuxtImg style="filter: grayscale(1);" sizes="300px" :src="data?.img" :alt="data?.name"></NuxtImg>
			<p style="font-size: 38px; font-family: 'Montserrat', medium;">{{ data?.name }}</p>
		</div>
		<div class="div"></div>
		<div class="detailet">подробное описание
			<button @click="popup = true" class="buttons">Задать вопрос о товаре</button>
		</div>
		<div>
			<p class="titleproduct">{{ data?.title }}</p>
			<div v-html="data?.html"></div>
		</div>
	</div>

	<ModalComponent v-model="popup"></ModalComponent>
</template>

<script setup lang="ts">
import type { product } from '@prisma/client';
const route = useRoute()

const { data } = await useFetch<product | null>(`/api/products/${route.params.name}`)
const popup = ref(false)
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
	display: block;
	margin: 30px 0;
}

.buttons {
	border: 1px solid black;
	padding: 10px;
	width: 364px;
	text-align: center;
	font-family: 'Montserrat', light;
	font-size: 26px;
	border-radius: 5px;
}

.detailet {
	text-transform: uppercase;
	font-weight: bold;
	font-family: 'Montserrat', light;
	font-size: 26px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 145px;
}

.titleproduct {
	font-family: 'Montserrat', medium;
	font-size: 26px;
	padding: 12px 0 30px 0;
}

.div {
	padding: 30px;
}

.catalog {
	display: flex;
	align-items: center;
	gap: 82px;
}
</style>