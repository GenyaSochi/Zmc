<template>
  <div class="container">
    <h1 class="h1">Проекты компании</h1>
    <div class="view"
      v-for="project of projectsStore.projects" :key="project.id">
      <h2 class="h2">
        {{project.name}}
      </h2>
      <div class="projectinfo" style="justify-content: space-between;">
        <div>
          <div class="projectinfo">
            <p class="heading">Вид продукции</p>
            <p>{{ project.project }}</p>
          </div>
          <div class="projectinfo">
            <p class="heading">Объем</p>
            <p>{{ project.quantity }}</p>
          </div>
          <div class="projectinfo">
            <p class="heading">Год</p>
            <p>{{ project.year }}</p>
          </div>
          <div class="projectinfo">
            <p class="heading">Конечный потребитель</p>
            <p>{{ project.enduser }}</p>
          </div>
        </div>
        <NuxtImg :src="project.img" :alt="project.project" sizes="520px" class="imgstile"></NuxtImg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projectsStore = useProjects()

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
.h1 {
  padding-bottom: 30px;
  font-size: 34px;
}

.h2 {
  font-size: 34px;
  margin-bottom: 60px;
}

.view {
  margin: 0 120px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 22px 22px 0 22px;
  margin-bottom: 20px;
  box-shadow: 1px 0px 6px -1px rgba(15, 23, 29, 0.2);
  height: 500px;
}


.heading {
  font-weight: bold;
}

.projectinfo {
  display: flex;
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
  width: 520px;
  object-fit: cover;
  filter: grayscale(100%) drop-shadow(2px 4px 6px black);  
}
</style>