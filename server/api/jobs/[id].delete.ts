import prisma from "~/lib/prisma"


export default defineEventHandler(async (event) => {
  try {
    let data = await readBody(event)
    await prisma.job.create({
		 	data,
    })
		return true
	} catch(e) {
		console.log(e)
		return false
	}  
})





