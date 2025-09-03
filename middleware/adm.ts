import { useUser } from "~/stores/useUser";
const userStore = useUser()//берем юзера из юзерстора

export default defineNuxtRouteMiddleware((to, from) => {
  if (!userStore.user && to.path.includes('\lk')){
    return navigateTo('/login')//если нет юзера и путь, куда он собирается перейти, содержит лк, тогда мы его отправляем на логин
  }
})