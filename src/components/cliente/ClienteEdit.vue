<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const razon_social = ref('')
const NIT = ref('')
const id = router.currentRoute.value.params['id']

async function editarCliente() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      NIT: NIT.value,
      razon_social: razon_social.value,
    })
    .then(() => router.push('/clientes'))
}

async function getCliente() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(NIT.value = response.data.nit),
      (razon_social.value = response.data.razon_social)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getCliente()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/clientes">Clientes</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Cliente</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarCliente">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="NIT"
            placeholder="Cedula Identidad"
            required
          />
          <label for="ci">Nit</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="razon_social"
            placeholder="Nombres"
            required
          />
          <label for="nombres">Razon Social</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" /> Guardar
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
