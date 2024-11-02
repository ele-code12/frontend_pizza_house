import type { Ingrediente } from "./ingrediente"
import type { Producto } from "./producto"

export interface ProductoIngrediente {
    id: number
    fecha_eliminacion: Date
    ingrediente: Ingrediente
    producto: Producto
    
  }