<script setup lang="ts">
import type { ProductoIngrediente } from '@/models/productoIngrediente'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var productoIngredientes = ref<ProductoIngrediente[]>([])

async function getProductoIngredientes() {
  productoIngredientes.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/producto-ingredientes/editar/${id}`)
}

async function toDelete(id: number) {
  const confirmDelete = confirm('¿Está seguro que se desea eliminar el Producto Ingrediente?')
  if (confirmDelete) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getProductoIngredientes())
  }
}

onMounted(() => {
  getProductoIngredientes()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Productos Ingredientes</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Productos Ingredientes</h2>
      <div class="col-12">
        <router-link to="/producto-ingredientes/crear">
          <font-awesome-icon icon="fa-solid fa-plus" /> Crear Nuevo
        </router-link>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">ID Producto</th>
            <th scope="col">ID Ingrediente</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Fecha de Eliminación</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(productoIngrediente, index) in productoIngredientes"
            :key="productoIngrediente.id"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ productoIngrediente.idProducto }}</td>
            <td>{{ productoIngrediente.idIngrediente }}</td>
            <td>{{ productoIngrediente.cantidad }}</td>
            <td>{{ productoIngrediente.fecha_eliminacion }}</td>
            <td>
              <button class="btn btn-link" @click="toEdit(productoIngrediente.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-link" @click="toDelete(productoIngrediente.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
