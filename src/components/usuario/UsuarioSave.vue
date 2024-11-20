<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import http from '@/plugins/axios'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

const ENDPOINT = 'usuarios'
const props = defineProps({
  mostrar: Boolean,
  usuario: {
    type: Object as () => { id?: number; usuario?: string; clave?: string; tipoUsuario?: string },
    default: () => ({ usuario: '', clave: '', tipoUsuario: '' }),
  },
  modoEdicion: Boolean,
})
const emit = defineEmits(['guardar', 'close'])

const usuario = ref({ ...props.usuario })
const dialogVisible = computed({
  get: () => props.mostrar,
  set: (value) => {
    if (!value) emit('close')
  },
})

watch(
  () => props.usuario,
  (nuevoValor) => {
    usuario.value = { ...nuevoValor }
  }
)

async function handleSave() {
  try {
    const body = {
      usuario: usuario.value.usuario,
      clave: usuario.value.clave,
      tipoUsuario: usuario.value.tipoUsuario,
    }
    if (props.modoEdicion && usuario.value.id) {
      await http.patch(`${ENDPOINT}/${usuario.value.id}`, body)
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
      :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' Usuario'"
      style="width: 30rem"
    >
      <div class="flex flex-col gap-4">
        <div>
          <label for="usuario" class="font-semibold">Usuario</label>
          <InputText id="usuario" v-model="usuario.usuario" class="w-full" autocomplete="off" />
        </div>
        <div>
          <label for="clave" class="font-semibold">Clave</label>
          <InputText id="clave" v-model="usuario.clave" type="password" class="w-full" autocomplete="off" />
        </div>
        <div>
          <label for="tipoUsuario" class="font-semibold">Tipo Usuario</label>
          <InputText id="tipoUsuario" v-model="usuario.tipoUsuario" class="w-full" autocomplete="off" />
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
