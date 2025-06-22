import { messagePopup } from "~/lib/nodemailer"

export default defineEventHandler(async (event) => {
    const data = event.context.fields
    const files = event.context.files

    messagePopup({...data, src:`http://localhost:3000/Zmc/files/${files[0].newFileName}` })

    return {message: 'Заявка отправлена'}
})

