import type { Empleado } from "./empleado"

export interface MetodoPago {
    id: number
    id_empleado: Empleado
    tipo: string
    estado: string
    monto: number
    fecha_eliminacion: Date
    pedidold: string
}