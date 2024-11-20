<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import type { DetallePedido } from '@/models/detallepedido';
import http from '@/plugins/axios';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';

const ENDPOINT = 'detalle_pedido';
const props = defineProps({
  mostrar: Boolean,
  detallepedido: {
    type: Object as () => DetallePedido,
    default: () => ({} as DetallePedido),
  },
  modoEdicion: Boolean,
});
const emit = defineEmits(['guardar', 'close']);

const detallepedido = ref<DetallePedido>({ ...props.detallepedido });
const dialogVisible = computed({
  get: () => props.mostrar,
  set: (value) => {
    if (!value) emit('close');
  },
});

const canSave = computed(() => {
  return (
    detallepedido.value.cliente &&
    isValidDate(detallepedido.value.fechaDetallePedido) &&
    !isNaN(Number(detallepedido.value.total))
  );
});

function isValidDate(date: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

watch(
  () => props.detallepedido,
  (newVal) => {
    detallepedido.value = { ...newVal };
  }
);

async function handleSave() {
  if (!canSave.value) return;
  try {
    const body = {
      cliente: detallepedido.value.cliente,
      fechaDetallePedido: detallepedido.value.fechaDetallePedido,
      total: detallepedido.value.total,
    };
    if (props.modoEdicion) {
      await http.patch(`${ENDPOINT}/${detallepedido.value.id}`, body);
    } else {
      await http.post(ENDPOINT, body);
    }
    emit('guardar');
    detallepedido.value = {} as DetallePedido;
    dialogVisible.value = false;
  } catch (error: any) {
    alert(error?.response?.data?.message);
  }
}

watch(
  () => props.mostrar,
  (nuevoValor) => {
    if (nuevoValor) {
      dialogVisible.value = true;
    }
  }
);
</script>

<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="dialogVisible"
      :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' DetallePedido'"
      style="width: 25rem"
    >
      <div class="flex items-center gap-4 mb-4">
        <label for="cliente" class="font-semibold w-4">Cliente</label>
        <InputText
          id="cliente"
          v-model="detallepedido.cliente"
          class="flex-auto"
          autocomplete="off"
        />
        <small v-if="!detallepedido.cliente" class="text-red-600">
          El cliente es obligatorio.
        </small>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="fechaDetallePedido" class="font-semibold w-4">Fecha</label>
        <InputText
          id="fechaDetallePedido"
          v-model="detallepedido.fechaDetallePedido"
          class="flex-auto"
          autocomplete="off"
          placeholder="YYYY-MM-DD"
        />
        <small
          v-if="!isValidDate(detallepedido.fechaDetallePedido)"
          class="text-red-600"
        >
          Fecha inválida. Use el formato YYYY-MM-DD.
        </small>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="total" class="font-semibold w-4">Total</label>
        <InputText
          id="total"
          v-model="detallepedido.total"
          class="flex-auto"
          autocomplete="off"
        />
        <small v-if="isNaN(Number(detallepedido.total))" class="text-red-600">
          El total debe ser un número válido.
        </small>
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
          :disabled="!canSave"
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

.text-red-600 {
  color: #e3342f;
}
</style>
