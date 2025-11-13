<template>
    <h1 class="jobinfo">Вакансии компании ЗМК "Урал"</h1>
    <div class="job-container">
        <div class="job">

            <p>Наше предприятие – один из лидеров по производству опор трубопроводов.Мы гордимся доверием таких
                гигантов,
                как
                «Газпром», «Иркутская нефтяная компания», «Трубная металлургическая компания» и других представителей
                отрасли.
            </p>
            <p>ЗМК Урал выпускает более 100 видов продукции, нами реализованы десятки проектов</p>
            <p>Мы предлагаем стабильную и перспективную работу, которая подарит Вам возможность развиваться и расти
                вместе с
                надежной компанией в команде профессионалов.</p>
            <p class="text">Предлагаем:</p>
            <p>-достойную заработную плату;</p>
            <p>-социальные гарантии, включая оплачиваемый отпуск и медицинскую страховку;</p>
            <p>-возможности для профессионального роста.</p>
            <p>Наша цель – создать комфортные условия для работы, чтобы вы могли сосредоточиться на главном – своем
                развитии
                и
                успехе.</p>

            <p class="text">Открыты вакансии:</p>
            <div v-for="job of jobs" key="id">
                <p>- {{ job.title }};</p>
            </div>

            <p class="text">По всем интересующим вопросам обращайтесь:</p>
            <p>тел. +79000244766</p>
            <p>hr@zmkural.com</p>
        </div>
        <div class="imgposition">
            <div>
                <img src="/img/protect100.webp" alt="">
                <p>Стабильность и надёжность</p>
            </div>
            <div>
                <img src="/img/money100.webp" alt="">
                <p>Конкурентная заработная плата и социальные гарантии</p>
            </div>
            <div>
                <img src="/img/dev100.webp" alt="">
                <p>Современные условия труда и возможности для развития</p>
            </div>
            <div>
                <img src="/img/team100.webp" alt="">
                <p>Командный дух и корпоративная культура</p>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
const jobs = await $fetch('/api/jobs')

</script>

<style>
.job-container {
    display: flex;
    padding: 0 60px;
}
.jobinfo {
    font-size: 34px;
    padding: 30px 0;
    text-align: center;
}

.job {
    display: flex;
    gap: 10px;
    padding: 20px;
    flex-direction: column;
}

.imgposition {
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 50px;
}

.text {
    font-size: 36px;    
}

.imgjob {
    padding: 20px 0;
    font-size: 24px;
}

.imgview {
    padding: 20px;
}

.tel {
    font-size: 32px;
}

@media screen and (max-width:1366px) {
    .jobinfo {
        font-size: 27px;
    }   
}

@media screen and (max-width:992px) {
    .jobinfo {
        font-size: 26px;
    }

    .text,
    .imgjob {
        font-size: 22px;
    }

    .imgposition {
        padding-left: 35px;
    }
}

@media screen and (max-width:768px) {

    .text,
    .imgjob,
    .tel {
        font-size: 20px;
    }
 
    .imgposition {
        display: none;
    }
    .job-container {
        padding: 0 20px;
    }
}

@media screen and (max-width:576px) {
    .jobinfo {
        font-size: 24px;
    }
     .job-container {
        padding: 0 10px;
    }
}

@media screen and (max-width:410px) {
    .jobinfo {
        font-size: 22px;
    }

    .text,
    .imgjob,
    .tel {
        font-size: 18px;
    }

    .imgposition {
        padding-left: 22px;
    }

    @media screen and (max-width:320px) {
        .jobinfo {
            font-size: 20px;
            padding-right: 10px;
            padding-left: 10px;
        }

        .imgjob,
        .imgposition {
            display: none;
        }
    }
}
</style>