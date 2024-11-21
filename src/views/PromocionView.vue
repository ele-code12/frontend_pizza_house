<script setup lang="ts">
import { ref } from 'vue'
import PromocionListComponent from '@/components/promocion/PromocionListComponent.vue'  
import PromocionSave from '@/components/promocion/PromocionSave.vue'

const mostrarDialog = ref<boolean>(false)
const promocionListRef = ref<typeof PromocionListComponent | null>(null)  
const promocionEdit = ref<any>(null)

function handleCreate() {
  promocionEdit.value = null
  mostrarDialog.value = true
}

function handleEdit(promocion: any) {
  promocionEdit.value = promocion
  mostrarDialog.value = true
}

function handleCloseDialog() {
  mostrarDialog.value = false
}

function handleGuardar() {
  promocionListRef.value?.obtenerLista()
}
</script>

<template>
  <div class="m-8">
    <h1>Promociones</h1>
    <Button label="Crear Nueva" icon="pi pi-plus" @click="handleCreate" />
    <PromocionListComponent ref="promocionListRef" @edit="handleEdit" />  
    <PromocionSave
      :mostrar="mostrarDialog"
      :promocion="promocionEdit"
      :modoEdicion="!!promocionEdit"
      @guardar="handleGuardar"
      @close="handleCloseDialog"
    />
  </div>

  <RouterView ENDPOINT_API="promociones" class="my-5 pt-5" />
</template>

<style scoped>
</style>
