<script setup lang="ts">
import { ref } from 'vue';

const showSelect = ref(false);

// Alternar la visibilidad del select al hacer clic en Productos
function toggleSelect() {
  showSelect.value = !showSelect.value;
}
</script>

<template>
  <header>
    <!-- Navigation bar -->
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
            <ul class="nav navbar-nav main-nav clear navbar-right">
              <!-- Updated items -->
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
              <li>
                <a @click.prevent="toggleSelect" class="navactive color_animation" href="#">
                  PRODUCTOS
                </a>
                <div v-if="showSelect">
                  <select class="form-control" aria-label="Seleccione una opción">
                    <option value="categoria_producto">Categoría Producto</option>
                    <option value="producto_ingrediente">Producto Ingrediente</option>
                  </select>
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
/* General navbar styling */
.navbar {
  background-color: #333;
  padding: 10px 0;
}

.navbar-nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
}

.navbar-nav li {
  list-style: none;
}

.navbar-nav a {
  display: inline-block;
  padding: 10px 15px;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar-nav a:hover {
  background-color: #444;
  color: #ff6347;
}

select.form-control {
  width: auto;
  margin-top: 10px;
  padding: 5px;
}
</style>
