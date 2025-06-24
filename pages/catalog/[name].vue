<template>
	<div class="catalogall">
		<NuxtLink to="/catalog" class="buttonback">Вернуться назад</NuxtLink>
		<div class="catalog">
			<NuxtImg style="filter: grayscale(1);" sizes="300px" :src="data?.img" :alt="data?.name"></NuxtImg>
			<p class="opora">{{ data?.name }}</p>
		</div>	
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
if (data.value?.html) {
	data.value.html = data.value?.html.split('<table').join('<div class="tablescroll"><table')
	data.value.html = data.value?.html.split('</table>').join('</table></div>')
}
const popup = ref(false)
</script>

<style>
.catalogall {
	padding: 0 40px 0 40px;
}

.opora {
	font-size: 30px;		
}
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
    justify-content: flex-start;
	align-items: center;
	gap: 200px;
}

.titleproduct {
	font-family: 'Montserrat', medium;
	font-size: 26px;
	padding: 12px 0 30px 0;
	}


.catalog {
	display: flex;
	align-items: center;
	gap: 82px;	
}

  @media screen and (max-width:1366px) {
	.buttonback {
		font-size: 24px;
	}
	.detailet {
		font-size: 24px;
	}
	.titleproduct {
		font-size: 24px;
	}
	.buttons {
		font-size: 24px;
	}
  }
   @media screen and (max-width:992px) {
	.buttonback {
		font-size: 22px;
	}
	.detailet {
		font-size: 22px;
	}
	.titleproduct {
		font-size: 22px;
	}
	.buttons {
		font-size: 22px;
	}
  }
  
   @media screen and (max-width:768px) {
	.buttonback {
		font-size: 20px;
	}
	.detailet {
		font-size: 20px;
	}
	.titleproduct {
		font-size: 20px;
	}
	.buttons {
		font-size: 20px;
		width: 272px;
	}
	.detailet {
		gap: 158px;
	}

  }
   @media screen and (max-width:576px) {
	.buttons {
		width: 234px;
	}
	.detailet {
		font-size: 18px;
		gap: 30px;
	}
	p {
		font-size: 20px;
	}

  }
   @media screen and (max-width:410px) {
	.catalog {
		justify-content: flex-end;
		gap: 57px;
		gap: 2px;
    	flex-direction: column-reverse;
		font-size: 32px;
		}
	
	.buttonback {
		width: 210px;
		margin: 20px 0 10px 40px;
	}
	.detailet {
		flex-direction: column;
		flex-direction: column-reverse;
		gap: 10px;
	}
	.titleproduct {
		padding: 12px 0 17px 0;	
	}
	.catalogall {
		padding: 0 0 0 0;
		text-align: center;
	}
	table, th, td {
		font-size: 16px;			
	}
	
	img {
		width: 200px;
	}
}
   @media screen and (max-width:320px) {
	table, th, td {
		font-size: 12px;		
	}

	.buttonback {
		margin: 20px 0 10px 60px;
	}
  }
</style>