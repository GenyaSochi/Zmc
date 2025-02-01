import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{

  const projects = await prisma.project.findMany({
    select:{
      name:true,  
    }
  })

  return {projects}

})