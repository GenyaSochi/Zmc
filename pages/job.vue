<template>
  <div>
    <h1 class="jobinfo">Вакансии компании ЗМК "Урал"</h1>
    <div class="job-container">
      <div class="job">
        <p>Наше предприятие – один из лидеров по производству опор трубопроводов. Мы гордимся доверием таких гигантов, как
          «Газпром», «Иркутская нефтяная компания», «Трубная металлургическая компания» и других представителей отрасли.
        </p>
        <p>ЗМК Урал выпускает более 100 видов продукции, нами реализованы десятки проектов</p>
        <p>Мы предлагаем стабильную и перспективную работу, которая подарит Вам возможность развиваться и расти вместе с
          надежной компанией в команде профессионалов.</p>
        
        <p class="text">Предлагаем:</p>
        <p>- достойную заработную плату;</p>
        <p>- социальные гарантии, включая оплачиваемый отпуск и медицинскую страховку;</p>
        <p>- возможности для профессионального роста.</p>
        <p>Наша цель – создать комфортные условия для работы, чтобы вы могли сосредоточиться на главном – своем развитии и
          успехе.</p>

        <p class="text">Открыты вакансии:</p>
        <div v-if="jobs && jobs.length">
          <div v-for="job in jobs" :key="job.id">
            <p>- {{ job.title }};</p>
          </div>
        </div>
        <div v-else>
          <p>На данный момент открытых вакансий нет.</p>
        </div>

        <p class="text">По всем интересующим вопросам обращайтесь:</p>
        <p class="contact-info">тел. +7 (900) 024-47-66</p>
        <p class="contact-info">hr@zmkural.com</p>
      </div>
      
      <div class="imgposition">
        <div class="benefit-item">
          <img src="/img/protect100.webp" alt="Стабильность">
          <p>Стабильность и надёжность</p>
        </div>
        <div class="benefit-item">
          <img src="/img/money100.webp" alt="Зарплата">
          <p>Конкурентная заработная плата и социальные гарантии</p>
        </div>
        <div class="benefit-item">
          <img src="/img/dev100.webp" alt="Развитие">
          <p>Современные условия труда и возможности для развития</p>
        </div>
        <div class="benefit-item">
          <img src="/img/team100.webp" alt="Команда">
          <p>Командный дух и корпоративная культура</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Добавляем обработку ошибок при получении данных
const { data: jobs, error } = await useFetch('/api/jobs')

// Можно также добавить обработку состояния загрузки
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  try {
    // Если useFetch не используется как выше
    // jobs.value = await $fetch('/api/jobs')
  } catch (err) {
    console.error('Ошибка загрузки вакансий:', err)
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped>
.job-container {
  display: flex;
  padding: 0 60px;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.jobinfo {
  font-size: 34px;
  padding: 30px 0;
  text-align: center;
  color: #333;
  font-weight: 600;
}

.job {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  flex: 1;
  font-size: 18px;
  line-height: 1.6;
}

.imgposition {
  display: flex;
  flex-direction: column;
  gap: 50px;
  flex: 0 0 300px;
  padding: 20px 0;
}

.benefit-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.benefit-item img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.benefit-item p {
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  color: #444;
}

.text {
  font-size: 28px;
  font-weight: 600;
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 10px;
}

.contact-info {
  font-size: 18px;
  font-weight: 500;
  color: #1a73e8;
}

/* Адаптивная верстка */
@media screen and (max-width: 1200px) {
  .job-container {
    padding: 0 40px;
    gap: 30px;
  }
  
  .imgposition {
    flex: 0 0 250px;
  }
}

@media screen and (max-width: 992px) {
  .jobinfo {
    font-size: 28px;
  }
  
  .job-container {
    flex-direction: column;
    padding: 0 30px;
    gap: 40px;
  }
  
  .imgposition {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  
  .benefit-item {
    flex: 0 0 calc(50% - 15px);
    min-width: 200px;
  }
  
  .text {
    font-size: 24px;
  }
}

@media screen and (max-width: 768px) {
  .jobinfo {
    font-size: 26px;
    padding: 20px 15px;
  }
  
  .job-container {
    padding: 0 20px;
  }
  
  .job {
    font-size: 16px;
    padding: 15px;
  }
  
  .text {
    font-size: 22px;
  }
  
  .contact-info {
    font-size: 16px;
  }
  
  .benefit-item {
    flex: 0 0 100%;
  }
}

@media screen and (max-width: 576px) {
  .jobinfo {
    font-size: 24px;
  }
  
  .job-container {
    padding: 0 15px;
  }
  
  .text {
    font-size: 20px;
  }
  
  .benefit-item img {
    width: 60px;
    height: 60px;
  }
  
  .benefit-item p {
    font-size: 14px;
  }
}

@media screen and (max-width: 410px) {
  .jobinfo {
    font-size: 22px;
  }
  
  .job-container {
    padding: 0 10px;
  }
  
  .text {
    font-size: 18px;
  }
  
  .job {
    font-size: 15px;
    padding: 10px;
  }
}
</style>