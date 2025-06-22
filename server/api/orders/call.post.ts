import { scrypt } from "crypto"
import { callPopup } from "~/lib/nodemailer"

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    if (data.name && data.phone) {
        try {
            callPopup(data)
            return {ok:true, message:'Заявка отправлена'}
        } catch (e) {
            return {ok:false, message:'ошибка'}
        }
    } else {
        return {ok:false, message:'не заполнен телефон или имя'}
    }
})

