import prisma from "~/lib/prisma"


export default defineEventHandler(async (event) => {

  const projects = [
    { id: 1, name: 'Опоры трубопроводов ИЗП', projectName: 'Опоры трубопроводов', quantity: '850 тонн', year: 2022, endUser: ' Иркутский завод полимеров', description:'ЗМК «Урал» участвует в строительстве первого в Восточной Сибири завода по производству полимеров из этана — Иркутского завода полимеров (ИЗП). Компания отвечает за изготовление и поставку опор трубопроводов. Проект реализуется с участием японской инжиниринговой компании Toyo Engineering Corporation, которая выполняет проектирование и обеспечивает поставки оборудования и материалов. На строительной площадке ИЗП будет установлено более 1,1 тыс. единиц оборудования от ведущих мировых производителей из Японии, Южной Кореи, Китая и России.', img: '/img/izp.webp' },
    { id: 2, name: 'Опоры по чертежам заказчика', projectName: 'Опоры газохода', quantity: '7 тонн', year: 2022, endUser: 'ООО "ОЗНО"', img: '/img/opt1.webp' },
    { id: 3, name: 'Опоры разгрузочные', projectName: 'Опора ОР по ТУ 25.11.23-011-73847543-2020', quantity: 'Три образца', year: 2021, endUser: 'ПАО Газпром', img: '/img/opt2.webp' },
    { id: 4, name: 'Тестовые образцы для ПАО Газпром', projectName: 'Опоры ОСП 1420', quantity: '2 тонны', year: 2021, endUser: 'ПАО Газпром', img: '/img/opt3.webp' },
    { id: 5, name: 'Опоры неподвижные в ППУ изоляции', projectName: 'Опоры типа 5-А для надземной прокладки с устройством электрообогрева', quantity: '12 тонн, 70 штук', year: 2021, endUser: 'Строительная компания', img: '/img/opt4.webp' },
    { id: 6, name: 'Мачта прожекторная', projectName: 'Мачта прожекторная H=35м', quantity: '196 тонн', year: 2020, endUser: 'ПАО НК Росснефть', img: '/img/opt5.webp' },
    { id: 7, name: 'Опоры КХ ИНК 18 тонн', projectName: 'Опоры КХ, ОПХ, ОПХ2', quantity: '18 тонн', year: 2020, endUser: 'Иркутская нефтяная компания', img: '/img/opt6.webp' },
    { id: 8, name: 'Опоры регулируемые', projectName: 'Опоры регулируемые', quantity: '65 тонн', year: 2020, endUser: 'ПАО Газпром', img: '/img/opt7.webp' },
    { id: 9, name: 'Серийные опоры', projectName: 'Серийные опоры', quantity: '43 тонны', year: 2020, endUser: 'Иркутская нефтяная компания', img: '/img/opt8.webp' },
    { id: 10, name: 'Ростверки для прожекторных мачт', projectName: 'Ростверки для прожекторных мачт', quantity: '20 тонн', year: 2020, endUser: 'ПАО АНК Башнефть', img: '/img/opt9.webp' },
    { id: 11, name: 'Опоры ОСП', projectName: 'Опоры ОСП', quantity: '43 тонны', year: 2020, endUser: 'ПАО НК Росснефть', img: '/img/opt10.webp' },
    { id: 12, name: 'Опоры ОППС', projectName: 'Опоры ОППС', quantity: '113 тонн', year: 2020, endUser: 'ПАО АНК Башнефть', img: '/img/opt11.webp' },
    { id: 13, name: 'Каркас блок-бокса для медицинских работников', projectName: 'Каркас блок-бокса для медицинских работников', quantity: '22 штуки', year: 2019, endUser: 'Администрация Челябинской области', img: '/img/opt12.webp' },
    { id: 14, name: 'Опоры ОПХ', projectName: 'Серийные опоры', quantity: '13 тонн', year: 2019, endUser: 'Иркутская нефтяная компания', img: '/img/opt13.webp' },
    { id: 15, name: 'Опоры ОСП, ОПП', projectName: 'Опоры ОСП, ОПП', quantity: '98 тонн', year: 2019, endUser: 'ПАО НК Росснефть', img: '/img/opt14.webp' },
    { id: 16, name: 'Серийные опоры', projectName: 'Серийные опоры', quantity: '20 тонн', year: 2019, endUser: 'Иркутская нефтяная компания', img: '/img/opt15.webp' },
    { id: 17, name: 'Опоры ОН в ППУ изоляции', projectName: 'Опоры ОН в ППУ изоляции', quantity: '60 тонн', year: 2019, endUser: 'ПАО АНК Башнефть', img: '/img/opt16.webp' },
    { id: 18, name: 'Опоры ОН в ППУ изоляции', projectName: 'Опоры ОН в ППУ изоляции', quantity: '10 тонн', year: 2018, endUser: 'ПАО АНК Башнефть', img: '/img/opt17.webp' },
    { id: 19, name: 'ОСП 1020', projectName: 'ОСП 1020', quantity: '237 тонн', year: 2017, endUser: 'ПАО Лукойл', img: '/img/opt18.webp' },
    { id: 20, name: 'Опоры ОБК100.720', projectName: 'Опоры ОБК100.720', quantity: '132 штук, 15 тонн.', year: 2017, endUser: 'ПАО Лукойл', img: '/img/opt19.webp' },
  ]


  const project = projects.map(el => ({ id: el.id, name: el.name, project: el.projectName, quantity: el.quantity, year: el.year, endUser: el.endUser, description: el.description, img: el.img, }))

  const data = await prisma.project.createMany({
    data: projects

  })
  return data
})





