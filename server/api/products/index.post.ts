import prisma from "~/lib/prisma"
import translit from "~/lib/translit"

export default defineEventHandler(async (event)=>{
  try {
    let data
    if (event.context.fields) {
      data = JSON.parse(event.context.fields.data)
      data.img = '/img/' + event.context.files[0].newFileName
			data.title_en = translit(data.title)
			await prisma.product.create({
				data,
			})
			return true
		}
		return true
	} catch(e) {
		console.log(e)
		return false
	}
})