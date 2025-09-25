import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
  const id = Number(event.context.params?.id)
  try {
    const product = await prisma.product.findUnique({
      where: {
        id
      }
    })
    return product
  } catch(err){
    return null
  }
})
