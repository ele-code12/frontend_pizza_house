<script setup lang="ts">
import { ref } from 'vue'
import UsuarioList from '@/components/usuario/UsuarioList.vue'
import UsuarioSave from '@/components/usuario/UsuarioSave.vue'

const mostrarDialog = ref<boolean>(false)
const UsuarioListRef = ref<typeof UsuarioList | null>(null)
const usuarioEdit = ref<any>(null)

function handleCreate() {
  usuarioEdit.value = null
  mostrarDialog.value = true
}

function handleEdit(usuario: any) {
  usuarioEdit.value = usuario
  mostrarDialog.value = true
}

function handleCloseDialog() {
  mostrarDialog.value = false
}

function handleGuardar() {
  UsuarioListRef.value?.obtenerLista()
}
</script>

<template>
  <div class="m-8">
    <h1>Usuarios</h1>
    <Button label="Crear Nuevo" icon="pi pi-plus" @click="handleCreate" />
    <UsuarioList ref="UsuarioListRef" @edit="handleEdit" />
    <UsuarioSave
      :mostrar="mostrarDialog"
      :usuario="usuarioEdit"
      :modoEdicion="!!usuarioEdit"
      @guardar="handleGuardar"
      @close="handleCloseDialog"
    />
  </div>
</template>

<style scoped>
</style>
