import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
  try {
    let data
    if (event.context.fields) {
      data = JSON.parse(event.context.fields.data)
      if (event.context.files.lenght) data.img = '/img/' + event.context.files[0].newFileName
    } else {
      const fd = await readFormData(event)
      const fdData = Object.fromEntries(fd.entries())
      data = JSON.parse(fdData.data as string)
    }
    const id = data.id
    delete data.id
		await prisma.project.update({
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