<template>

  <h1 class="h1">Проекты компании</h1>
  <div class="o">
    <div class="view" v-for="project of data" :key="project.name">
      <h2 class="h2">
        {{ project.name }}
      </h2>
      <div class="projectinfo">
        <p class="heading">Вид продукции</p>
        <p class="hie">{{ project.project }}</p>
        <p class="heading">Объем</p>
        <p class="text">{{ project.quantity }}</p>
        <p class="heading">Год</p>
        <p class="text">{{ project.year }}</p>
        <p class="heading">Конечный потребитель</p>
        <p class="text">{{ project.enduser }}</p>
        <NuxtImg :src="project.img" :alt="project.project" sizes="520px" class="imgstile"></NuxtImg>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

// const projectsStore = useProjects()
const { data } = await useFetch('/api/projects/project')



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

<style scoped>
.text {
  font-size: 28px;
}

.hie {
  height: 54px;
  font-size: 28px;
}

.o {
  display: grid;
  align-items: stretch;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.h1 {
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 34px;
  text-shadow: 1px 0px 6px rgb(114, 114, 114);
}

.h2 {
  font-size: 34px;
  padding-bottom: 20px;
  height: 94px;
}

.view {
  padding: 22px 22px 0 22px;
  margin: 0 20px 20px 20px;
  box-shadow: 1px 0px 6px -1px rgba(15, 23, 29, 0.2);
}

.heading {
  font-weight: 600;
  font-size: 32px;
}

.projectinfo {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
}

.imginfo {
  right: 392px;
  top: 300px;
  position: absolute;
}

.imgstile {
  height: 300px;
  width: 100%;
  object-fit: cover;
  filter: grayscale(100%) drop-shadow(2px 4px 6px black);
  padding: 10px;
}


@media screen and (max-width:1600px) {
  .h1 {
    font-size: 32px;
    padding-bottom: 29px;
  }

  .h2 {
    font-size: 32px;
  }

  .heading {
    font-size: 30px;
  }

  .hie {
    height: 70px;
  }
}

@media screen and (max-width:1366px) {
  .h1 {
    font-size: 26px;
  }

  .h2 {
    font-size: 26px;
    height: 62px;
  }

  .heading {
    font-size: 26px;
  }

  .hie {
    font-size: 22px;
    height: 68px;
  }

  .text {
    font-size: 22px;
  }

}

@media screen and (max-width:992px) {
  .o {
    grid-template-columns: 1fr;
  }

  .h1 {
    font-size: 28px;
    height: 44px;
    padding-bottom: 50px;
  }

  .h2 {
    font-size: 26px;
    height: 44px;
  }

  .heading {
    font-size: 26px;
  }

  .text {
    font-size: 24px;
    height: 30px;
  }

  .hie {
    font-size: 24px;
    height: 42px;
  }

  .imgstile {
    padding: 10px 0;
  }
}

@media screen and (max-width:768px) {

  .h1 {
    font-size: 26px;
  }

  .h2 {
    font-size: 26px;
  }

  .heading {
    font-size: 24px;
  }

  .text {
    font-size: 22px;
  }

  .hie {
    font-size: 22px;
    height: 63px;
  }
}

@media screen and (max-width:576px) {

  .h1 {
    font-size: 22px;
  }

  .h2 {
    font-size: 22px;
    height: 55px;
  }

  .heading {
    font-size: 22px;
  }

  .text {
    font-size: 20px;
  }

  .hie {
    height: 42px;
    font-size: 20px;
  }
}

@media screen and (max-width:541px) {

  .hie {
    height: 61px;
  }
}

@media screen and (max-width:410px) {

  .h1 {
    font-size: 22px;
  }

  .h2 {
    font-size: 22px;
  }

  .heading {
    font-size: 20px;
  }

  .text {
    font-size: 20px;
  }

  .hie {
    height: 68px;
    font-size: 20px;
  }
}

@media screen and (max-width:386px) {
  .h2 {
    height: 82px;
  }

  .hie {
    height: 87px;
  }
}
</style>