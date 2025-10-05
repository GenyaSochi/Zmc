import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{


  const users = await prisma.user.findMany({
    select:{
      id:true,
      email:true,
      active: true,
      admin: true
    }
  })

  return users

})