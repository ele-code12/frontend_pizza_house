<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { DetallePedido } from '@/models/detallePedido';
import http from '@/plugins/axios';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

const ENDPOINT = 'detalle_pedido';
let detallesPedido = ref<DetallePedido[]>([]); 
const emit = defineEmits(['edit']);
const detallePedidoDelete = ref<DetallePedido | null>(null);
const mostrarConfirmDialog = ref<boolean>(false);


async function obtenerLista() {
  detallesPedido.value = await http.get(ENDPOINT).then((response) => {
    console.log(response.data); 
    return response.data; 
  });
}

function emitirEdicion(detallePedido: DetallePedido) {
  emit('edit', detallePedido);
}

function mostrarEliminarConfirm(detallePedido: DetallePedido) {
  detallePedidoDelete.value = detallePedido;
  mostrarConfirmDialog.value = true;
}
async function eliminar() {
  await http.delete(`${ENDPOINT}/${detallePedidoDelete.value?.idPedido}`);
  obtenerLista(); 
  mostrarConfirmDialog.value = false;
}


onMounted(() => {
  obtenerLista();
  console.log(detallesPedido.value); 
});
</script>

<template>
  <div class="container">
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>N°</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Descuento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="detallesPedido.length === 0">
            <td colspan="6">No hay detalles de pedidos disponibles.</td>
          </tr>
          <tr v-for="(detalle, index) in detallesPedido" :key="detalle.idPedido">
            <td>{{ index + 1 }}</td>
            <td>{{ detalle.idProducto }}</td>
            <td>{{ detalle.cantidad }}</td>
            <td>{{ detalle.precioUnitario }}</td>
            <td>{{ detalle.descuento }}</td>
            <td>
              <Button 
                icon="pi pi-pencil" 
                aria-label="Editar" 
                text 
                @click="emitirEdicion(detalle)" 
                class="btn-editar" 
              />
              <Button 
                icon="pi pi-trash" 
                aria-label="Eliminar" 
                text 
                @click="mostrarEliminarConfirm(detalle)" 
                class="btn-eliminar" 
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Dialog v-model:visible="mostrarConfirmDialog" header="Confirmar Eliminación" :style="{ width: '25rem' }">
      <p class="texto-eliminar">¿Estás seguro de que deseas eliminar este registro?</p>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancelar" @click="mostrarConfirmDialog = false" class="btn-cancelar" />
        <Button type="button" label="Eliminar" @click="eliminar" />
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
  color: white;
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
