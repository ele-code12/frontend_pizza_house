<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import type { Promocion } from '@/models/promocion'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'

const ENDPOINT = 'promociones'
const props = defineProps({
  mostrar: Boolean,
  promocion: {
    type: Object as () => Promocion, 
    default: () => ({}) as Promocion
  },
  modoEdicion: Boolean 
})
const emit = defineEmits(['guardar', 'close'])

const promocion = ref<Promocion>({ ...props.promocion })

const dialogVisible = computed({
  get: () => props.mostrar,
  set: (value) => {
    if (!value) emit('close')
  }
})

watch(
  () => props.promocion,
  (newVal) => {
    promocion.value = { ...newVal }
  }
)

async function handleSave() {
  try {
    const body = {
      descripcion: promocion.value.descripcion,
      descuentoPorcentaje: promocion.value.descuentoPorcentaje,
      fechaInicio: promocion.value.fechaInicio,
      fechaFin: promocion.value.fechaFin
    }
    if (props.modoEdicion) {
      await http.patch(`${ENDPOINT}/${promocion.value.id}`, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    promocion.value = {} as Promocion
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
      :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' Promoción'"
      style="width: 25rem"
    >
      <div class="flex items-center gap-4 mb-4">
        <label for="descripcion" class="font-semibold w-4">Descripción</label>
        <InputText
          id="descripcion"
          v-model="promocion.descripcion"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="descuentoPorcentaje" class="font-semibold w-4">Descuento (%)</label>
        <InputNumber
          id="descuentoPorcentaje"
          v-model="promocion.descuentoPorcentaje"
          class="flex-auto"
          :min="0" 
          :max="100"     
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="fechaInicio" class="font-semibold w-4">Fecha Inicio</label>
        <InputText
          id="fechaInicio"
          v-model="promocion.fechaInicio"
          class="flex-auto"
          type="date"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="fechaFin" class="font-semibold w-4">Fecha Fin</label>
        <InputText
          id="fechaFin"
          v-model="promocion.fechaFin"
          class="flex-auto"
          type="date"
        />
      </div>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          icon="pi pi-times"
          class="btn-cancelar"
          @click="dialogVisible = false"
        />
        <Button
          type="button"
          label="Guardar"
          icon="pi pi-save"
          class="btn-guardar"
          @click="handleSave"
        />
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.btn-cancelar {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
}

.btn-cancelar:hover {
  background-color: #c82333;
}

.btn-guardar {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
}

.btn-guardar:hover {
  background-color: #218838;
}

.card {
  width: 100%;
  display: flex;
  justify-content: center;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: 1;
}

.mb-4 {
  margin-bottom: 1rem;
}

.w-4 {
  width: 120px;
}

.font-semibold {
  font-weight: 600;
}

.items-center {
  align-items: center;
}

.gap-4 {
  gap: 1rem;
}

.dialog-container {
  display: flex;
  justify-content: center;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
