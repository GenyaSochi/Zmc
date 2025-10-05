<template>
  <AccountMenuComponent>
    <template #top>
      <h1 class="edit-prod">Редактировать проект</h1>
    </template>
    <button @click="save" class="button-save">сохранить изменения</button>
  </AccountMenuComponent>
  <div style="display: flex; flex-direction: column; width: 600px;">
    <input type="text" v-model="project.name"><br>
    <input type="text" v-model="project.quantity"><br>
    <input type="text" v-model="project.year"><br>
    <input type="text" v-model="project.enduser"><br>
    <input type="text" v-model="project.description"><br>
    <div style="position: relative;">
      <label class="label" for="fileUpload"></label>
      <input class="fileInput" type="file" id="fileUpload" @change="fileChange" accept="image/*">
      <img :src="previewImage || project.img" />
    </div>
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

<style>
.fileInput {
  display: none;
}

.label {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button-save {
  border: 2px solid gray;
  padding: 10px;
  border-radius: 5px;
  margin-top: 40px;
}

.edit-prod {
  padding-bottom: 20px;
  text-align: center;
}
</style>
