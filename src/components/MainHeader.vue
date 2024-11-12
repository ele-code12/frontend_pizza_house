<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/index'
const authStore = useAuthStore()
const location = useRoute()
</script>

<template>
  <!-- ***** Header Area Start ***** -->
  <header
    class="header-area header-sticky wow slideInDown"
    data-wow-duration="0.75s"
    data-wow-delay="0s"
  >
    <div class="container">
      <div class="row">
        <!-- Aquí está el col-12 que sirve como menú dentro del header -->
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <RouterLink to="/" class="logo">
              <img src="../assets/images/logo-pizza.avif" alt="" width="70" height="70" />
            </RouterLink>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section">
                <RouterLink to="/" class="nav-link click-scroll">Inicio</RouterLink>
              </li>
              <slot v-if="authStore.token">
                <li class="scroll-to-section dropdown">
                  <a href="#" class="nav-link">Menú</a>
                  <ul class="dropdown-menu">
                    <li>
                      <RouterLink to="/categoriasProducto" class="nav-link click-scroll">Categorías Producto</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/productos" class="nav-link click-scroll">Productos</RouterLink>
                    </li>
                  </ul>
                </li>
                <li class="scroll-to-section dropdown">
                  <a href="#" class="nav-link">Promociones</a>
                  <ul class="dropdown-menu">
                    <li>
                      <RouterLink to="/promociones" class="nav-link click-scroll">Promociones</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/ventas" class="nav-link click-scroll">Ventas</RouterLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <RouterLink to="/clientes" class="nav-link click-scroll">Clientes</RouterLink>
                </li>
                <li v-if="authStore.user == 'Administrador'" class="scroll-to-section dropdown">
                  <a href="#" class="nav-link">Administración</a>
                  <ul class="dropdown-menu">
                    <li>
                      <RouterLink to="/empleados" class="nav-link click-scroll">Empleados</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/usuarios" class="nav-link click-scroll">Usuarios</RouterLink>
                    </li>
                  </ul>
                </li>
                <li class="scroll-to-section">
                  <div class="border-first-button">
                    <RouterLink
                      v-if="!authStore.token"
                      to="/login"
                      class="btn custom-btn d-lg-none ms-auto me-4"
                    >
                      Iniciar Sesión
                    </RouterLink>
                    <a
                      v-else
                      @click="authStore.logout()"
                      class="btn custom-btn d-lg-none ms-auto me-4"
                    >
                      Salir
                    </a>
                  </div>
                </li>
              </slot>
            </ul>
            <a class="menu-trigger">
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
</template>

<style scoped>

.nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
}

.nav li {
  position: relative;
  padding: 10px 20px;
}

.nav .dropdown .dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.nav .dropdown:hover .dropdown-menu {
  display: block;
}

.nav .dropdown-menu li {
  padding: 10px;
}

.nav .dropdown-menu li a {
  color: black;
  text-decoration: none;
}

.nav .dropdown-menu li a:hover {
  background-color: #f8f8f8;
}

.social-media li {
  display: inline-block;
  margin-right: 10px;
}

.social-media li a {
  color: black;
  text-decoration: none;
}

.social-media li a:hover {
  color: #35485c;
}

.pre-header {
  display: none;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
  background-color: white;
  padding: 15px 0; 
  position: fixed; 
  top: 0; 
  left: 0; 
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo {
  margin-left: auto; 
}

.logo img {
  height: 70px;
  width: 70px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  padding: 10px 20px;
  display: block;
}

.nav-link:hover {
  background-color: #f0f0f0;
}

.header-area.sticky {
  background-color: #fff; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
