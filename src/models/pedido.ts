export interface Pedido {
  id: number
  idCliente: number  
  idEmpleado: number
  fecha: Date
  estado: number
  total: number
  idPromocion: number 
  direccionEntrega: string
  fechaEliminacion: Date
}
