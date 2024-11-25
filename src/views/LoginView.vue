<template>
  <div class="login-container">
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
        <div class="password-container">
          <input
            :type="passwordVisible ? 'text' : 'password'"
            id="password"
            v-model="password"
            placeholder="Ingresa tu contraseña"
            required
          />
          <i
            class="pi"
            :class="passwordVisible ? 'pi-eye-slash' : 'pi-eye'"
            @click="togglePasswordVisibility"
          ></i>
        </div>
      </div>

      <button type="submit" class="login-button">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      correctUsername: 'Mauricio',
      correctPassword: '12345',
      passwordVisible: false,
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
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    }
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 150px auto 0;
  padding: 30px;
  background-color: #fff5e6;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.login-form {
  display: flex;
  flex-direction: column;
}

h2 {
  color: #000000;
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
}

label {
  color: #000000;
  font-size: 16px;
}

input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ff5733;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 5px;
}

input:focus {
  outline: none;
  border-color: #ff4500;
  box-shadow: 0 0 5px rgba(255, 69, 0, 0.6);
}

.password-container {
  position: relative;
}

.password-container i {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #ff5733;
}

button {
  padding: 12px;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff4500;
}

button:active {
  background-color: #e03c00;
}
</style>
