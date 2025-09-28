import prisma from "~/lib/prisma"
import translit from "~/lib/translit"

export default defineEventHandler(async (event)=>{
  try {
		const data = await readBody(event)
		data.title_en = translit(data.title)
		await prisma.product.create({
		 	data
		})
		return true
	} catch(e) {
		console.log(e)
		return false
	}
})