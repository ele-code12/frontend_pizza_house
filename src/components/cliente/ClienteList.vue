<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Cliente } from '@/models/cliente'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { useRouter } from 'vue-router'

const props = defineProps<{
  ENDPOINT_API: 'clientes'
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const router = useRouter()

const clientes = ref<Cliente[]>([])
const clienteDelete = ref<Cliente | null>(null)
const mostrarConfirmDialog = ref<boolean>(false)

async function getClientes() {
  clientes.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/clientes/editar/${id}`)
}

function mostrarEliminarConfirm(cliente: Cliente) {
  clienteDelete.value = cliente
  mostrarConfirmDialog.value = true
}

async function toDelete() {
  if (clienteDelete.value) {
    await http.delete(`${ENDPOINT}/${clienteDelete.value.id}`).then(() => {
      getClientes()
      mostrarConfirmDialog.value = false
    })
  }
}

onMounted(() => {
  getClientes()
})
</script>

<template>
  <div class="container">
    <div class="row">
      <h2>Lista de Clientes</h2>
      <div class="col-12">
        <RouterLink to="/clientes/crear">
          <Button label="Crear Nuevo" icon="pi pi-plus" class="p-button-success" />
        </RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>N°</th>
            <th>Razón Social</th>
            <th>NIT</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cliente, index) in clientes" :key="cliente.id">
            <td>{{ index + 1 }}</td>
            <td>{{ cliente.razonSocial }}</td>
            <td>{{ cliente.nit }}</td>
            <td>
              <Button
                icon="pi pi-pencil"
                aria-label="Editar"
                text
                @click="toEdit(cliente.id)"
              />
              <Button
                icon="pi pi-trash"
                aria-label="Eliminar"
                text
                @click="mostrarEliminarConfirm(cliente)"
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
      <p>¿Estás seguro de que deseas eliminar este cliente?</p>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          severity="secondary"
          @click="mostrarConfirmDialog = false"
        />
        <Button type="button" label="Eliminar" @click="toDelete" />
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
}
.table-responsive {
  margin-top: 20px;
}
</style>
