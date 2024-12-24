<template>
  <section id="sert">
    <div class="sertcontainer">
      <h2 class="serttext">наши сертификаты</h2>
      <div class="sertimg">
        <img src="/img/certificate1.webp" alt="certificate" style="border: 5px solid white; width: 200px; height: 286px;">
        <img src="/img/certificate2.webp" alt="certificate" style="border: 5px solid white; width: 200px; height: 286px;">
        <img src="/img/certificate3.webp" alt="certificate" style="border: 5px solid white; width: 200px; height: 286px;">
        <img src="/img/certificate4.webp" alt="certificate" style="border: 5px solid white; width: 200px; height: 286px;">
        <img src="/img/certificate5.webp" alt="certificate" style="border: 5px solid white; width: 200px; height: 286px;">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style>
.sertcontainer {
  background-color: rgb(56, 52, 52);
  padding: 20px 0 40px 0;
}

.serttext {
  text-transform: uppercase;
  color: white;
  font-size: 40px;
  text-align: center;  
  margin: 50px 0;
}

.sertimg {
  display: flex;
  gap: 60px;
  justify-content: center;
  padding-bottom: 30px;
}

</style>