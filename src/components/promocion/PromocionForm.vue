<script setup lang="ts"></script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Promociones</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Promociones</h2>
      <div class="col-12">
        <RouterLink to="/promociones/crear">
          <font-awesome-icon icon="fa-solid fa-plus" /> Crear Nueva
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
