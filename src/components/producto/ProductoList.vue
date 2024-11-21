<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Producto } from '@/models/producto'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const ENDPOINT = 'productos'
let productos = ref<Producto[]>([])
const emit = defineEmits(['edit'])
const productoDelete = ref<Producto | null>(null)
const mostrarConfirmDialog = ref<boolean>(false)

async function obtenerListaProductos() {
  try {
    productos.value = await http.get(ENDPOINT).then((response) => response.data)
  } catch (error) {
    console.error('Error al obtener los productos:', error)
  }
}

function emitirEdicion(producto: Producto) {
  emit('edit', producto)
}

function mostrarEliminarConfirm(producto: Producto) {
  productoDelete.value = producto
  mostrarConfirmDialog.value = true
}

async function eliminarProducto() {
  if (productoDelete.value?.id) {
    await http.delete(`${ENDPOINT}/${productoDelete.value?.id}`)
    obtenerListaProductos()
    mostrarConfirmDialog.value = false
  }
}

onMounted(() => {
  obtenerListaProductos()
})
</script>

<template>
  <div class="container">
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Disponibilidad</th>
            <th>Tamaño</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in productos" :key="producto.id">
            <td>{{ index + 1 }}</td>
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.precio }}</td>
            <td>{{ producto.disponibilidad }}</td>
            <td>{{ producto.tamanio }}</td>
            <td>{{ producto.categoriaProducto.nombre }}</td>
            <td>
              <Button
                icon="pi pi-pencil"
                aria-label="Editar"
                text
                @click="emitirEdicion(producto)"
                class="btn-editar"
              />
              <Button
                icon="pi pi-trash"
                aria-label="Eliminar"
                text
                @click="mostrarEliminarConfirm(producto)"
                class="btn-eliminar"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Dialog
      v-model:visible="mostrarConfirmDialog"
      header="Confirmar Eliminación"
      :style="{ width: '25rem' }"
    >
      <p class="texto-eliminar">
        ¿Estás seguro de que deseas eliminar este producto?
      </p>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          @click="mostrarConfirmDialog = false"
          class="btn-cancelar"
        />
        <Button type="button" label="Eliminar" @click="eliminarProducto" />
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.btn-editar {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  transition: background-color 0.3s;
}

.btn-editar:hover {
  background-color: #0056b3;
}

.btn-eliminar {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  transition: background-color 0.3s;
}

.btn-eliminar:hover {
  background-color: #c82333;
}

.texto-eliminar {
  color: black;
}

.btn-cancelar {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
}

.btn-cancelar:hover {
  background-color: #ff0019;
}
</style>
