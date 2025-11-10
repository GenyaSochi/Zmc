import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{

  const jobs = await prisma.job.findMany({
  })

  return jobs

})