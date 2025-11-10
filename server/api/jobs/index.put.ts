import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
  try {
    let data = await readBody(event)
    const id = data.id
    delete data.id
		await prisma.job.update({
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