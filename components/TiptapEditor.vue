<template>
  <div class="editor_block">
    <div v-if="editor">
      <!-- Панель инструментов -->
      <div class="toolbar">
        <!-- Форматирование текста -->
        <div class="toolbar-group">
          <button @click="toggleBold" :disabled="!canToggleBold" :class="{ 'is-active': isActive('bold') }">
            Жирный
          </button>
          <button @click="toggleItalic" :disabled="!canToggleItalic" :class="{ 'is-active': isActive('italic') }">
            Курсив
          </button>
          <button @click="toggleStrike" :disabled="!canToggleStrike" :class="{ 'is-active': isActive('strike') }">
            Зачеркнутый
          </button>
          <button @click="toggleUnderline" :disabled="!canToggleUnderline" :class="{ 'is-active': isActive('underline') }">
            Подчеркнуть
          </button>
          <button @click="toggleHighlight" :disabled="!canToggleHighlight" :class="{ 'is-active': isActive('highlight') }">
            Маркер
          </button>
          <button @click="toggleCode" :disabled="!canToggleCode" :class="{ 'is-active': isActive('code') }">
            Код
          </button>
        </div>

        <!-- Заголовки -->
        <div class="toolbar-group">
          <button @click="setParagraph" :class="{ 'is-active': isActive('paragraph') }">
            Абзац
          </button>
          <button @click="toggleHeading(1)" :class="{ 'is-active': isActive('heading', { level: 1 }) }">
            H1
          </button>
          <button @click="toggleHeading(2)" :class="{ 'is-active': isActive('heading', { level: 2 }) }">
            H2
          </button>
          <button @click="toggleHeading(3)" :class="{ 'is-active': isActive('heading', { level: 3 }) }">
            H3
          </button>
        </div>

        <!-- Списки и блоки -->
        <div class="toolbar-group">
          <button @click="toggleBulletList" :class="{ 'is-active': isActive('bulletList') }">
            Маркированный список
          </button>
          <button @click="toggleOrderedList" :class="{ 'is-active': isActive('orderedList') }">
            Нумерованный список
          </button>
          <button @click="toggleBlockquote" :class="{ 'is-active': isActive('blockquote') }">
            Цитата
          </button>
          <button @click="toggleCodeBlock" :class="{ 'is-active': isActive('codeBlock') }">
            Блок кода
          </button>
        </div>

        <!-- Дополнительные инструменты -->
        <div class="toolbar-group">
          <button @click="setHorizontalRule">
            Разделитель
          </button>
          <button @click="setHardBreak">
            Разрыв строки
          </button>
          <button @click="clearFormatting">
            Очистить форматирование
          </button>
          <button @click="undo" :disabled="!canUndo">
            Отменить
          </button>
          <button @click="redo" :disabled="!canRedo">
            Вернуть
          </button>
        </div>
      </div>

      <!-- Всплывающее меню -->
      <BubbleMenu
        :editor="editor"
        :tippy-options="{ duration: 100 }"
        v-if="editor"
        class="bubble-menu"
      >
        <div class="bubble-menu-content">
          <button @click="toggleBold" :class="{ 'is-active': isActive('bold') }">
            Ж
          </button>
          <button @click="toggleItalic" :class="{ 'is-active': isActive('italic') }">
            К
          </button>
          <button @click="toggleStrike" :class="{ 'is-active': isActive('strike') }">
            З
          </button>
          <button @click="toggleHighlight" :class="{ 'is-active': isActive('highlight') }">
            М
          </button>
          <button @click="toggleUnderline" :class="{ 'is-active': isActive('underline') }">
            П
          </button>
        </div>
      </BubbleMenu>

      <!-- Плавающее меню -->
      <FloatingMenu
        :editor="editor"
        :tippy-options="{ duration: 100 }"
        v-if="editor"
        class="floating-menu"
      >
        <div class="floating-menu-content">
          <button @click="toggleHeading(1)" :class="{ 'is-active': isActive('heading', { level: 1 }) }">
            H1
          </button>
          <button @click="toggleHeading(2)" :class="{ 'is-active': isActive('heading', { level: 2 }) }">
            H2
          </button>
          <button @click="toggleBulletList" :class="{ 'is-active': isActive('bulletList') }">
            ●
          </button>
          <button @click="toggleOrderedList" :class="{ 'is-active': isActive('orderedList') }">
            1.
          </button>
        </div>
      </FloatingMenu>

      <!-- Область редактирования -->
      <EditorContent :editor="editor" class="editor-content" />

      <!-- Загрузка изображений -->
      <div class="image-upload">
        <form @submit.prevent="uploadImage" class="upload-form">
          <div class="upload-fields">
            <input
              type="text"
              v-model="altText"
              placeholder="Описание изображения"
              class="alt-input"
              required
            />
            <input
              type="file"
              ref="fileInput"
              accept="image/*"
              class="file-input"
              required
            />
            <button type="submit" class="upload-btn">
              Загрузить
            </button>
          </div>
          <div v-if="uploadError" class="error-message">
            {{ uploadError }}
          </div>
        </form>
      </div>

      <!-- Кнопка сохранения -->
      <div class="save-section">
        <button @click="saveContent" class="save-btn">
          Сохранить пост
        </button>
      </div>
    </div>
    <div v-else class="editor-loading">
      Загрузка редактора...
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { Editor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/vue-3'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import type { Editor as EditorType } from '@tiptap/core'

// Props и Emits
const props = defineProps<{
  text?: string
}>()

const emit = defineEmits<{
  save: [data: { html: string }]
}>()

// Refs
const editor = ref<EditorType | null>(null)
const altText = ref('')
const fileInput = ref<HTMLInputElement | null>(null)
const uploadError = ref<string | null>(null)

// Computed свойства для состояния редактора
const canToggleBold = computed(() => editor.value?.can().toggleBold() ?? false)
const canToggleItalic = computed(() => editor.value?.can().toggleItalic() ?? false)
const canToggleStrike = computed(() => editor.value?.can().toggleStrike() ?? false)
const canToggleUnderline = computed(() => editor.value?.can().toggleUnderline() ?? false)
const canToggleHighlight = computed(() => editor.value?.can().toggleHighlight() ?? false)
const canToggleCode = computed(() => editor.value?.can().toggleCode() ?? false)
const canUndo = computed(() => editor.value?.can().undo() ?? false)
const canRedo = computed(() => editor.value?.can().redo() ?? false)

// Методы редактора
const isActive = (type: string, options?: any) => editor.value?.isActive(type, options) ?? false

const toggleBold = () => editor.value?.chain().focus().toggleBold().run()
const toggleItalic = () => editor.value?.chain().focus().toggleItalic().run()
const toggleStrike = () => editor.value?.chain().focus().toggleStrike().run()
const toggleUnderline = () => editor.value?.chain().focus().toggleUnderline().run()
const toggleHighlight = () => editor.value?.chain().focus().toggleHighlight().run()
const toggleCode = () => editor.value?.chain().focus().toggleCode().run()
const setParagraph = () => editor.value?.chain().focus().setParagraph().run()
const toggleHeading = (level: number) => editor.value?.chain().focus().toggleHeading({ level }).run()
const toggleBulletList = () => editor.value?.chain().focus().toggleBulletList().run()
const toggleOrderedList = () => editor.value?.chain().focus().toggleOrderedList().run()
const toggleBlockquote = () => editor.value?.chain().focus().toggleBlockquote().run()
const toggleCodeBlock = () => editor.value?.chain().focus().toggleCodeBlock().run()
const setHorizontalRule = () => editor.value?.chain().focus().setHorizontalRule().run()
const setHardBreak = () => editor.value?.chain().focus().setHardBreak().run()
const undo = () => editor.value?.chain().focus().undo().run()
const redo = () => editor.value?.chain().focus().redo().run()
const clearFormatting = () => {
  editor.value?.chain().focus().unsetAllMarks().clearNodes().run()
}

// Сохранение контента
const saveContent = () => {
  if (!editor.value) return
  
  const html = editor.value.getHTML()
  emit('save', { html })
}

// Загрузка изображения
const uploadImage = async () => {
  uploadError.value = null
  
  if (!fileInput.value?.files?.[0]) {
    uploadError.value = 'Пожалуйста, выберите файл'
    return
  }

  if (!altText.value.trim()) {
    uploadError.value = 'Пожалуйста, добавьте описание изображения'
    return
  }

  const file = fileInput.value.files[0]
  
  // Проверка типа файла
  if (!file.type.startsWith('image/')) {
    uploadError.value = 'Пожалуйста, выберите файл изображения'
    return
  }

  // Проверка размера файла (например, 5MB)
  if (file.size > 5 * 1024 * 1024) {
    uploadError.value = 'Файл слишком большой (макс. 5MB)'
    return
  }

  try {
    // Создание предпросмотра для получения размеров
    const img = new Image()
    
    img.onload = async () => {
      const formData = new FormData()
      formData.append('alt', altText.value)
      formData.append('img', file)
      formData.append('width', img.naturalWidth.toString())
      formData.append('height', img.naturalHeight.toString())

      try {
        const data = await $fetch<{ url: string }>('/api/img', {
          method: 'POST',
          body: formData
        })

        // Вставка изображения в редактор
        editor.value?.chain().focus().setImage({ 
          src: data.url, 
          alt: altText.value,
          title: altText.value
        }).run()

        // Сброс формы
        altText.value = ''
        if (fileInput.value) {
          fileInput.value.value = ''
        }
        uploadError.value = null
      } catch (error) {
        console.error('Ошибка загрузки:', error)
        uploadError.value = 'Ошибка при загрузке изображения'
      }
    }

    img.onerror = () => {
      uploadError.value = 'Ошибка при чтении файла изображения'
    }

    img.src = URL.createObjectURL(file)
  } catch (error) {
    console.error('Ошибка обработки файла:', error)
    uploadError.value = 'Ошибка при обработке файла'
  }
}

// Обработка вставки текста
const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault()
  
  const text = event.clipboardData?.getData('text/plain') || ''
  
  // Вставка текста в редактор
  editor.value?.commands.insertContent(text)
}

