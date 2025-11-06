<template>
    <h1 class="jobinfo">Вакансии компании ЗМК "Урал"</h1>
    <div style="display: grid;">
        <div class="job">
            <div v-for="descriptionJob of descriptionJobs" key="id">
                <p>{{ descriptionJob.description }}</p>
            </div>

            <p class="text"><b>Приглашаем:</b></p>
            <div v-for="editJob of editJobs" key="id">
                <p>{{ editJob.titleJob }}</p>
            </div>

            <div v-for="infoJob of infoJobs" key="id">
                <p>{{ infoJob.text }}</p>
            </div>

        </div>
        <div v-for="imgJob of imgJobs" key="id" class="imgposition">
            <p><img :src="imgJob.img" :alt="imgJob.textImg"></p>
            <p>{{ imgJob.textImg }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const editJobs = [
    { id: 1, titleJob: "-начальника отдела ПТО;" },
    { id: 2, titleJob: "-заместителя начальника производства;" },
    { id: 3, titleJob: "-стропальщика;" },
    { id: 4, titleJob: "-комплектовщика;" },
    { id: 5, titleJob: "-укладчика-упаковщика;" },
    { id: 6, titleJob: "-мастера заготовительного цеха;" },
    { id: 7, titleJob: "-менеджера в отдел сопровождения (сбыт);" },
    { id: 8, titleJob: "-инженера-конструктора отдела КМД." },]

const descriptionJobs = [
    { id: 1, description: "Наше предприятие – один из лидеров по производству опор трубопроводов.Мы гордимся доверием таких гигантов, как «Газпром», «Иркутская нефтяная компания», «Трубная металлургическая компания» и других представителей отрасли." },
    { id: 2, description: "ЗМК Урал выпускает более 100 видов продукции, нами реализованы десятки проектов" },
    { id: 3, description: "Мы предлагаем стабильную и перспективную работу, которая подарит Вам возможность развиваться и расти вместе с надежной компанией в команде профессионалов." },
    { id: 4, description: "Предлагаем:" },
    { id: 5, description: "-достойную заработную плату;" },
    { id: 6, description: "-социальные гарантии, включая оплачиваемый отпуск и медицинскую страховку;" },
    { id: 7, description: "-возможности для профессионального роста." },
    { id: 8, description: "Наша цель – создать комфортные условия для работы, чтобы вы могли сосредоточиться на главном – своем развитии и успехе." },
]

const infoJobs = [
    { id: 1, text: "По всем интересующим вопросам обращайтесь по телефону:" },
    { id: 2, text: "+79000244766" },
    { id: 3, text: "hr@zmkural.com" },
]

const imgJobs = [
    { id: 1, img: "/img/protect100.webp", textImg: 'Стабильность и надёжность' },
    { id: 2, img: "/img/money100.webp", textImg: 'Конкурентная заработная плата и социальные гарантии' },
    { id: 3, img: "/img/dev100.webp", textImg: 'Современные условия труда и возможности для развития' },
    { id: 4, img: "/img/team100.webp", textImg: 'Командный дух и корпоративная культура' },
]
</script>

<style>
.jobinfo {
    font-size: 34px;
    padding: 30px 0;
}

.job {
    display: flex;
    padding: 0 200px 60px 200px;
    flex-direction: column;
}

.imgjob {
    padding: 20px 0;
    font-size: 24px;
}

.imgview {
    padding: 20px;
}

.imgposition {
    padding-left: 64px;
}

.text {
    font-size: 24px;
}

.tel {
    font-size: 24px;
}

/* @media screen and (max-width:1366px) {
    .jobinfo {
        font-size: 27px;
    }

    .job {
        padding: 0 100px 60px 100px;
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

    .job {
        padding: 0 80px 60px 80px;
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

    .job {
        padding: 0 60px 60px 60px;
        gap: 60px;
    }
}

@media screen and (max-width:576px) {
    .jobinfo {
        font-size: 24px;
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

    .job {
        padding: 0 10px 30px 10px;
        gap: 20px;
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
} */
</style>