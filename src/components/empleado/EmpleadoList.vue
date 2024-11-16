<script setup lang="ts">
import type { Empleado } from '@/models/empleado'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const empleados = ref<Empleado[]>([])

async function getEmpleados() {
  empleados.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/empleados/editar/${id}`)
}

async function toDelete(id: number) {
  const r = confirm('¿Está seguro que desea eliminar el Empleado?')
  if (r) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getEmpleados())
  }
}

function formatoFecha(fecha: string | number | Date) {
  return new Date(fecha).toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

onMounted(() => {
  getEmpleados()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Empleados</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Empleados</h2>
      <div class="col-12">
        <router-link to="/empleados/crear">
          <font-awesome-icon icon="fa-solid fa-plus" /> Crear Nuevo
        </router-link>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Cargo</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Salario</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(empleado, index) in empleados" :key="empleado.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ empleado.nombres }}</td>
            <td>{{ empleado.email }}</td>
            <td>{{ empleado.cargo }}</td>
            <td>{{ empleado.telefono }}</td>
            <td>
              {{
                empleado.salario.toLocaleString(undefined, { style: 'currency', currency: 'USD' })
              }}
            </td>
            <td>{{ formatoFecha(empleado.fecha_nacimiento) }}</td>
            <td>
              <button class="btn btn-link" @click="toEdit(empleado.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-link" @click="toDelete(empleado.id)">
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
