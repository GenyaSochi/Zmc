<template>
  <div class="projects-page container">
    <h1 class="title">Проекты компании</h1>
    <div class="projects">
      <div class="project-card" v-for="project in data" :key="project.id">
        <h2 class="project-title">
          {{ project.name }}
        </h2>
        <div class="project-details">
          <div class="detail-item">
            <span class="detail-label">Вид продукции</span>
            <span class="detail-value">{{ project.project }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Объем</span>
            <span class="detail-value">{{ project.quantity }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Год</span>
            <span class="detail-value">{{ project.year }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Конечный потребитель</span>
            <span class="detail-value">{{ project.enduser }}</span>
          </div>
          <p class="project-description">{{ project.description }}</p>
          <div class="image-container">
          <NuxtImg :src="project.img" :alt="project.project" sizes="520px" class="project-image" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
.projects-page {
  padding: 40px 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  min-height: 100vh;
}

.title {
  font-size: 34px;
  margin-bottom: 40px;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  position: relative;
  padding-bottom: 20px;
}

.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 2px;
}

.image-container {
  width: 100%;
  height: 280px; 
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-top: auto; 
  flex-shrink: 0; 
}
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: center;
  transition: filter 0.3s ease;
  filter: grayscale(100%) brightness(0.9);
}

.project-card:hover .project-image {
  filter: grayscale(0%) brightness(1);
}

.projects {
  display: block;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 20px;
}

.project-card {
  background: white;
  border-radius: 16px;
  padding: 10px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e2e8f0;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: #3b82f6;
}

.card-header {
  padding: 24px 24px 16px;
  background: linear-gradient(90deg, #1e293b, #334155);
  color: white;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.project-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  flex: 1;
  color: white;
  text-align: left;
}

.project-details {
  padding: 24px;
  flex-grow: 1;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.detail-label {
  display: block;
  font-weight: 600;
  font-size: 14px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.detail-value {
  font-size: 20px;
}

.project-description {
  font-size: 20px;
  line-height: 1.5;
  margin: 10px 0;
  text-overflow: ellipsis;
}

.project-image {
  width: 500px;
  height: 300px;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  filter: grayscale(100%) brightness(0.9);  
}

@media (max-width: 1200px) {
  .projects {
    grid-template-columns: 1fr;
    max-width: 800px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 28px;
  }

  .project-title {
    font-size: 24px;
  }

  .detail-label {
    font-size: 16px;
  }

  .detail-value {
    font-size: 18px;
  }

  .project-image {
    height: 250px;
  }
}

@media (max-width: 576px) {
  .projects-page {
    padding: 20px 15px;
  }

  .project-card {
    padding: 15px;
  }

  .project-image {
    height: 200px;
  }
}
</style>