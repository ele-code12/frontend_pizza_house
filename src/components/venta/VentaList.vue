<script setup lang="ts">
import type { Venta } from '@/models/venta'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { onMounted, ref } from 'vue'

const ENDPOINT = 'ventas'
let ventas = ref<Venta[]>([])
const emit = defineEmits(['edit'])
const ventaDelete = ref<Venta | null>(null)
const mostrarConfirmDialog = ref<boolean>(false)

async function obtenerLista() {
  ventas.value = await http.get(ENDPOINT).then((response) => response.data)
}

function emitirEdicion(venta: Venta) {
  emit('edit', venta)
}

function mostrarEliminarConfirm(venta: Venta) {
  ventaDelete.value = venta
  mostrarConfirmDialog.value = true
}

async function eliminar() {
  await http.delete(`${ENDPOINT}/${ventaDelete.value?.id}`)
  obtenerLista()
  mostrarConfirmDialog.value = false
}

onMounted(() => {
  obtenerLista()
})
defineExpose({ obtenerLista })

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
</script>

<template>
  <div class="ventas-grid">
    <div v-for="(venta, index) in ventas" :key="venta.id" class="venta-card">
      <div class="venta-header">
        <h3>{{ venta.cliente.nombres }}</h3>
        <p>{{ venta.producto.nombre }}</p>
      </div>
      <div class="venta-body">
        <p><strong>Empleado:</strong> {{ venta.empleado.nombres }}</p>
        <p><strong>Cantidad:</strong> {{ venta.cantidad }}</p>
        <p><strong>Precio Unitario:</strong> {{ venta.precioUnitario | currency }}</p>
        <p><strong>Total Venta:</strong> {{ venta.totalVenta | currency }}</p>
        <p><strong>Fecha de Venta:</strong> {{ formatDate(venta.fechaCreacion) }}</p>
      </div>
      <div class="venta-actions">
        <Button icon="pi pi-pencil" aria-label="Editar" @click="emitirEdicion(venta)" />
        <Button icon="pi pi-trash" aria-label="Eliminar" @click="mostrarEliminarConfirm(venta)" />
      </div>
    </div>
  </div>

  <Dialog v-model:visible="mostrarConfirmDialog" header="Confirmar Eliminación" :style="{ width: '25rem' }">
    <p>¿Estás seguro de que deseas eliminar este registro?</p>
    <div class="flex justify-end gap-2">
      <Button type="button" label="Cancelar" severity="secondary" @click="mostrarConfirmDialog = false" />
      <Button type="button" label="Eliminar" @click="eliminar" />
    </div>
  </Dialog>
</template>

<style scoped>
.ventas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Cuadrícula responsiva */
  gap: 16px;
  padding: 20px;
}

.venta-card {
  background-color: #333;
  color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.venta-header h3,
.venta-header p,
.venta-body p {
  color: white; /* Asegura que los textos en estas secciones sean blancos */
}

.venta-header h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.venta-header p {
  font-size: 14px;
  margin-bottom: 16px;
}

.venta-body p {
  margin: 4px 0;
}

.venta-actions {
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
}

.venta-actions .p-button {
  margin: 0 4px;
}
</style>
