  <template>
    {{ width }} x {{ height }}
  </template>

  <script setup lang="ts">
  const width = ref(0)
  const height = ref(0)
  onMounted(()=>{
    width.value = window.innerWidth
    height.value = window.innerHeight
  })
  </script>

  <style scoped>

  </style>
