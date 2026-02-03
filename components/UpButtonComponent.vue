<template>
  <button 
    @click="toTop" 
    class="button" 
    :class="{ 'button-active': visible }"
    aria-label="Наверх"
  >
    <span class="arrow">&#8593;</span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    visible.value = window.scrollY > 600
  }
}

const toTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
.button {
  background-color: rgba(56, 52, 52, 0.7);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  text-align: center;
  cursor: pointer;
  position: fixed;
  bottom: -80px;
  right: 30px;
  transition: all 0.4s ease;
  opacity: 0;
  z-index: 1000;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.button:hover {
  background-color: rgba(56, 52, 52, 0.9);
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.button:active {
  transform: scale(0.95);
}

.button-active {
  opacity: 1;
  bottom: 18px;
}

.arrow {
  font-size: 40px;
  line-height: 1;
  display: block;
}

@media screen and (max-width: 1366px) {
  .button {
    width: 70px;
    height: 70px;    
    bottom: -70px;
    right: 20px;
  }
  
  .button-active {
    bottom: 20px;
  }
  
  .arrow {
    font-size: 35px;
  }
}
@media screen and (max-width: 1307px){
.button {
   right: 24px;
}
}

@media screen and (max-width: 992px) {
  .button {
    width: 56px;
    height: 56px;
    right: 15px;
    bottom: -56px;
  }
  
  .button-active {
    bottom: 12px;
  }
  
  .arrow {
    font-size: 28px;
  }
}

@media screen and (max-width: 576px) {
  .button {
    width: 50px;
    height: 50px;
    right: 10px;
    bottom: -50px;
  }
  
  .button-active {
    bottom: 10px;
  }
  
  .arrow {
    font-size: 24px;
  }
}
</style>