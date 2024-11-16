<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import http from '@/plugins/axios'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

import type { Producto } from '@/models/producto'
import type { Pedido } from '@/models/pedido'

const pedidos = ref<Pedido[]>([])
const productos = ref<Producto[]>([])
const detallepedido = ref<
  Array<{
    idpedido: string
    idproducto: string
    cantidad: number
    precioUnitario: number
    subtotal: number
    descuento: number
    fechaEliminacion?: string
    stock?: number
  }>
>([])

const props = defineProps<{
  ENDPOINT_API: string
}>()

const router = useRouter()
const selectedPedidoId = ref<string>('')

async function getPedidos() {
  pedidos.value = await http.get('pedidos').then((response) => response.data)
}

async function getProductos() {
  productos.value = await http.get('productos').then((response) => response.data)
}

onMounted(() => {
  getPedidos()
  getProductos()
})

function mostrarTotalPedido() {
  const sumaTotalPedido = detallepedido.value
    .reduce((total, detalle) => total + detalle.subtotal, 0)
    .toFixed(2)
  alert(`La suma total de los detalles del pedido es: ${sumaTotalPedido}`)
}

function agregarDetalle() {
  detallepedido.value.push({
    idpedido: selectedPedidoId.value,
    idproducto: '',
    cantidad: 0,
    precioUnitario: 0,
    subtotal: 0.0,
    descuento: 0,
    stock: 0,
    fechaEliminacion: ''
  })
}

watch(
  detallepedido,
  async (detalles) => {
    for (let i = 0; i < detalles.length; i++) {
      const detalle = detalles[i]
      if (detalle.idproducto) {
        try {
          const producto = await http
            .get(`productos/${detalle.idproducto}`)
            .then((response) => response.data)
          detalle.stock = producto.stock - detalle.cantidad
          detalle.precioUnitario = producto.precio
          detalle.subtotal = Number(
            (detalle.cantidad * detalle.precioUnitario * (1 - detalle.descuento / 100)).toFixed(2)
          )
        } catch (error) {
          console.error(`Error al obtener el producto ${detalle.idproducto}:`, error)
        }
      }
    }
  },
  { deep: true }
)

async function crearDetalles() {
  try {
    await Promise.all(
      detallepedido.value.map(async (detalle) => {
        detalle.idpedido = selectedPedidoId.value
        await http.post(props.ENDPOINT_API, detalle)
      })
    )
    router.push('/detalles')
  } catch (error) {
    console.error('Error al crear los detalles del pedido:', error)
  }
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Inicio</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/detalles">Pedido</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-12 text-center mt-3 mb-3">
        <h2 class="simpsons-font">Crear Nuevo Pedido</h2>
      </div>
    </div>

    <div class="row">
      <form @submit.prevent="crearDetalles">
        <div class="form-floating mb-3">
          <select v-model="selectedPedidoId" class="form-select" required>
            <option v-for="pedido in pedidos" :value="pedido.id" :key="pedido.id">
              {{ pedido. }}
              <!-- el pedido deberia tener un descuento -->
            </option>
          </select>
          <label for="pedido">Pedido</label>
        </div>
        <div v-for="(detalle, index) in detallepedido" :key="index" class="row align-items-center">
          <div class="col">
            <div class="form-floating mb-3">
              <select v-model="detalle.idproducto" class="form-select" required>
                <option v-for="producto in productos" :value="producto.id" :key="producto.id">
                  {{ producto.nombre }}
                </option>
              </select>
              <label for="producto">Producto</label>
            </div>
            <div v-if="detalle.stock !== undefined" class="floating-info mb-3">
              <p>Stock: {{ detalle.stock }} <i class="fas fa-box"></i></p>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                v-model="detalle.cantidad"
                placeholder="Cantidad"
                required
              />
              <label for="cantidad">Cantidad</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                v-model="detalle.precioUnitario"
                placeholder="Precio Unitario"
                step="0.01"
                required
              />
              <label for="precioUnitario">Precio por Unidad</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                v-model="detalle.descuento"
                placeholder="Descuento (%)"
                min="0"
                required
              />
              <label for="descuento">Descuento (%)</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                :value="
                  detalle.subtotal.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })
                "
                placeholder="Subtotal"
                required
                readonly
              />
              <label for="subtotal">Total del Pedido</label>
            </div>
          </div>
        </div>

        <div class="text-center mt-3">
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group me-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-primary btn-lg" @click="agregarDetalle">
                Agregar Detalle
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="Second group">
              <button type="submit" class="btn btn-primary btn-lg">Crear Pedido</button>
            </div>
          </div>
          <button class="btn btn-primary btn-lg" @click.prevent="mostrarTotalPedido">
            Total a Pagar
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

.simpsons-font {
  font-family: 'Bangers', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.658);
  transition: all 0.3s ease-in-out;
}

.simpsons-font:hover {
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.7);
}

.floating-info p {
  background-color: yellow;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
  color: black;
}

.form-floating input[type='number'],
.form-floating input[type='text'],
.form-select {
  background-color: rgba(205, 193, 193, 0.751);
  border: 3px solid #1d1c0a;
  border-radius: 10px;
  color: rgb(15, 11, 11);
  width: 100%;
  padding: 10px;
}

.form-floating label {
  font-weight: bold;
}

.btn-primary {
  background-color: #ff7300;
  border: none;
}

.btn-primary:hover {
  background-color: #ff7f0e;
}

.btn-link {
  color: #ff6200;
  text-decoration: underline;
  transition: all 0.3s ease-in-out;
}

.btn-link:hover {
  color: #1f180c;
  text-decoration: none;
}
</style>
