import type { CategoriaProducto } from "./categoriaProducto"

export interface Producto {
    id: number
    nombre: string
    precio: number
    disponibilidad: number
    tamanio: string
    fechaEliminacion: Date
    categoriaProducto: CategoriaProducto
  }