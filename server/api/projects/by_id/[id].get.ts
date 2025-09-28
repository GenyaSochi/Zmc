import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
  const id = Number(event.context.params?.id)
  try {
    const project = await prisma.project.findUnique({
      where: {
        id
      }
    })
    return project
  } catch(err){
    return null
  }
})
