<template>
  <section>
    <div class="prod">
      <div class="textprod-container">
        <p class="textprod">Наша экспертиза в обработке металла обеспечивает не только точность и качество, но и
          экономическую эффективность для каждого проекта: от плазменной резки до сложных сварочных работ. Наше производство
          гарантирует снижение затрат и повышение долговечности изделий, позволяя Вам успешно реализовывать
          самые амбициозные задачи.</p>
      </div>
      
      <div class="links-container">
        <NuxtLink to="/catalog" class="seeprod">
          <div class="link-content">
            <img src="/img/apper100.webp" alt="Каталог продукции" class="apper">
            <span>Каталог продукции</span>
          </div>
        </NuxtLink>
        
        <a 
          target="_blank"
          href="https://rutube.ru/video/private/6ad6e7eb360789345ef4b4eff5f8b840/?p=rx3Cznl9PrpNST0nQtvdbQ" 
          class="seeprod"
          rel="noopener noreferrer"
        >
          <div class="link-content">
            <img src="/img/exc100.webp" alt="Экскурсия на производство" class="exc">
            <span>Экскурсия на производство</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.prod {
  display: flex;
  gap: 30px;
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: stretch;
}

.textprod-container {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 30px;
  background: linear-gradient(135deg, #000 0%, #333 100%);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.textprod {
  font-size: 24px;
  line-height: 1.6;
  color: white;
  text-align: center;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.links-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.seeprod {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(30, 33, 61);
  color: white;
  font-size: 24px;
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(30, 33, 61, 0.3);
  position: relative;
  overflow: hidden;
}

.seeprod:hover {
  background-color: rgb(40, 44, 80);
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(30, 33, 61, 0.5);
}

.link-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
}

.apper, .exc {
  width: 80px;
  height: 80px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.seeprod:hover .apper,
.seeprod:hover .exc {
  transform: scale(1.1);
}

.seeprod span {
  font-weight: 600;
  letter-spacing: 0.5px;
}

@media screen and (max-width: 1366px) {
  .prod {
    padding: 30px 20px;
    gap: 20px;
  }
  
  .textprod {
    font-size: 20px;
  }
  
  .seeprod {
    font-size: 20px;
    padding: 15px;
  }
  
  .apper, .exc {
    width: 70px;
    height: 70px;
  }
}

@media screen and (max-width: 1200px) {
  .prod {
    flex-direction: column;
    gap: 25px;
  }
  
  .textprod-container {
    padding: 25px;
  }
  
  .links-container {
    flex-direction: row;
    gap: 20px;
  }
  
  .link-content {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
}

@media screen and (max-width: 992px) {
  .prod {
    padding: 25px 15px;
  }
  
  .textprod {
    font-size: 18px;
    line-height: 1.5;
  }
  
  .seeprod {
    font-size: 18px;
    padding: 15px 10px;
  }
  
  .apper, .exc {
    width: 60px;
    height: 60px;
  }
  
  .link-content {
    gap: 15px;
  }
}

@media screen and (max-width: 768px) {
  .prod {
    padding: 20px 10px;
  }
  
  .textprod-container {
    padding: 20px;
    display: block !important; 
  }
  
  .textprod {
    font-size: 16px;
    line-height: 1.4;
  }
  
  .links-container {
    flex-direction: column;
    gap: 15px;
  }
  
  .link-content {
    flex-direction: column;
    gap: 10px;
  }
  
  .seeprod {
    font-size: 16px;
    padding: 15px;
  }
  
  .apper, .exc {
    width: 50px;
    height: 50px;
    display: block !important; 
  }
}

@media screen and (max-width: 480px) {
  .textprod {
    font-size: 14px;
  }
  
  .seeprod {
    font-size: 14px;
    padding: 12px;
  }
  
  .apper, .exc {
    width: 40px;
    height: 40px;
  }
  
  .prod {
    gap: 20px;
  }
}
</style>