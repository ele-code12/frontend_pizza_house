<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Pedido } from '@/models/pedido'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const ENDPOINT = 'pedidos'
let pedidos = ref<Pedido[]>([])
const emit = defineEmits(['edit'])
const pedidoDelete = ref<Pedido | null>(null)
const mostrarConfirmDialog = ref<boolean>(false)

async function obtenerListaPedidos() {
  try {
    pedidos.value = await http.get(ENDPOINT).then((response) => response.data)
  } catch (error) {
    console.error('Error al obtener los pedidos:', error)
  }
}

function emitirEdicion(pedido: Pedido) {
  emit('edit', pedido)
}

function mostrarEliminarConfirm(pedido: Pedido) {
  pedidoDelete.value = pedido
  mostrarConfirmDialog.value = true
}

async function eliminarPedido() {
  if (pedidoDelete.value?.id) {
    await http.delete(`${ENDPOINT}/${pedidoDelete.value?.id}`)
    obtenerListaPedidos() 
    mostrarConfirmDialog.value = false
  }
}

onMounted(() => {
  obtenerListaPedidos()
})
</script>

<template>
  <div class="container">
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Empleado</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Total</th>
            <th>Promoción</th>
            <th>Dirección de Entrega</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pedido, index) in pedidos" :key="pedido.id">
            <td>{{ index + 1 }}</td>
            <td>{{ pedido.idCliente }}</td> 
            <td>{{ pedido.idEmpleado }}</td> 
            <td>{{ pedido.fecha }}</td> 
            <td>{{ pedido.estado }}</td>
            <td>{{ pedido.total }}</td>
            <td>{{ pedido.idPromocion }}</td>
            <td>{{ pedido.direccionEntrega }}</td>
            <td>
              <Button
                icon="pi pi-pencil"
                aria-label="Editar"
                text
                @click="emitirEdicion(pedido)"
                class="btn-editar"
              />
              <Button
                icon="pi pi-trash"
                aria-label="Eliminar"
                text
                @click="mostrarEliminarConfirm(pedido)"
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
        ¿Estás seguro de que deseas eliminar este pedido?
      </p>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          @click="mostrarConfirmDialog = false"
          class="btn-cancelar"
        />
        <Button type="button" label="Eliminar" @click="eliminarPedido" />
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
