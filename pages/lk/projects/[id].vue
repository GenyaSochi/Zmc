<template>
  <AccountMenuComponent>
    <template #top>
      <h1 class="edit-proj">Редактировать проект</h1>
    </template>
  </AccountMenuComponent>
  <div class="editing-projects">
    <input type="text" v-model="project.name" >
    <div style="position: relative;">
      <label class="label" for="fileUpload"></label>
      <input class="fileInput" type="file" id="fileUpload" @change="fileChange" accept="image/*">
      <img :src="previewImage || project.img" />
    </div>
    <input type="text" v-model="project.quantity">
    <input type="text" v-model="project.year">
    <input type="text" v-model="project.enduser">
    <textarea v-model="project.description"></textarea>
    <button @click="save" class="button-save">сохранить изменения</button>
  </div>
</template>

<script setup lang="ts">
import type { project as Project } from '@prisma/client'
const router = useRoute()
const project = await $fetch<Project>('/api/projects/by_id/' + router.params.id)

definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})

let files: File[]
const previewImage = ref(null as any)

const fileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  // @ts-ignore
  files = Array.from(target.files) || [] as any[]
  if (files.length) {
    const file = files[0]
    const reader = new FileReader()
    // Чтение файла 
    reader.onload = (e) => {
      previewImage.value = e.target?.result
    }
    reader.readAsDataURL(file)
  }
}

const save = () => {
  const year = parseInt(project.year.toString())
  if (!year) {
    alert('Неверно указан год')
    return
  }
  project.project = project.name
  project.year = year
  const data = new FormData()
  if (files?.length) data.append('img', files[0])
  data.append('data', JSON.stringify(project))
  $fetch('/api/projects', { method: 'PUT', body: data })
}

</script>

<style scoped>
.editing-projects .fileInput {
  display: none;
}

.editing-projects img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.editing-projects input[type=text] {
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  display: block;
  margin: 5px 0;
  width: 100%;
}
.editing-projects textarea {
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  display: block;
  margin: 5px 0;
  width: 100%;
  height: 400px;
}

.editing-projects .label {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.editing-projects .button-save {
  border: 2px solid gray;
  padding: 10px;
  border-radius: 5px;
  margin: 40px 0;

}

.edit-proj {
  padding-bottom: 20px;
  text-align: center;
}

.editing-projects {  
  max-width: 800px;
  margin: 0 auto 30px;
}
</style>
