<template>
	<div class="catalogall">
		<NuxtLink to="/catalog" class="buttonback">
			← Вернуться назад
		</NuxtLink>

		<div class="catalog">
			<div class="image-container">
				<NuxtImg sizes="(max-width: 768px) 300px, 400px" :src="data?.img" :alt="data?.name" class="product-image" />
			</div>
			<div class="product-info">
				<h1 class="opora">{{ data?.name }}</h1>
				<p class="titleproduct">{{ data?.title }}</p>
			</div>
		</div>

		<div class="detailet">
			<h2 class="section-title">подробное описание</h2>
			<button @click="popup = true" class="buttons">
				Задать вопрос о товаре
			</button>
		</div>

		<div class="description-container">
			<div v-if="data?.html" v-html="data.html"></div>
			<div v-else class="no-description">
				Описание товара отсутствует
			</div>
		</div>
	</div>

	<ModalCatalogComponent v-model="popup"></ModalCatalogComponent>
</template>

<script setup lang="ts">
import type { product } from '@prisma/client';
const route = useRoute()
const popup = ref(false)


const { data } = await useFetch<product | null>(`/api/products/${route.params.name}`)


if (data.value?.html) {
	data.value.html = data.value.html
		.split('<table')
		.join('<div class="table-responsive"><table')
		.split('</table>')
		.join('</table></div>')
}


</script>

<style scoped>
.catalogall {
	padding: 20px;
	max-width: 1200px;
	margin: 0 auto;
}

.buttonback {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	border: 2px solid rgb(30, 33, 61);
	padding: 12px 24px;
	font-family: 'Montserrat', sans-serif;
	font-size: 18px;
	border-radius: 8px;
	text-decoration: none;
	color: rgb(30, 33, 61);
	background-color: white;
	transition: all 0.3s ease;
	margin-bottom: 30px;
	max-width: 100%;
}

.buttonback:hover {
	background-color: rgb(30, 33, 61);
	color: white;
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(30, 33, 61, 0.2);
}

.catalog {
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	margin-bottom: 40px;
	align-items: flex-start;
}

.image-container {
	flex: 0 0 400px;
	max-width: 100%;
}

.product-image {
	width: 100%;
	height: auto;
	border-radius: 10px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	object-fit: cover;
	filter: grayscale(1);
}

.product-info {
	flex: 1;
	min-width: 300px;
}

.opora {
	font-size: 32px;
	font-weight: 700;
	color: #333;
	margin-bottom: 15px;
	line-height: 1.2;
}

.titleproduct {
	font-family: 'Montserrat', sans-serif;
	font-size: 20px;
	color: #555;
	line-height: 1.6;
	margin-bottom: 20px;
}

.detailet {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;
	margin-bottom: 30px;
	padding-bottom: 20px;
	border-bottom: 2px solid #eee;
}

.section-title {
	font-size: 24px;
	font-weight: 600;
	color: #333;
	text-transform: uppercase;
	margin: 0;
}

.buttons {
	border: 2px solid rgb(30, 33, 61);
	padding: 14px 28px;
	font-family: 'Montserrat', sans-serif;
	font-size: 18px;
	border-radius: 8px;
	background-color: rgb(30, 33, 61);
	color: white;
	cursor: pointer;
	transition: all 0.3s ease;
	min-width: 200px;
	white-space: nowrap;
}

.buttons:hover {
	background-color: white;
	color: rgb(30, 33, 61);
	transform: translateY(-2px);
	box-shadow: 0 4px 15px rgba(30, 33, 61, 0.3);
}

.description-container {
	padding: 30px 0;
}

.description-container :deep(*) {
	font-family: 'Montserrat', sans-serif;
	line-height: 1.6;
	color: #333;
}

.description-container :deep(h2) {
	font-size: 24px;
	margin: 25px 0 15px;
	color: rgb(30, 33, 61);
}

.description-container :deep(h3) {
	font-size: 20px;
	margin: 20px 0 10px;
	color: #444;
}

.description-container :deep(p) {
	margin-bottom: 15px;
	font-size: 20px;	
}

.description-container :deep(ul),
.description-container :deep(ol) {
	margin-bottom: 20px;
	padding-left: 20px;
}

.description-container :deep(li) {
	margin-bottom: 8px;
}


.description-container :deep(.table-responsive) {
	overflow-x: auto;
	margin: 20px 0;
	border-radius: 8px;
	border: 1px solid #ddd;
}

.description-container :deep(table) {
	width: 100%;
	border-collapse: collapse;
	min-width: 600px;
}

.description-container :deep(th) {	
	padding: 5px;
	text-align: center !important;
	border: 1px solid #ddd;
	background-color: white;	
	font-weight: 700;
}

.description-container :deep(td) {
	padding: 10px 15px;
	border: 1px solid #ddd;
}

.description-container :deep(tr:nth-child(even)) {
	color: white;
}

.description-container :deep(tr:hover) {
	background-color: #f5f5f5;
}

.no-description {
	text-align: center;
	padding: 40px;
	color: #777;
	font-style: italic;
	font-size: 18px;
	background-color: #f9f9f9;
	border-radius: 8px;
}

@media screen and (max-width: 1200px) {
	.catalogall {
		padding: 20px 30px;
	}
}

@media screen and (max-width: 992px) {
	.catalog {
		gap: 30px;
	}

	.image-container {
		flex: 0 0 350px;
	}

	.opora {
		font-size: 28px;
	}

	.section-title {
		font-size: 22px;
	}

	.buttons {
		padding: 12px 24px;
		font-size: 16px;
	}
}

@media screen and (max-width: 768px) {
	.catalogall {
		padding: 15px 20px;
	}

	.catalog {
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 25px;
	}

	.image-container {
		flex: 0 0 auto;
		width: 100%;
		max-width: 400px;
	}

	.product-info {
		width: 100%;
	}

	.opora {
		font-size: 26px;
	}

	.titleproduct {
		font-size: 18px;
	}

	.detailet {
		flex-direction: column;
		align-items: stretch;
		text-align: center;
		gap: 15px;
	}

	.section-title {
		font-size: 20px;
	}

	.buttons {
		width: 100%;
		max-width: 300px;
		margin: 0 auto;
		white-space: normal;
	}

	.buttonback {
		font-size: 16px;
		padding: 10px 20px;
	}
}

@media screen and (max-width: 576px) {
	.catalogall {
		padding: 10px 15px;
	}

	.opora {
		font-size: 24px;
	}

	.titleproduct {
		font-size: 16px;
	}

	.section-title {
		font-size: 18px;
	}

	.buttons {
		padding: 10px 20px;
		font-size: 15px;
		max-width: 100%;
	}

	.buttonback {
		font-size: 15px;
		padding: 8px 16px;
		margin-bottom: 20px;
	}

	.description-container :deep(table) {
		min-width: 500px;
		font-size: 14px;
	}

	.description-container :deep(th),
	.description-container :deep(td) {
		padding: 8px 10px;
	}
}

@media screen and (max-width: 480px) {
	.opora {
		font-size: 22px;
	}

	.section-title {
		font-size: 16px;
	}

	.buttons {
		font-size: 14px;
		padding: 8px 16px;
	}

	.buttonback {
		font-size: 14px;
	}

	.description-container :deep(table) {
		min-width: 400px;
		font-size: 13px;
	}
}
</style>