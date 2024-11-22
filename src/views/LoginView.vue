<template>
<!--   <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Iniciar sesión</h2>

      <div class="input-group">
        <label for="username">Usuario</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Ingresa tu usuario"
          required
        />
      </div>

      <div class="input-group">
        <label for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>

      <button type="submit" class="login-button">Iniciar sesión</button>
    </form>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      correctUsername: 'Mauricio', 
      correctPassword: '12345',
    };
  },
  methods: {
    handleLogin() {
      if (this.username === this.correctUsername && this.password === this.correctPassword) {
        localStorage.setItem('authenticated', 'true');
        alert('Inicio de sesión exitoso');
        this.$router.push('/');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
