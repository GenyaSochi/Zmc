<template>
  <button @click="totop" class="button" :class="visible ? 'button-active ' : ''"><span
      class="arrow">&#8593;</span></button>
</template>

<script setup lang="ts">

const visible = ref(false)

const scroll = (e: Event) => {
  if (window.scrollY > 600) {
    visible.value = true
  } else {
    visible.value = false
  }
}

onMounted(() => {
  if (window.scrollY > 600) {
    visible.value = true
  }
  window.addEventListener('scroll', scroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scroll)
})

const totop = () => {
  if (window.scrollY) {
    scrollTo(0, 0)
  }
}
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
  bottom: -18px;
  left: 18px;
  transition: .4s linear;
  opacity: 0;
  z-index: 1;
}

.button-active {
  opacity: 1;
  bottom: 18px;
  transition: .4s linear;
}

.arrow {
  font-size: 40px;
  display: flex;
  text-align: center;
  justify-content: center;
}

@media screen and (max-width:1366px) {
  .button {
    width: 70px;
    height: 70px;
    bottom: 20px;
    left: 17px;
  }
}


@media screen and (max-width:992px) {
  .button {
    width: 56px;
    height: 56px;
    bottom: 12px;
    left: 11px;
  }
}
</style>