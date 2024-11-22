<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const isAuthenticated = ref(localStorage.getItem('user') !== null);

const username = ref('');
const password = ref('');

const router = useRouter();

function login() {
  const correctUsername = 'Mauricio';
  const correctPassword = '12345';

  if (username.value === correctUsername && password.value === correctPassword) {
    localStorage.setItem('user', username.value);
    alert('Bienvenido!');
    isAuthenticated.value = true;
    window.location.reload();
  } else {
    alert('Credenciales incorrectas');
  }
}

function logout() {
  localStorage.removeItem('user');
  isAuthenticated.value = false;
  router.push('/login');
}
</script>
<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav v-if="isAuthenticated">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/producto">Productos</RouterLink>
        <RouterLink to="/categoria">Categoria</RouterLink>
        <RouterLink to="/cliente">Cliente</RouterLink>
        <RouterLink to="/empleado">Empleado</RouterLink>
        <RouterLink to="/venta">Ventas</RouterLink>
        <RouterLink to="/ventaDetalle">Detalle de Ventas</RouterLink>
        <button @click="logout">Salir</button>
      </nav>

      <div v-else class="login-form">
        <h3>Iniciar sesión</h3>
        <form @submit.prevent="login">
          <label for="username">Usuario</label>
          <input id="username" type="text" v-model="username" />
          
          <label for="password">Contraseña</label>
          <input id="password" type="password" v-model="password" />
          
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>
.wrapper {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
}

h3 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

label {
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

nav {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

nav a {
  color: #007BFF;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>
