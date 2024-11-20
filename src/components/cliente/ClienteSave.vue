<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Cliente } from '@/models/cliente'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import { computed } from 'vue'

const ENDPOINT = 'clientes'
const props = defineProps({
  mostrar: Boolean,
  cliente: {
    type: Object as () => Cliente,
    default: () => ({}) as Cliente
  },
  modoEdicion: Boolean
})
const emit = defineEmits(['guardar', 'close'])

const cliente = ref<Cliente>({ ...props.cliente })
const dialogVisible = computed({
  get: () => props.mostrar,
  set: (value) => {
    if (!value) emit('close')
  }
})

watch(
  () => props.cliente,
  (newVal) => {
    cliente.value = { ...newVal }
  }
)

async function handleSave() {
  try {
    const body = {
      razonSocial: cliente.value.razonSocial,
      nit: cliente.value.nit
    }
    if (props.modoEdicion) {
      await http.patch(`${ENDPOINT}/${cliente.value.id}`, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    cliente.value = {} as Cliente
    dialogVisible.value = false
  } catch (error: any) {
    alert(error?.response?.data?.message)
  }
}

watch(
  () => props.mostrar,
  (nuevoValor) => {
    if (nuevoValor) {
      dialogVisible.value = true
    }
  }
)
</script>
<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="dialogVisible"
      :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' Cliente'"
      style="width: 25rem"
    >
      <div class="flex items-center gap-4 mb-4">
        <label for="razonSocial" class="font-semibold w-4">Razón Social</label>
        <InputText
          id="razonSocial"
          v-model="cliente.razonSocial"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="nit" class="font-semibold w-4">NIT</label>
        <InputText
          id="nit"
          v-model="cliente.nit"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          icon="pi pi-times"
          severity="secondary"
          @click="dialogVisible = false"
        ></Button>
        <Button type="button" label="Guardar" icon="pi pi-save" @click="handleSave"></Button>
      </div>
    </Dialog>
  </div>
</template>
