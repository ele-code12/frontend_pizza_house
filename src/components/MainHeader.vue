<script setup lang="ts">
import { ref } from 'vue'

const showSelect = ref(false)

function toggleSelect() {
  showSelect.value = !showSelect.value
}
</script>

<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="row">
        <!-- Brand and toggle get grouped for better mobile display -->
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
          <a class="navbar-brand">Pizza House</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav main-nav clear navbar-right">
            <li><a class="navactive color_animation" href="#top">INICIO</a></li>
            <li><a class="color_animation" href="#detalle-pedido">DETALLE PEDIDO</a></li>
            <li><a class="color_animation" href="#empleado">EMPLEADO</a></li>
            <li>
              <a class="color_animation product-btn" href="#producto" @click="toggleSelect">PRODUCTO</a>
              <div v-if="showSelect">
                <select class="form-control" aria-label="Seleccione una opción" style="width: 100%">
                  <option value="categoria_producto">Categoría Producto</option>
                  <option value="producto_ingrediente">Producto Ingrediente</option>
                </select>
              </div>
            </li>
            <li><a class="color_animation" href="#clientes">CLIENTES</a></li>
            <li><a class="color_animation" href="#promocion">PROMOCION</a></li>
            <li><a class="color_animation" href="#usuario">USUARIO</a></li>
            <li><a class="color_animation" href="#login">INICIAR SESION</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<style scoped>
.navbar-brand {
  font-size: 4rem;
  font-family: 'Pacifico', cursive;
  color: white !important;
  text-decoration: none;
  padding: 0;
  margin: 0;
}
</style>
