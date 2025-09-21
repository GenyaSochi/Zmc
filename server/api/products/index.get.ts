import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{

  const products = await prisma.product.findMany({
    select:{
      id:true,
      name:true
    }
  })

  return products

})