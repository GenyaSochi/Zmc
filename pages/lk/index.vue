<template>
  <form v-if="!userStore.user" @submit.prevent class="lk">
    <div>
      <p class="entrance">Вход для сотрудников</p>
      <label for="login" class="text">Введите логин:</label>
      <input type="text" class="llk" v-model="email" required placeholder="электронная почта">
      <label for="login" class="text">Введите пароль:</label>
      <input type="password" class="llk" v-model="pass" required placeholder="пароль">
      <p v-if="message">{{ message }}</p>
      <div>
        <div>
          <button @click="logIn" type="submit" class="btn">войти</button>
          <NuxtLink to="/" class="btn">на сайт</NuxtLink>
        </div>
        <button @click="regIn" type="submit" class="btn">регистрация</button>
      </div>
    </div>
  </form>
  <div v-else>
    <AccountMenuComponent>
      <template #top>
        <h1 class="access">Доступ к управлению проектами</h1>
      </template>
    </AccountMenuComponent>
  </div>
</template>


<script setup lang="ts">
import md5 from 'md5'
const pass = ref('')
const email = ref('')
const userStore = useUser()
const message = ref('')


definePageMeta({
  layout: 'admin',
})

const logIn = async () => {
  message.value = await userStore.logIn(email.value, md5(pass.value))
}
const regIn = async () => {
  message.value = await userStore.regIn(email.value, md5(pass.value))
}

</script>



<style scoped>

.lk {
  height: 100%;
  max-width: 420px;
  padding: 40px 35px;
  border-radius: 20px;
  margin: 40px auto;
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  box-shadow: 
    0 15px 35px rgba(30, 58, 138, 0.12),
    0 5px 15px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(30, 58, 138, 0.1);
  position: relative;
  overflow: hidden;
}


.lk::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #8b5cf6 100%);
  border-radius: 20px 20px 0 0;
}

.lk::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(30, 58, 138, 0.03) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  z-index: 0;
}


.entrance {
  font-size: 28px;
  text-align: center;
  padding-bottom: 25px;
  margin-bottom: 30px;
  font-weight: 700;
  color: #1e293b;
  position: relative;
  z-index: 1;
}

.entrance::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #1e3a8a, #3b82f6);
  border-radius: 2px;
}


.text {
  font-size: 16px;
  font-weight: 600;
  color: #475569;
  margin: 20px 0 10px;
  padding-left: 5px;
  display: block;
  transition: color 0.3s ease;
  position: relative;
  z-index: 1;
}


.llk {
  color: #1e293b;
  height: 56px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #e2e8f0;
  margin: 5px 0 15px;
  padding: 0 20px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
}

.llk:focus {
  outline: none;
  border-color: #1e3a8a;
  box-shadow: 
    0 0 0 4px rgba(30, 58, 138, 0.1),
    0 5px 15px rgba(30, 58, 138, 0.1);
  background: white;
  transform: translateY(-1px);
}

.llk::placeholder {
  color: #94a3b8;
  font-weight: 400;
}


p[ v-if="message"] {
  background: linear-gradient(135deg, #fef3f2 0%, #fee2e2 100%);
  color: #dc2626;
  padding: 16px 20px;
  border-radius: 12px;
  margin: 25px 0;
  font-size: 15px;
  font-weight: 500;
  border-left: 4px solid #ef4444;
  animation: fadeIn 0.4s ease-out;
  box-shadow: 0 3px 10px rgba(239, 68, 68, 0.1);
  position: relative;
  z-index: 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.lk > div > div:last-of-type {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  position: relative;
  z-index: 1;
}

.lk > div > div:first-of-type {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 15px;
}


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
  margin: 10px;
}


.lk > div > div:first-of-type .btn:first-child {
  background: linear-gradient(135deg, #1e3a8a 0%, #2d4ba3 100%);
  color: white;
  box-shadow: 
    0 4px 15px rgba(30, 58, 138, 0.25),
    0 2px 4px rgba(30, 58, 138, 0.1);
}

.lk > div > div:first-of-type .btn:first-child:hover {
  transform: translateY(-3px);
  box-shadow: 
    0 8px 25px rgba(30, 58, 138, 0.35),
    0 4px 10px rgba(30, 58, 138, 0.2);
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
}

.lk > div > div:first-of-type .btn:first-child:active {
  transform: translateY(-1px);
  box-shadow: 
    0 2px 10px rgba(30, 58, 138, 0.25),
    0 1px 2px rgba(30, 58, 138, 0.1);
}


.lk > div > div:first-of-type .btn:last-child {
  background: white;
  color: #475569;
  border: 2px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.lk > div > div:first-of-type .btn:last-child:hover {
  transform: translateY(-3px);
  background: #f8fafc;
  border-color: #cbd5e1;
  color: #1e293b;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}


.lk > div > div:last-of-type .btn {
  background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
  color: #475569;
  border: 2px solid #e2e8f0;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.lk > div > div:last-of-type .btn:hover {
  transform: translateY(-3px);
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-color: #cbd5e1;
  color: #1e293b;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}


.btn:active {
  transform: translateY(-1px);
  transition: transform 0.1s ease;
}


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


.access {
  padding: 30px 0;
  color: #1e3a8a;
  font-weight: 800;
  font-size: 32px;
  text-align: center;
  margin: 0;
  position: relative;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.access::after {
  content: '';
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #1e3a8a, #3b82f6);
  border-radius: 2px;
}


@media (max-width: 768px) {
  .lk {
    max-width: 90%;
    padding: 35px 25px;
    margin: 30px auto;
  }
  
  .entrance {
    font-size: 24px;
  }
  
  .access {
    font-size: 28px;
    padding: 25px 20px;
  }
}

@media (max-width: 576px) {
  .lk {
    padding: 30px 20px;
    margin: 20px auto;
  }
  
  .entrance {
    font-size: 22px;
  }
  
  .text {
    font-size: 15px;
  }
  
  .llk {
    height: 52px;
    font-size: 15px;
    padding: 0 16px;
  }
  
  .btn {
    padding: 14px 20px;
    font-size: 15px;
  }
  
  .access {
    font-size: 24px;
    padding: 20px 15px;
  }
  
  .lk > div > div:first-of-type {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}


.lk {
  animation: slideUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.llk:focus-visible,
.btn:focus-visible {
  outline: 2px solid #1e3a8a;
  outline-offset: 2px;
}

.llk:focus {
  font-size: 16.5px;
}
</style>