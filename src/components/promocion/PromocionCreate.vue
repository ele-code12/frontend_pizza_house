<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''


const fechaEliminacion = ref('')
const descripcion = ref('')
const descuentoPorcentaje = ref(0)
const fechaInicio = ref('')
const fechaFin = ref('')


async function crearPromocion() {
  await http.post(ENDPOINT, {
    fecha_eliminacion: fechaEliminacion.value,
    descripcion: descripcion.value,
    descuento_porcentaje: descuentoPorcentaje.value,
    fecha_inicio: fechaInicio.value,
    fecha_fin: fechaFin.value
  }).then(() => router.push('/promociones'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="breadcrumb-item">
          <RouterLink to="/promociones">Promociones</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nueva Promoción</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearPromocion">
        <div class="form-floating mb-3">
          <input type="date" class="form-control" v-model="fechaEliminacion" placeholder="Fecha Eliminación" required />
          <label for="fechaEliminacion">Fecha Eliminación</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="descripcion" placeholder="Descripción" required />
          <label for="descripcion">Descripción</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" v-model="descuentoPorcentaje" placeholder="Descuento (%)" required min="0" />
          <label for="descuentoPorcentaje">Descuento (%)</label>
        </div>
        <div class="form-floating mb-3">
          <input type="date" class="form-control" v-model="fechaInicio" placeholder="Fecha Inicio" required />
          <label for="fechaInicio">Fecha Inicio</label>
        </div>
        <div class="form-floating mb-3">
          <input type="date" class="form-control" v-model="fechaFin" placeholder="Fecha Fin" required />
          <label for="fechaFin">Fecha Fin</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            Crear
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style scoped></style>
