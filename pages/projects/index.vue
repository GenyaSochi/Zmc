<template>
  <div class="container">
    <h1 class="h1">Проекты компании</h1>
    <div class="view" v-for="project of projectsStore.projects" :key="project.id">
      <h2 class="projectname">{{ project.name }}</h2>
      <div class="projectinfo">
        <p>{{ project.projecttype }}</p>
        <p>{{ project.projectname }}</p>
      </div>
      <div class="projectinfo">
        <p>{{ project.volume }}</p>
        <p>{{ project.quantity }}</p>
      </div>
      <div class="projectinfo">
        <p>{{ project.year }}</p>
        <p>{{ project.yeardata }}</p>
      </div>
      <div class="projectinfo">
        <p>{{ project.enduser }}</p>
        <p>{{ project.endusername }}</p>
      </div>
      <div>
        <NuxtImg :src="project.img" :alt="project.projectname"></NuxtImg>
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
  font-size: 40px;
}

.projectname {
  font-size: 27px;
  padding-bottom: 20px;
}

.view {
  margin: 0 120px;
  display: flex;
  flex-direction: column;
  padding: 22px 22px 0 22px;
  margin-bottom: 20px;
  box-shadow: 1px 0px 5px -1px rgba(34, 60, 80, 0.2);
}

.heading {}

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
</style>