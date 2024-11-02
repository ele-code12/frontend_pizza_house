import type { Categoria } from "./categoriaProducto"

export interface Producto {
    id: number
    nombre: string
    precio: number
    disponibilidad: number
    tamanio: string
    fecha_eliminacion: Date
    categoriaProducto: Categoria
  }