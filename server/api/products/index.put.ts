import prisma from "~/lib/prisma"
import translit from "~/lib/translit"

export default defineEventHandler(async (event)=>{
  try {
    let data
    if (event.context.fields) {
      data = JSON.parse(event.context.fields.data)
      data.img = '/img/' + event.context.files[0].newFileName
    } else {
      const fd = await readFormData(event)
      const fdData = Object.fromEntries(fd.entries())
      data = JSON.parse(fdData.data as string)
    }
    data.title_en = translit(data.title)
    const id = data.id
    delete data.id
		await prisma.product.update({
		 	data,
      where: {
        id
      }
		})
		return true
	} catch(e) {
		console.log(e)
		return false
	}
})