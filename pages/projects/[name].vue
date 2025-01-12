<template> 

  <!-- <div class="view">
    <div>
      <p class="projectname">{{ el?.name }}</p>
      <div class="infoproject">
        <p class="projecttype">{{ el?.projecttype }}</p>
        <p>{{ el?.projectname }}</p>
      </div>
      <div class="infoproject">
        <p class="projecttype">{{ el?.year }}</p>
        <p>{{ el?.yearname }}</p>
      </div>
      <div class="infoproject">
        <p class="projecttype">{{ el?.enduser }}</p>
        <p>{{ el?.endusername }}</p>
      </div>
      <p class="projecttype">{{ el?.briefinfo }}</p>
      <p class="info">{{ el?.info }}</p>
    </div>
  </div> -->

</template>

<script setup lang="ts">

const route1 = useRoute()

const projectsStore = useProjects()

const el = projectsStore .projects.find(el => translit(el.name) == route1.params.name)//разобраться

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
}

.projectname {
  font-size: 27px;
  font-weight: bold;
  padding-bottom: 20px;
}

.infoproject {
  display: flex;
  gap: 12px;
  padding-bottom: 14px;
}

.projecttype {
  font-weight: bold;
  padding-bottom: 10px;
}

.info {
  display: flex;
  gap: 40px;
  padding-bottom: 30px;
}

.view {
  margin: 0 120px;
  display: flex;
  padding: 22px 22px 0 22px;
  margin-bottom: 20px;
  box-shadow: 1px 0px 5px -1px rgba(34, 60, 80, 0.2);
}
</style>