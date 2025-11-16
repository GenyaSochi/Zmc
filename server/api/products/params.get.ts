import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
  try {
    const type = await prisma.type.findMany({})
    const out = await prisma.out.findMany({})
    return { type, out}
  } catch(err){
    return null
  }
})
