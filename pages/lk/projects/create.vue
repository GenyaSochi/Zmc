<template>
  <AccountMenuComponent>
    <template #top>
      <h1 class="edit-proj">Редактировать проект</h1>
    </template>
    <button @click="save" class="button-save">Сохранить изменения</button>
  </AccountMenuComponent>
  <div class="editing-projects">
    <input type="text" v-model="project.name" placeholder="имя">
    <img v-if="previewImage || project.img" :src="previewImage || project.img" />
    <div v-else class="addImg">
      <label class="label" for="fileUpload"></label>
      <input class="fileInput" type="file" id="fileUpload" @change="fileChange" accept="image/*">
      Добавить картинку
    </div>
    <button @click="delImg" class="delImg">Удалить картинку</button>
    <input type="text" v-model="project.quantity" placeholder="количество">
    <input type="text" v-model="project.year" placeholder="год">
    <input type="text" v-model="project.enduser" placeholder="конечный потребитель">
    <textarea v-model="project.description"></textarea>
  </div>
</template>

<script setup lang="ts">
import type { project as Project } from '@prisma/client'
const project = ref({} as Project)
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
    reader.onload = (e) => {
      previewImage.value = e.target?.result
    }
    reader.readAsDataURL(file)
  }
}

const save = () => {
  const year = parseInt(project.value.year.toString())
  if (!year) {
    alert('Неверно указан год')
    return
  }
  if (!files?.length) {
    alert('Добавьте фото')
    return
  }
  project.value.project = project.value.name
  project.value.year = year
  const data = new FormData()
  if (files?.length) data.append('img', files[0])
  data.append('data', JSON.stringify(project.value))
  $fetch('/api/projects', { method: 'POST', body: data })
  navigateTo('/lk/projects')
}

const delImg = () => {
  if (previewImage.value)
    previewImage.value = ''
  files = []
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
  text-align: left;
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

.editing-projects {
  border: 2px solid gray;
  padding: 10px;
  border-radius: 5px;
  margin: 40px 0;
  text-align: center;

}

.button-save {
  display: block;
  color: #475569;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  padding: 14px 20px;
  margin: 6px 0;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}

.edit-proj {
  padding-bottom: 20px;
  text-align: center;
}

.editing-projects {
  max-width: 800px;
  margin: 0 auto 30px;
}

.button-add {
  border: 2px solid gray;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.addImg,
.delImg {
  position: relative;
  display: flex;
  border: 2px solid gray;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
}
</style>
