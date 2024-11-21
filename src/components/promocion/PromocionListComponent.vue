<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Promocion } from '@/models/promocion'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const ENDPOINT = 'promociones'
let promociones = ref<Promocion[]>([])
const emit = defineEmits(['edit'])
const promocionDelete = ref<Promocion | null>(null)
const mostrarConfirmDialog = ref<boolean>(false)

async function obtenerLista() {
  promociones.value = await http.get(ENDPOINT).then((response) => response.data)
}

function emitirEdicion(promocion: Promocion) {
  emit('edit', promocion)
}

function mostrarEliminarConfirm(promocion: Promocion) {
  promocionDelete.value = promocion
  mostrarConfirmDialog.value = true
}

async function eliminar() {
  await http.delete(`${ENDPOINT}/${promocionDelete.value?.id}`)
  obtenerLista()
  mostrarConfirmDialog.value = false
}

function formatearFecha(fecha: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }
  return new Date(fecha).toLocaleDateString('es-ES', options)
}

onMounted(() => {
  obtenerLista()
})
</script>
<template>
  <div class="container">
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>N°</th>
            <th>Descripción</th>
            <th>Descuento (%)</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(promocion, index) in promociones" :key="promocion.id">
            <td>{{ index + 1 }}</td>
            <td>{{ promocion.descripcion }}</td>
            <td>{{ promocion.descuentoPorcentaje }}%</td>
            <td>{{ formatearFecha(promocion.fechaInicio) }}</td>
            <td>{{ formatearFecha(promocion.fechaFin) }}</td>
            <td>
              <Button 
                icon="pi pi-pencil" 
                aria-label="Editar" 
                text 
                @click="emitirEdicion(promocion)" 
                class="btn-editar" 
              />
              <Button 
                icon="pi pi-trash" 
                aria-label="Eliminar" 
                text 
                @click="mostrarEliminarConfirm(promocion)" 
                class="btn-eliminar" 
              />
            </td>
          </tr>
          <tr v-if="!promociones.length">
            <td colspan="6" class="no-promociones">No hay promociones disponibles</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Dialog v-model:visible="mostrarConfirmDialog" header="Confirmar Eliminación" :style="{ width: '25rem' }">
      <p class="texto-eliminar">¿Estás seguro de que deseas eliminar esta promoción?</p>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancelar" @click="mostrarConfirmDialog = false" class="btn-cancelar" />
        <Button type="button" label="Eliminar" @click="eliminar" />
      </div>
    </Dialog>
  </div>
</template>
<style scoped>
/* Estilos generales para la tabla */
.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.table th,
.table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.table th {
  background-color: #f4f4f4;
}

/* Estilos para los botones */
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

.dialog-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.texto-eliminar {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 20px;
}

.container {
  padding: 20px;
}

.no-promociones {
  text-align: center;
  color: #888;
  font-size: 1.2rem;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.table td button {
  margin-right: 5px;
}
</style>
