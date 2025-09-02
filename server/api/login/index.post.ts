import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    
    if (!data.email || !data.pass) {
      return null    
    }

    // Ищем пользователя по login
    const user = await prisma.user.findUnique({
      where: { email: data.email }
    })

   
    if (user && data.pass==user.pass) {
      // Возвращаем данные без пароля
      const { pass, ...safeUser } = user      
      return safeUser
    }  
    return null

  } catch (error) {
    console.error('Login error:', error)
    return null
  }
})
