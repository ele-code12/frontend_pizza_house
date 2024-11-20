export interface DetallePedido {
  idPedido: number;          
  idProducto: number;        
  cantidad: number;          
  precioUnitario: number;    
  descuento: number;         
  fechaEliminacion?: Date;   
}
