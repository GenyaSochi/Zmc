<template>
  <p><button class="button"><span class="arrow">&#8593;</span></button></p>
  

</template>

<script setup lang="ts">


</script>


<style>
.button{
  background-color: rgb(161, 7, 7);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  text-align: center; 
  cursor: pointer;
  position: relative;
  /* z-index: -1; */
  bottom: 450px;
  left: 50px;  
  transition: .4s linear; 
}

.button:active {
  top: -597px;
  transition: .4s linear; 
}

.button-show {
  opacity: 1;
  transition: .4s linear; 
}

.arrow {
 font-size: 50px;
 display: flex;
 text-align: center;
 justify-content: center;
}



</style>