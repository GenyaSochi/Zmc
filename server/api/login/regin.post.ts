import prisma from "~/lib/prisma";

export default defineEventHandler(async (event)=>{
  const data = await readBody(event)
  if (data.email && data.pass) {
    const newUser = await prisma.user.findUnique({
      select:{
        id:true,
      },
      where:{
        email: data.email
      }
    })
    if(newUser){
      return{ok: false, user:null, massage:'not unique'}
    }
       const user = await prisma.user.create({
        data
    })
    return {ok: true, user , massage:''}
  }else {
    return {
      error: 'not found'
    }
  }
})