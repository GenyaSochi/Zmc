import prisma from "~/lib/prisma"


export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params?.id)
    await prisma.job.delete({
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





