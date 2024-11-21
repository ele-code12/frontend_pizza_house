<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import http from '@/plugins/axios'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import { Producto } from '@/models/producto'

const ENDPOINT = 'productos'
const props = defineProps({
  mostrar: Boolean,
  producto: {
    type: Object as () => Producto,
    default: () => ({}) as Producto,
  },
  modoEdicion: Boolean,
})
const emit = defineEmits(['guardar', 'close'])

const producto = ref({ ...props.producto })
const dialogVisible = computed({
  get: () => props.mostrar,
  set: (value) => {
    if (!value) emit('close')
  },
})

watch(
  () => props.producto,
  (newVal) => {
    producto.value = { ...newVal }
  }
)

async function handleSave() {
  try {
    const body = {
      nombre: producto.value.nombre,
      precio: Number(producto.value.precio),
      disponibilidad: Number(producto.value.disponibilidad),
      tamanio: producto.value.tamanio,
      categoriaProducto: producto.value.categoriaProducto,
    }
    if (props.modoEdicion && producto.value.id) {
      await http.patch(`${ENDPOINT}/${producto.value.id}`, body)
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
      :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' Producto'"
      style="width: 30rem"
    >
      <div class="flex flex-col gap-4">
        <div>
          <label for="nombre" class="font-semibold">Nombre</label>
          <InputText id="nombre" v-model="producto.nombre" class="w-full" autocomplete="off" />
        </div>
        <div>
          <label for="precio" class="font-semibold">Precio</label>
          <InputText id="precio" v-model="producto.precio" type="number" class="w-full" autocomplete="off" />
        </div>
        <div>
          <label for="disponibilidad" class="font-semibold">Disponibilidad</label>
          <InputText id="disponibilidad" v-model="producto.disponibilidad" type="number" class="w-full" autocomplete="off" />
        </div>
        <div>
          <label for="tamanio" class="font-semibold">Tamaño</label>
          <InputText id="tamanio" v-model="producto.tamanio" class="w-full" autocomplete="off" />
        </div>
        <div>
          <label for="categoriaProducto" class="font-semibold">Categoría</label>
          <InputText id="categoriaProducto" v-model="producto.categoriaProducto" class="w-full" autocomplete="off" />
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
