import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    
    if (!data.email || !data.pass) {
      return { ok:false, user:null, massage: 'Email and password required' }
      // setResponseStatus(event, 400)
      // return { error: 'Login and password required' }
    }

    // Ищем пользователя по login
    const user = await prisma.user.findUnique({
      where: { email: data.email }
    })

    // Проверяем пароль через bcrypt
    if (user && data.pass==user.pass) {
      // Возвращаем данные без пароля
      const { pass, ...safeUser } = user
      return { ok:true, user:safeUser }
    }

    return { ok:false, user:null, massage: 'Invalid credentials' }

  } catch (error) {
    console.error('Login error:', error)
    return { ok:false, user:null, error: 'Server error' }
  }
})
