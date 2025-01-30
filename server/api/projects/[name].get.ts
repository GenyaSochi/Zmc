import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
  const name = event.context.params?.name 
  try {
    const project = await prisma.project.findMany({
      where: {
        name
      }
    })
    return {project}
  } catch(err){
    return {project: null, err}
  }
})
