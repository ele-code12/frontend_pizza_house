<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import http from '@/plugins/axios'
import ClienteList from '@/components/cliente/ClienteList.vue'
import ClienteSave from '@/components/cliente/ClienteSave.vue'

const props = defineProps<{
  ENDPOINT_API: 'clientes'
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const router = useRouter()

const mostrarDialog = ref<boolean>(false)
const clienteListRef = ref<typeof ClienteList | null>(null)
const clienteEdit = ref<any>(null)

function hableCreate() {
  clienteEdit.value = null
  mostrarDialog.value = true
}

function handleEdit(cliente: any) {
  clienteEdit.value = cliente
  mostrarDialog.value = true
}

function handleCloseDialog() {
  mostrarDialog.value = false
}

async function handleGuardar() {
  if (clienteEdit.value) {
    await http.put(`${ENDPOINT}/${clienteEdit.value.id}`, clienteEdit.value)
  } else {
    await http.post(ENDPOINT, clienteEdit.value)
  }
  clienteListRef.value?.obtenerLista()
  handleCloseDialog()
}
</script>

<template>
  <div class="m-8">
    
    <ClienteList ref="clienteListRef" @edit="handleEdit" :ENDPOINT_API="ENDPOINT" />

    <ClienteSave
      :mostrar="mostrarDialog"
      :cliente="clienteEdit"
      :modoEdicion="!!clienteEdit"
      @guardar="handleGuardar"
      @close="handleCloseDialog"
      :ENDPOINT_API="ENDPOINT" 
    />
  </div>
</template>

<style scoped>
.m-8 {
  margin: 2rem;
}
</style>
