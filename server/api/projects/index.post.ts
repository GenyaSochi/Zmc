import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
  try {
    let data
    if (event.context.fields) {
      data = JSON.parse(event.context.fields.data)
      data.img = '/img/' + event.context.files[0].newFileName
      await prisma.project.create({
         data
      })
      return true
    } 
    return false
	} catch(e) {
		console.log(e)
		return false
	}
})