<script setup lang="ts">
import { ref } from 'vue';
import DetallePedidoList from '@/components/detallepedido/DetallePedidoList.vue';
import DetallePedidoSave from '@/components/detallepedido/DetallePedidoSave.vue';

const mostrarDialog = ref<boolean>(false);
const DetallePedidoListRef = ref<typeof DetallePedidoList | null>(null);
const detallePedidoEdit = ref<any>(null);

function handleCreate() {
  detallePedidoEdit.value = null;
  mostrarDialog.value = true;
}

function handleEdit(detallePedido: any) {
  detallePedidoEdit.value = detallePedido;
  mostrarDialog.value = true;
}

function handleCloseDialog() {
  mostrarDialog.value = false;
}

function handleGuardar() {
  DetallePedidoListRef.value?.obtenerLista();
}
</script>

<template>
  <div class="m-8">
    <h1>Detalle de Pedidos</h1>
    <Button label="Crear Nuevo" icon="pi pi-plus" @click="handleCreate" />
    <DetallePedidoList ref="DetallePedidoListRef" @edit="handleEdit" />
    <DetallePedidoSave
      :mostrar="mostrarDialog"
      :detallePedido="detallePedidoEdit"
      :modoEdicion="!!detallePedidoEdit"
      @guardar="handleGuardar"
      @close="handleCloseDialog"
    />
  </div>
</template>

<style scoped>
</style>
