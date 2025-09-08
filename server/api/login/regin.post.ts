import prisma from "~/lib/prisma";

export default defineEventHandler(async (event)=>{
  const data = await readBody(event)
  if (data.email && data.pass) {
    const user = await prisma.user.findUnique({
      select:{
        id:true,
      },
      where:{
        email: data.email
      }
    })
    return
  }
})