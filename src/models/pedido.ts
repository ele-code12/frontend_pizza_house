import type { Cliente } from "./cliente"
import type { Empleado } from "./empleado"
import type { Promocion } from "./promocion"

export interface Pedido {
    id: number
    id_Cliente: Cliente
    id_empleado: Empleado
    fecha: Date
    estado: number
    total: number
    id_promocion: Promocion
    direccion_entrega: string
    fechaEliminacion: Date
  }