import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
  try {
    const projects = await prisma.project.findMany({})
    return {projects}
  } catch(err){
    return {projects: null, err}
  }
})
