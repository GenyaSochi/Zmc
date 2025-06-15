<template>
    <h1 class="jobinfo">Вакансии компании ЗМК "Урал"</h1>
    <div class="job">
        <div>
            <p class="text">Наше предприятие – один из лидеров по производству опор трубопроводов.
                Мы гордимся доверием таких гигантов, как «Газпром», «Иркутская нефтяная компания»,
                «Трубная металлургическая компания» и других представителей отрасли.</p>
            <br>
            <p class="text">ЗМК "Урал" выпускает более 100 видов продукции, нами реализованы десятки проектов.</p>
            <br>
            <p class="text">Мы предлагаем стабильную и перспективную работу, которая подарит Вам возможность
                развиваться и расти вместе с надежной компанией в команде профессионалов.</p>
            <br>
            <p class="text"><b>Предлагаем:</b></p>
            <br>
            <p class="text">-достойную заработную плату;</p>
            <p class="text">-социальные гарантии, включая оплачиваемый отпуск и медицинскую страховку;</p>
            <p class="text">-возможности для профессионального роста.</p>
            <br>
            <p class="text">Наша цель – создать комфортные условия для работы, чтобы вы могли сосредоточиться на главном
                – своем развитии и успехе.</p>
            <br>
            <p class="text"><b>Приглашаем:</b></p>
            <br>
            <p class="text">-начальника отдела ПТО;</p>
            <p class="text">-заместителя начальника производства;</p>
            <p class="text">-стропальщика;</p>
            <p class="text">-комплектовщика;</p>
            <p class="text">-укладчика-упаковщика;</p>
            <p class="text">-мастера заготовительного цеха;</p>
            <p class="text">-менеджера в отдел сопровождения (сбыт);</p>
            <p class="text">-инженера-конструктора отдела КМД.</p>
            <br>
            <p class="text">По всем интересующим вопросам обращайтесь по телефону <b><span
                        class="tel">+79000244766</span></b>
                или электронной почте <b><span class="tel">hr@zmkural.com</span></b></p>
        </div>
        <div>
            <img src="/public/img/protect100.webp" alt="" class="imgposition">
            <p class="imgjob">Стабильность и надёжность</p>
            <img src="/public/img/money100.webp" alt="" class="imgposition">
            <p class="imgjob">Конкурентная заработная плата и социальные гарантии</p>
            <img src="/public/img/dev100.webp" alt="" class="imgposition">
            <p class="imgjob">Современные условия труда и возможности для развития</p>
            <img src="/public/img/team100.webp" alt="" class="imgposition">
            <p class="imgjob">Командный дух и корпоративная культура</p>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style>
.jobinfo {
    font-size: 34px;
    padding: 30px 0;
}

.job {
    display: flex;
    padding: 0 200px 60px 200px;
    gap: 120px;

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

@media screen and (max-width:1366px) {
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
}
</style>