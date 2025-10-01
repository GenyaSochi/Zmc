<template>
  <AccountMenuComponent>
    <template #top>
      <h1>Personal account</h1>
    </template>    
  </AccountMenuComponent>
 
  <input type="text" v-model="product.name"><br>
  <input type="text" v-model="product.title"><br>
  <select v-model="product.type_id">
    <option v-for="el of type" :key="el.id" :value="el.id">{{ el.name }}</option>
  </select><br>
  <select v-model="product.out_id">
    <option :value="null">Пусто</option>
    <option v-for="el of out" :key="el.id" :value="el.id">{{ el.name }}</option>
  </select><br>
  <div style="position: relative;">
    <label class="label" for="fileUpload"></label>
    <input class="fileInput" type="file" id="fileUpload" @change="fileChange" accept="image/*">
    <img :src="previewImage || product.img" />
  </div>

  <EditorContent v-if="editor" :editor="editor" />
  <button @click="save" class="button-save">Сохранить изменения</button>
</template>

<script setup lang="ts">
import type { product as Product, type as Type, out as Out } from '@prisma/client'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import { TableKit } from '@tiptap/extension-table'
import Text from '@tiptap/extension-text'
import { Gapcursor } from '@tiptap/extensions'
import { Editor, EditorContent } from '@tiptap/vue-3'

const router = useRoute()
const {product, type, out} = await $fetch<{product:Product, type:Type[], out:Out[] }>('/api/products/by_id/'+router.params.id)
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})

const editor = ref(null as any)
onMounted(() => {
  editor.value = new Editor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Gapcursor,
      TableKit.configure({
        table: { resizable: true },
      }),
    ],
    content: product.html,
  })
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})

let files: File[]
const previewImage = ref(null as any)

const fileChange = (event:Event) => {
  const target = event.target as HTMLInputElement
  // @ts-ignore
  files = Array.from(target.files ) || [] as any[]
  if (files.length ) {
    const file = files[0]
    const reader = new FileReader()
    // Чтение файла 
    reader.onload = (e) => {
      previewImage.value = e.target?.result
    }
    reader.readAsDataURL(file)
  }
}

const save = ()=>{
  product.html = editor.value.getHTML()
  const data = new FormData()
  if (files?.length) data.append('img', files[0])
  data.append('data', JSON.stringify(product))
  $fetch('/api/products', {method:'PUT', body:data})
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
}
</style>