import { callPopup } from "~/lib/nodemailer"

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    if (data.name && data.phone) {
        try {
            callPopup(data)
            return {ok:true, message:'zayavka otpravlena'}
        } catch (e) {
            return {ok:false, message:'oshibka'}
        }
    } else {
        return {ok:false, message:'ne zapolnen tel or name'}
    }
})