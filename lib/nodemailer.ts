import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transport = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'tk-ural@mail.ru',
    pass: process.env.PASS,
  },
})

let confirm = async (mail: string, key: string) => {
  await transport.sendMail({
    from: '"no-reply allEstate.pro" <service@allestate.pro',
    to: mail,
    subject: 'Подтверждение email ✔',
    html: `
    <p style="text-align:center; ">Для подтверждения email прейдите по <a style="color:#F0723B" href="https://allestate.pro/auth/confirm/${key}">ссылке</a></p>
    `,
  })
}

let resetPass = async (mail: string, key: string) => {
  await transport.sendMail({
    from: '"no-reply allEstate.pro" <service@allestate.pro',
    to: mail,
    subject: 'Восстановление доступа ✔',
    html: `
    <p style="text-align:center; ">Для восстановления доступа к учетной записи прейдите по <a style="color:#F0723B" href="https://allestate.pro/auth/reset/${key}">ссылке</a></p>
    <p style="text-align:center; ">Ссылка доступна в течение двух часов</p>
    `,
  })
}

let setPass = async (mail: string, key: string, site:string) => {
  await transport.sendMail({
    from: '"no-reply allEstate.pro" <service@allestate.pro',
    to: mail,
    subject: `Устаноаить пароль для доступа к ${site} ✔`,
    html: `
    <p style="text-align:center; ">Для установки пароля к учетной записи прейдите по <a style="color:#F0723B" href="${site}/auth/reset/${key}">ссылке</a></p>
    <p style="text-align:center; ">Ссылка доступна в течение двух суток</p>
    `,
  })
}

let callPopup = async (data:any) => {
  await transport.sendMail({
    from: '"no-reply zmc-ural" <tk-ural@mail.ru>',
    to: 'eunasedkina@gmail.com',
    subject: `Заявка на обратный звонок`,
    html: `
    <table>
      <tbody>
        <tr>
          <td>Имя</td>
          <td>${data?.name}</td>
        </tr>
        <tr>
          <td>Телефон</td>
          <td>${data?.phone}</td>
        </tr>
        </tbody>
        </table>
        `,
    })
}

let messagePopup = async (data:any) => {
    await transport.sendMail({
        from: '"no-reply zmc-ural" <tk-ural@mail.ru>',
        to: 'eunasedkina@gmail.com',
        subject: `Заявка на рассчет`,
        html: `
        <table>
        <tbody>
            <tr>
                <td>Имя</td>
                <td>${data?.name}</td>
            </tr>
            <tr>
                <td>Телефон</td>
                <td>${data?.phone}</td>
            </tr>
            <tr>
                <td>Файл</td>
                <td>${data?.src}</td>
            </tr>
        </tbody>
        </table>
        `,
    })
}

export { confirm, resetPass, callPopup, messagePopup, setPass }