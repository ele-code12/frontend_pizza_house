import type { Pedido } from './pedido'
import type { Producto } from './producto'

export interface DetallePedido {
  idPedido: Pedido
  idProducto: Producto
  cantidad: number
  precioUnitario: number
  descuento: number
  fechaEliminacion: Date
}
