import prisma from "~/lib/prisma"
import * as bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    
    if (!data.login || !data.pass) {
      setResponseStatus(event, 400)
      return { error: 'Login and password required' }
    }

    // Ищем пользователя по login
    const user = await prisma.user.findUnique({
      where: { login: data.login }
    })

    // Проверяем пароль через bcrypt
    if (user && await bcrypt.compare(data.pass, user.pass)) {
      // Возвращаем данные без пароля
      const { pass, ...safeUser } = user
      return safeUser
    }

    setResponseStatus(event, 401)
    return { error: 'Invalid credentials' }

  } catch (error) {
    console.error('Login error:', error)
    setResponseStatus(event, 500)
    return { error: 'Server error' }
  }
})
