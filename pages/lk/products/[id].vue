<template>
  <AccountMenuComponent>
    <template #top>
      <h1 class="edit-prod">Редактировать продукт</h1>
    </template>
  </AccountMenuComponent>
  <div class="info-style">
    <input type="text" v-model="product.name" class="info-prod">
    <input type="text" v-model="product.title" class="info-prod">
    <select v-model="product.type_id" class="info-prod">
      <option v-for="el of type" :key="el.id" :value="el.id" class="info-prod">{{ el.name }}</option>
    </select>
    <select v-model="product.out_id" class="info-prod">
      <option :value="null">Без номера выпуска</option>
      <option v-for="el of out" :key="el.id" :value="el.id">{{ el.name }}</option>
    </select>
    <div class="img-style">
      <label class="label" for="fileUpload"></label>
      <input class="fileInput" type="file" id="fileUpload" @change="fileChange" accept="image/*">
      <img :src="previewImage || product.img" />
    </div>
  </div>

  <div class="info-text">
    <EditorContent v-if="editor" :editor="editor" />
    <div>
      <div v-if="editor"
        style="display: flex; flex-direction: column; gap:20px; position: sticky; top:10px; font-size: 14px;">
        <button @click="editor.chain().focus().toggleBold().run()"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }">
          жирный
        </button>
        <button @click="editor.chain().focus().toggleItalic().run()"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }">
          курсив
        </button>
        <button @click="editor.chain().focus().toggleStrike().run()"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }">
          перечёркнутый
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
          h2
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
          h3
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
          h4
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
          h5
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
          h6
        </button>
        <button @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }">
          маркированный список
        </button>
        <button @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'is-active': editor.isActive('orderedList') }">
          упорядоченный список
        </button>
        <button @click="editor.chain().focus().toggleCodeBlock().run()"
          :class="{ 'is-active': editor.isActive('codeBlock') }">
          выделить параграф
        </button>
        <!-- <button @click="editor.chain().focus().toggleBlockquote().run()"
:class="{ 'is-active': editor.isActive('blockquote') }">
цитата из блока
</button> -->
        <button @click="editor.chain().focus().setHorizontalRule().run()">
          скрыть абзац
        </button>
        <button @click="editor.chain().focus().setHardBreak().run()">
          удалить
        </button>
        <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
          отменить изменение
        </button>
        <!-- <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
  изменить
</button> -->
        <button @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">вставить
          таблицу</button>
        <button @click="editor.chain().focus().addColumnBefore().run()">добавить столбец перед</button>
        <button @click="editor.chain().focus().addColumnAfter().run()">добавить столбец после</button>
        <button @click="editor.chain().focus().deleteColumn().run()">удалить столбец</button>
        <button @click="editor.chain().focus().addRowBefore().run()">добавить строку перед</button>
        <button @click="editor.chain().focus().addRowAfter().run()">добавить строку после</button>
        <button @click="editor.chain().focus().deleteRow().run()">удалить строку</button>
        <button @click="editor.chain().focus().deleteTable().run()">удалить таблицу</button>
        <button @click="editor.chain().focus().mergeCells().run()">объединить ячейки</button>
        <button @click="editor.chain().focus().splitCell().run()">разделить ячейки</button>
        <button @click="editor.chain().focus().toggleHeaderColumn().run()">переключение столбца заголовка</button>
        <button @click="editor.chain().focus().toggleHeaderRow().run()">переключение строки заголовка</button>
        <button @click="editor.chain().focus().toggleHeaderCell().run()">переключить ячейку заголовка</button>
        <button @click="editor.chain().focus().mergeOrSplit().run()">слияние или разделение</button>
        <!-- <button @click="editor.chain().focus().setCellAttribute('colspan', 2).run()">установить атрибут ячейки</button> -->
        <button @click="editor.chain().focus().fixTables().run()">редактирование текста таблицы</button>
        <button @click="editor.chain().focus().goToNextCell().run()">перейти к следующей ячейке</button>
        <button @click="editor.chain().focus().goToPreviousCell().run()">перейти к предыдущей ячейке</button>
      </div>
    </div>
  </div>
  <button @click="save" class="button-save">сохранить изменения</button>
</template>

<script setup lang="ts">
import type { product as Product, type as Type, out as Out } from '@prisma/client'
import { TableKit } from '@tiptap/extension-table'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

const router = useRoute()
const { product, type, out } = await $fetch<{ product: Product, type: Type[], out: Out[] }>('/api/products/by_id/' + router.params.id)
definePageMeta({
  layout: 'admin',
  middleware: 'adm'
})

const editor = ref(null as any)
onMounted(() => {
  editor.value = new Editor({
    extensions: [
      StarterKit,
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
  product.html = editor.value.getHTML()
  const data = new FormData()
  if (files?.length) data.append('img', files[0])
  data.append('data', JSON.stringify(product))
  $fetch('/api/products', { method: 'PUT', body: data })
}

</script>

<style scoped>
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
  margin-left: 60px;
}

.edit-prod {
  padding-bottom: 20px;
  text-align: center;
}

h1 {
  color: #1e3a8a;
  font-weight: 700;
}

.info-style {
  display: flex;
  flex-direction: column;
  max-width: 850px;
  margin: 0 auto;
}

.img-style {
  position: relative;

}

.info-prod {
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 10px;
}

.info-text {
  display: grid;
  grid-template-columns: 1fr 300px;
  width: 1400px;
  gap: 10px;
  margin: 0 auto;
}
</style>