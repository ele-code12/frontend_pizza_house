<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import http from '@/plugins/axios'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import { Pedido } from '@/models/pedido'

const ENDPOINT = 'pedidos'
const props = defineProps({
  mostrar: Boolean,
  pedido: {
    type: Object as () => Pedido,
    default: () => ({}) as Pedido,
  },
  modoEdicion: Boolean,
})
const emit = defineEmits(['guardar', 'close'])

const pedido = ref({ ...props.pedido })
const dialogVisible = computed({
  get: () => props.mostrar,
  set: (value) => {
    if (!value) emit('close')
  },
})

watch(
  () => props.pedido,
  (newVal) => {
    pedido.value = { ...newVal }
  }
)

async function handleSave() {
  try {
    const body = {
      idCliente: pedido.value.idCliente,
      idEmpleado: pedido.value.idEmpleado,
      fecha: pedido.value.fecha,
      estado: pedido.value.estado,
      total: Number(pedido.value.total), // Convertir total a número antes de enviar
      idPromocion: pedido.value.idPromocion,
      direccionEntrega: pedido.value.direccionEntrega,
    }
    if (props.modoEdicion && pedido.value.id) {
      await http.patch(`${ENDPOINT}/${pedido.value.id}`, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    dialogVisible.value = false
  } catch (error: any) {
    alert(error?.response?.data?.message || 'Ocurrió un error')
  }
}
</script>

<template>
  <div>
    <Dialog
      v-model:visible="dialogVisible"
      :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' Pedido'"
      style="width: 30rem"
    >
      <div class="flex flex-col gap-4">
        <div>
          <label for="idCliente" class="font-semibold">Cliente</label>
          <InputText id="idCliente" v-model="pedido.idCliente" class="w-full" autocomplete="off" />
        </div>
        <div>
          <label for="idEmpleado" class="font-semibold">Empleado</label>
          <InputText id="idEmpleado" v-model="pedido.idEmpleado" class="w-full" autocomplete="off" />
        </div>
        <div>
          <label for="fecha" class="font-semibold">Fecha</label>
          <InputText id="fecha" v-model="pedido.fecha" class="w-full" autocomplete="off" />
        </div>
        <div>
          <label for="estado" class="font-semibold">Estado</label>
          <InputText id="estado" v-model="pedido.estado" class="w-full" autocomplete="off" />
        </div>
        <div>
          <label for="total" class="font-semibold">Total</label>
          <InputText id="total" v-model="pedido.total" type="number" class="w-full" autocomplete="off" />
        </div>
        <div>
          <label for="idPromocion" class="font-semibold">Promoción</label>
          <InputText id="idPromocion" v-model="pedido.idPromocion" class="w-full" autocomplete="off" />
        </div>
        <div>
          <label for="direccionEntrega" class="font-semibold">Dirección de Entrega</label>
          <InputText id="direccionEntrega" v-model="pedido.direccionEntrega" class="w-full" autocomplete="off" />
        </div>
      </div>
      <div class="flex justify-end gap-2 mt-4">
        <Button label="Cancelar" icon="pi pi-times" class="btn-cancelar" @click="dialogVisible = false" />
        <Button label="Guardar" icon="pi pi-save" class="btn-guardar" @click="handleSave" />
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
</style>
