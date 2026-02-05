<template>
  <div class="proj_all">
    <div>
      <slot name="top"></slot>
    </div>
    <NuxtLink to="/lk/projects">Проект</NuxtLink><br>
    <NuxtLink to="/lk/products">Продукт</NuxtLink><br>
    <NuxtLink to="/lk/jobs">Вакансии</NuxtLink><br>
    <NuxtLink to="/lk">Личный кабинет</NuxtLink><br>
    <NuxtLink v-if="userStore.user?.admin" to="/lk/users">Пользователи</NuxtLink>
    <div class="buttons" style="display: flex; padding: 10px 0; gap: 10px; flex-direction: column;">
      <button @click="userStore.logOut" type="submit" class="btn">Выход</button>
      <NuxtLink to="/" class="btn">На сайт</NuxtLink>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUser()
</script>

<style scoped>
/* Основной контейнер */
.proj_all {
  padding: 40px 35px 35px 40px;
  border: 2px solid #e2e8f0;
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  max-width: 800px;
  max-height: 1100px;
  border-radius: 20px;
  margin: 40px auto;
  box-shadow: 
    0 10px 30px rgba(30, 58, 138, 0.08),
    0 5px 15px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 50px;
  align-items: start;
}

/* Декоративный элемент */
.proj_all::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #8b5cf6 100%);
  border-radius: 20px 20px 0 0;
}

/* Навигационные ссылки */
.proj_all > a {
  display: block;
  color: #475569;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  padding: 14px 20px;
  margin: 6px 0;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}

/* Убираем <br> */
.proj_all > br {
  display: none;
}

/* Эффект наведения для ссылок */
.proj_all > a:hover {
  color: #1e3a8a;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(30, 58, 138, 0.02) 100%);
  border-color: rgba(30, 58, 138, 0.1);
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(30, 58, 138, 0.08);
}

/* Активная ссылка (можно добавить через :active или router-link-active) */
.proj_all > a.router-link-active,
.proj_all > a.nuxt-link-active {
  color: white;
  background: linear-gradient(135deg, #1e3a8a 0%, #2d4ba3 100%);
  box-shadow: 
    0 4px 12px rgba(30, 58, 138, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border-color: #1e3a8a;
}

/* Ссылка для админа */
.proj_all > a[v-if] {
  margin-top: 25px;
  padding-top: 16px;
  border-top: 2px solid #e2e8f0;
  position: relative;
}

.proj_all > a[v-if]::before {
  content: 'Админ';
  position: absolute;
  top: -12px;
  left: 20px;
  background: #ef4444;
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 10px;
  letter-spacing: 0.5px;
}

/* Блок кнопок */
.buttons {
  padding: 40px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  grid-column: 1;
  margin-top: 30px;
}

/* Кнопки */
.btn {
  border: none;
  padding: 16px 24px;
  text-align: center;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.3px;
}

/* Кнопка Выход */
.buttons .btn:first-child {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  box-shadow: 
    0 4px 15px rgba(239, 68, 68, 0.25),
    0 2px 4px rgba(239, 68, 68, 0.1);
  margin-top: 20px;
}

.buttons .btn:first-child:hover {
  transform: translateY(-3px);
  box-shadow: 
    0 8px 25px rgba(239, 68, 68, 0.35),
    0 4px 10px rgba(239, 68, 68, 0.2);
  background: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
}

/* Кнопка На сайт */
.buttons .btn:last-child {
  background: white;
  color: #475569;
  border: 2px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.buttons .btn:last-child:hover {
  transform: translateY(-3px);
  background: #f8fafc;
  border-color: #cbd5e1;
  color: #1e293b;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

/* Эффект нажатия для кнопок */
.btn:active {
  transform: translateY(-1px);
  transition: transform 0.1s ease;
}

/* Эффект волны при клике */
.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}

.btn:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  20% {
    transform: scale(25, 25);
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
}

/* Слот для контента */
.proj_all > div:first-child {
  grid-column: 2;
  grid-row: 1 / span 100;
  padding: 10px 0 0 20px;
  border-left: 2px solid #e2e8f0;
  min-height: 500px;
}

/* Слот для дополнительного контента в кнопках */
.buttons > slot {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}

/* Анимация появления */
.proj_all {
  animation: slideIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Адаптивность */
@media screen and (max-width: 850px) {
  .proj_all {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 35px 25px;
    margin: 30px 20px;
    max-height: auto;
  }
  
  .proj_all > div:first-child {
    grid-column: 1;
    grid-row: 2;
    border-left: none;
    border-top: 2px solid #e2e8f0;
    padding: 30px 0 0 0;
    margin-top: 20px;
  }
  
  .buttons {
    grid-column: 1;
    padding: 20px 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
  
  .buttons .btn {
    flex: 1;
    min-width: 160px;
  }
  
  .proj_all > a {
    display: inline-block;
    margin: 0 10px 10px 0;
    padding: 12px 18px;
    font-size: 16px;
  }
  
  .proj_all > a[v-if] {
    margin-top: 15px;
    display: block;
  }
}

@media screen and (max-width: 576px) {
  .proj_all {
    padding: 25px 20px;
    margin: 20px 15px;
    border-radius: 16px;
  }
  
  .proj_all > a {
    display: block;
    margin: 0 0 8px 0;
    padding: 12px 16px;
    font-size: 15px;
  }
  
  .buttons {
    flex-direction: column;
  }
  
  .buttons .btn {
    width: 100%;
  }
  
  .btn {
    padding: 14px 20px;
    font-size: 15px;
  }
}

/* Улучшение фокуса для доступности */
.proj_all > a:focus-visible,
.btn:focus-visible {
  outline: 2px solid #1e3a8a;
  outline-offset: 2px;
  border-radius: 12px;
}

/* Эффект для активной страницы (нужно добавить класс через JS) */
.proj_all > a.active {
  color: white;
  background: linear-gradient(135deg, #1e3a8a 0%, #2d4ba3 100%);
  box-shadow: 
    0 4px 12px rgba(30, 58, 138, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border-color: #1e3a8a;
}

/* Индикатор новой страницы */
.proj_all > a::after {
  content: '→';
  position: absolute;
  right: 20px;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.proj_all > a:hover::after {
  opacity: 0.7;
  transform: translateX(0);
}
</style>