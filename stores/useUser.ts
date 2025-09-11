import { ref } from 'vue'

interface User {
  id: number;
  email: string;
  token: string
  active: boolean
  admin: boolean
}

interface regData {
  ok: boolean;
  user: User;
  massage: string;
}

export const useUser = defineStore('useUser', () => {
  const user = ref(undefined as undefined | User)
  const logOut = () => {
    user.value = undefined // Сбрасываем состояние пользователя
    delete localStorage.user // Удаляем пользователя из localStorage
    navigateTo('/lk') // Перенаправляем на страницу входа
  }
  const logIn = async (email: string, pass: string) => {
    //console.log(email, pass)
    const tempUser = await $fetch<User | undefined>('/api/login', {
      method: 'POST',
      body: { email, pass }
    })
    // console.log(user.value)
    if (tempUser && tempUser.active) {
      user.value = tempUser
      const userToLocal = { ...user.value }
      // @ts-ignore
      localStorage.user = JSON.stringify(userToLocal)
      return ''
    } else if (tempUser && !tempUser.active) {
      return 'Учетная запись не активирована. Обратитесь к администратору'
    } else {
      return 'Проверьте логин либо пароль'
    }
  }

  const regIn = async (email: string, pass: string) => {
    const data = await $fetch<regData>('/api/login/regin', {
      method: 'POST',
      body: { email, pass }
    })
    if (data.ok) {
      return 'Регистрация успешна. Обратитесь к администратору для активации учетной записи. '
    } else {
      return data?.massage
    }         
  } 

  const autoLogin = async () => {
    if (localStorage.user) {
      const tempUser = JSON.parse(localStorage.user)
      const data = await $fetch<regData>('/api/login/autologin', {
        method: 'POST',
        body: { ...tempUser }//если в локалсторадж  уже есть юзер, мы его достаем и проверяем
      }) 

      if (data.ok) {
        user.value = data.user
      }
    }
  }
  return { user, logIn, logOut, autoLogin, regIn }
})