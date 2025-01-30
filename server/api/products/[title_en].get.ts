import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
  const title_en = event.context.params?.title_en 
  try {
    const product = await prisma.product.findUnique({
      where: {
        title_en
      }
    })
    return product
  } catch(err){
    return null
  }
})

