<script setup lang="ts">
import { ref } from 'vue'
import PedidoList from '@/components/pedido/PedidoList.vue'
import PedidoSave from '@/components/pedido/PedidoSave.vue'


const mostrarDialog = ref<boolean>(false)
const PedidoListRef = ref<typeof PedidoList | null>(null)
const pedidoEdit = ref<any>(null)

function handleCreate() {
  pedidoEdit.value = null
  mostrarDialog.value = true
}

function handleEdit(pedido: any) {
  pedidoEdit.value = pedido
  mostrarDialog.value = true
}

function handleCloseDialog() {
  mostrarDialog.value = false
}

function handleGuardar() {
  PedidoListRef.value?.obtenerLista()
}
</script>

<template>
  <div class="m-8">
    <h1>Pedidos</h1>
    <Button label="Crear Nuevo Pedido" icon="pi pi-plus" @click="handleCreate" />
    <PedidoList ref="PedidoListRef" @edit="handleEdit" />
    <PedidoSave
      :mostrar="mostrarDialog"
      :pedido="pedidoEdit"
      :modoEdicion="!!pedidoEdit"
      @guardar="handleGuardar"
      @close="handleCloseDialog"
    />
  </div>
</template>

<style scoped>
</style>
