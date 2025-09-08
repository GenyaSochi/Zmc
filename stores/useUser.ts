import { ref } from 'vue'

interface User {
  id: number;
  email: string;
  token: string
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
    // navigateTo('/lk') // Перенаправляем на страницу входа
  }
  const logIn = async (email: string, pass: string) => {
    //console.log(email, pass)
    user.value = await $fetch<User | undefined>('/api/login', {
      method: 'POST',
      body: { email, pass }
    })
    // console.log(user.value)
    if (user.value) {
      const userToLocal = { ...user.value }
      // @ts-ignore
      localStorage.user = JSON.stringify(userToLocal)
      return ''
    } else {
      return 'Проверьте логин либо пароль'
    }
  }

  const regIn = async (email: string, pass: string) => {
    user.value = await $fetch<User | undefined>('/api/regin', {
      method: 'POST',
      body: { email, pass }
    })
    if (user.value) {
      localStorage.user = JSON.stringify(user.value)
      return ''
    } else {
      return 'Проверьте логин либо пароль'
    }      
  } 

  const autoLogin = async () => {
    if (localStorage.user) {
      const tempUser = JSON.parse(localStorage.user)
      const data = await $fetch<regData>('/api/autologin', {
        method: 'POST',
        body: { ...tempUser }//если в локалсторо  ж есть юзер, мы его достаем и проверяем
      })
      if (data.ok) {
        user.value = data.user
      }
    }
  }
  return { user, logIn, logOut, autoLogin, regIn }
})