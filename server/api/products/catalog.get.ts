import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{

  const types = await prisma.type.findMany({
    include:{
      outs:true,
    }
  })
  const products = await prisma.product.findMany({
    select:{
      name:true,
      title_en:true,
      out_id: true,
      type_id:true
    }
  })

  return {types, products}

})