// Инициализация редактора
onMounted(() => {
  editor.value = new Editor({
    content: props.text || '',
    extensions: [
      StarterKit,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Highlight.configure({
        multicolor: true,
      }),
      Underline,
    ],
    editorProps: {
      attributes: {
        class: 'prose focus:outline-none',
        spellcheck: 'false',
      },
      handlePaste: handlePaste,
    },
  })

  // Очистка URL объекта при размонтировании
  onBeforeUnmount(() => {
    if (editor.value) {
      editor.value.destroy()
    }
  })
})

// Обновление контента при изменении props
watch(() => props.text, (newText) => {
  if (editor.value && newText !== editor.value.getHTML()) {
    editor.value.commands.setContent(newText || '')
  }
})
</script>

<style scoped>
.editor_block {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  padding: 16px;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px;
  background: #f7fafc;
  border-radius: 6px;
  margin-bottom: 16px;
  border: 1px solid #e2e8f0;
}

.toolbar-group {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.toolbar button,
.bubble-menu-content button,
.floating-menu-content button {
  padding: 6px 12px;
  border: 1px solid #cbd5e0;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
  min-height: 36px;
}

.toolbar button:hover:not(:disabled),
.bubble-menu-content button:hover:not(:disabled),
.floating-menu-content button:hover:not(:disabled) {
  background: #edf2f7;
  border-color: #a0aec0;
}

.toolbar button:disabled,
.bubble-menu-content button:disabled,
.floating-menu-content button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.toolbar button.is-active,
.bubble-menu-content button.is-active,
.floating-menu-content button.is-active {
  background: #4299e1;
  color: white;
  border-color: #4299e1;
}

.bubble-menu {
  background: white;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  padding: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.bubble-menu-content {
  display: flex;
  gap: 4px;
}

.floating-menu {
  background: white;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  padding: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.floating-menu-content {
  display: flex;
  gap: 4px;
}

.editor-content {
  min-height: 200px;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  margin-bottom: 16px;
  background: white;
}

.editor-content:focus-within {
  border-color: #4299e1;
  outline: none;
}

.image-upload {
  margin-bottom: 16px;
}

.upload-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.upload-fields {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}

.alt-input {
  flex: 1;
  min-width: 200px;
  padding: 8px 12px;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  font-size: 14px;
}

.alt-input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
}

.file-input {
  padding: 8px;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.upload-btn {
  padding: 8px 16px;
  background: #48bb78;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.upload-btn:hover {
  background: #38a169;
}

.upload-btn:disabled {
  background: #a0aec0;
  cursor: not-allowed;
}

.error-message {
  color: #e53e3e;
  font-size: 14px;
  margin-top: 4px;
}

.save-section {
  display: flex;
  justify-content: flex-end;
}

.save-btn {
  padding: 10px 24px;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.save-btn:hover {
  background: #3182ce;
}

.editor-loading {
  padding: 40px;
  text-align: center;
  color: #718096;
}

@media (max-width: 768px) {
  .toolbar {
    flex-direction: column;
  }
  
  .upload-fields {
    flex-direction: column;
    align-items: stretch;
  }
  
  .alt-input {
    min-width: unset;
  }
}
</style>

<style>
/* Стили для контента редактора */
.editor-content .ProseMirror {
  min-height: 150px;
}

.editor-content .ProseMirror:focus {
  outline: none;
}

.editor-content .ProseMirror h1 {
  font-size: 2em;
  font-weight: bold;
  margin: 0.67em 0;
}

.editor-content .ProseMirror h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin: 0.75em 0;
}

.editor-content .ProseMirror h3 {
  font-size: 1.17em;
  font-weight: bold;
  margin: 0.83em 0;
}

.editor-content .ProseMirror p {
  margin: 1em 0;
}

.editor-content .ProseMirror ul,
.editor-content .ProseMirror ol {
  padding-left: 2em;
  margin: 1em 0;
}

.editor-content .ProseMirror blockquote {
  border-left: 3px solid #cbd5e0;
  padding-left: 1em;
  margin: 1em 0;
  color: #4a5568;
}

.editor-content .ProseMirror code {
  background: #edf2f7;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

.editor-content .ProseMirror pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1em;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1em 0;
}

.editor-content .ProseMirror pre code {
  background: transparent;
  padding: 0;
  color: inherit;
}

.editor-content .ProseMirror img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin: 1em 0;
}

.editor-content .ProseMirror .ProseMirror-selectednode {
  outline: 2px solid #4299e1;
}
</style>