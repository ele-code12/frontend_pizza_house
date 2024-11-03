<script setup lang="ts">
import { ref } from 'vue';
import http from '@/plugins/axios';
import router from '@/router';

const props = defineProps<{
  ENDPOINT_API: string;
}>();

const ENDPOINT = props.ENDPOINT_API ?? '';
const idProducto = ref('');
const idIngrediente = ref('');
const cantidad = ref('');
const fechaEliminacion = ref('');

async function crearProductoIngrediente() {
  await http
    .post(ENDPOINT, {
      idProducto: idProducto.value,
      idIngrediente: idIngrediente.value,
      cantidad: cantidad.value,
      fecha_eliminacion: fechaEliminacion.value
    })
    .then(() => router.push('/producto-ingredientes'));
}

function goBack() {
  router.go(-1);
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
        <li class="breadcrumb-item">
          <router-link to="/producto-ingredientes">Producto Ingredientes</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Producto Ingrediente</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearProductoIngrediente">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="idProducto" placeholder="ID Producto" required />
          <label for="idProducto">ID Producto</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="idIngrediente"
            placeholder="ID Ingrediente"
            required
          />
          <label for="idIngrediente">ID Ingrediente</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            v-model="cantidad"
            placeholder="Cantidad"
            required
          />
          <label for="cantidad">Cantidad</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="date"
            class="form-control"
            v-model="fechaEliminacion"
            placeholder="Fecha de Eliminación"
            required
          />
          <label for="fechaEliminacion">Fecha de Eliminación</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" /> Crear
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style scoped>
</style>
