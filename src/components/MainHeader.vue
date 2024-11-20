<script setup lang="ts">
import { ref } from 'vue';

const showSelect = ref(false);

function toggleSelect() {
  showSelect.value = !showSelect.value;
}
</script>

<template>
  <header>
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="row">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav main-nav clear navbar-left">
              <li>
                <RouterLink to="/" class="navactive color_animation">INICIO</RouterLink>
              </li>
              <li>
                <RouterLink to="/clientes" class="navactive color_animation">CLIENTES</RouterLink>
              </li>
              <li>
                <RouterLink to="/pedidos" class="navactive color_animation">PEDIDOS</RouterLink>
              </li>
              <li>
                <RouterLink to="/detalle-pedido" class="navactive color_animation">DETALLE PEDIDO</RouterLink>
              </li>
              <li class="dropdown">
                <RouterLink
                  to="/productos"
                  class="navactive color_animation"
                  @click.prevent="toggleSelect"
                >
                  PRODUCTOS
                </RouterLink>
                <div v-if="showSelect" class="dropdown-menu">
                  <RouterLink to="/categoria-producto" class="dropdown-item">
                    CATEGORIA PRODUCTO
                  </RouterLink>
                  <RouterLink to="/producto-ingrediente" class="dropdown-item">
                    PRODUCTO INGREDIENTE
                  </RouterLink>
                </div>
              </li>
              <li>
                <RouterLink to="/promocion" class="navactive color_animation">PROMOCION</RouterLink>
              </li>
              <li>
                <RouterLink to="/usuario" class="navactive color_animation">USUARIO</RouterLink>
              </li>
              <li>
                <RouterLink to="/login" class="navactive color_animation">INICIAR SESION</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #333;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
}

.navbar-nav li {
  list-style: none;
}

.navbar-nav a {
  display: inline-block;
  padding: 12px 20px;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar-nav a:hover {
  background-color: #444;
  color: #ff6347;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 5px 0;
  min-width: 200px;
  z-index: 1000;
}

.dropdown-item {
  padding: 10px 15px;
  color: #fff;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: #444;
  color: #ff6347;
}
</style>
