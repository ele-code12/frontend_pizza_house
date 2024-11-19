<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import http from '@/plugins/axios'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const router = useRouter()

const usuarioForm = ref({
  id: null,
  usuario: '',
  clave: '',
  tipoUsuario: ''
})

const isEdit = ref(false)

async function saveUsuario() {
  if (isEdit.value) {
    await http.put(`${ENDPOINT}/${usuarioForm.value.id}`, usuarioForm.value)
  } else {
    await http.post(ENDPOINT, usuarioForm.value)
  }
  router.push('/usuarios')
}

function loadUsuario(id: number) {
  isEdit.value = true
  http.get(`${ENDPOINT}/${id}`).then((response) => {
    usuarioForm.value = response.data
  })
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/usuarios">Usuarios</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ isEdit ? 'Editar Usuario' : 'Crear Usuario' }}
        </li>
      </ol>
    </nav>

    <h2>{{ isEdit ? 'Editar Usuario' : 'Crear Usuario' }}</h2>

    <form @submit.prevent="saveUsuario" class="mt-4">
      <div class="mb-3">
        <label for="usuario" class="form-label">Usuario</label>
        <input
          type="text"
          id="usuario"
          v-model="usuarioForm.usuario"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="clave" class="form-label">Clave</label>
        <input
          type="password"
          id="clave"
          v-model="usuarioForm.clave"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="tipoUsuario" class="form-label">Tipo Usuario</label>
        <input
          type="text"
          id="tipoUsuario"
          v-model="usuarioForm.tipoUsuario"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">
        {{ isEdit ? 'Guardar Cambios' : 'Crear' }}
      </button>
      <RouterLink to="/usuarios" class="btn btn-secondary ms-2">Cancelar</RouterLink>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}
</style>
