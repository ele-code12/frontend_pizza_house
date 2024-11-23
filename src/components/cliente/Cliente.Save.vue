<script setup lang="ts">
import type { Cliente } from '@/models/cliente'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import { computed, ref, watch } from 'vue'

const ENDPOINT = 'clientes'
const props = defineProps({
  mostrar: Boolean,
  cliente: {
    type: Object as () => Cliente,
    default: () => ({} as Cliente)
  },
  modoEdicion: Boolean
})
const emit = defineEmits(['guardar', 'close'])

const dialogVisible = computed({
  get: () => props.mostrar,
  set: (value) => {
    if (!value) emit('close')
  }
})

const cliente = ref<Cliente>({ ...props.cliente })
watch(
  () => props.cliente,
  (newVal) => {
    cliente.value = { ...newVal }
  }
)

async function handleSave() {
  if (!cliente.value.nombres || cliente.value.nombres.trim() === '') {
    alert('El campo "Nombres" no puede estar vacío.');
    return;
  }
  
  if (!cliente.value.apellidos || cliente.value.apellidos.trim() === '') {
    alert('El campo "Apellidos" no puede estar vacío.');
    return;
  }

  if (!cliente.value.direccion || cliente.value.direccion.trim() === '') {
    alert('El campo "Dirección" no puede estar vacío.');
    return;
  }

  if (!cliente.value.celular || cliente.value.celular.trim() === '') {
    alert('El campo "Celular" no puede estar vacío.');
    return;
  }

  try {
    const body = {
      nombres: cliente.value.nombres,
      apellidos: cliente.value.apellidos,
      direccion: cliente.value.direccion,
      celular: cliente.value.celular
    }
    if (props.modoEdicion) {
      await http.patch(`${ENDPOINT}/${cliente.value.id}`, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    cliente.value = {} as Cliente // Reiniciar cliente tras guardar
    dialogVisible.value = false
  } catch (error: any) {
    alert(error?.response?.data?.message || 'Error al guardar el cliente');
  }
}

</script>

<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="dialogVisible"
      :header="props.modoEdicion ? 'Editar' : 'Crear'"
      style="width: 25rem"
    >
      <div class="flex items-center gap-4 mb-4">
        <label for="nombre" class="font-semibold w-4">Nombres</label>
        <InputText
          id="nombre"
          v-model="cliente.nombres"
          class="flex-auto"
          autocomplete="off"
          autofocus
        />
      </div>

      <div class="flex items-center gap-4 mb-4">
        <label for="apellido" class="font-semibold w-4">Apellidos</label>
        <InputText
          id="apellido"
          v-model="cliente.apellidos"
          class="flex-auto"
          autocomplete="off"
          autofocus
        />
      </div>

      <div class="flex items-center gap-4 mb-4">
        <label for="direccion" class="font-semibold w-4">Direccion</label>
        <InputText
          id="direccion"
          v-model="cliente.direccion"
          class="flex-auto"
          autocomplete="off"
          autofocus
        />
      </div>

      <div class="flex items-center gap-4 mb-4">
        <label for="celular" class="font-semibold w-4">Celular</label>
        <InputText
          id="celular"
          v-model="cliente.celular"
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
        />
        <Button type="button" label="Guardar" icon="pi pi-save" @click="handleSave" />
      </div>
    </Dialog>
  </div>
</template>

<style scoped></style>
