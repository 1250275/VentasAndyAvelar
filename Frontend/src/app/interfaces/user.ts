// tabla empresa
export interface Company {
  idempresa?: number | null;
  nombre?: string | null;
  direccion?: string | null;
  rtn?: string | null;
  telefono?: string | null;
  correo?: string | null;
  contacto?: string | null;
  fecha_creacion?: Date | null;
  estado?: string;
}

// tabla sucursales
export interface Branch {
  idsuc?: number | null;
  idempresa?: number | null;
  sucursal?: string | null;
  dirsuc?: string | null;
  telefono?: string | null;
  estado?: string;
}

// tabla proveedor
export interface Supplier {
  idprov?: number | null;
  idempresa?: number | null;
  proveedor?: string | null;
  direccion?: string | null;
  telefono?: string | null;
  responsable?: string | null;
  fecha_creacion?: Date | null;
  observaciones?: string | null;
  estado?: string;
}

// tabla areas_trabajo
export interface WorkArea {
  idarea?: number | null;
  idempresa?: number | null;
  idsuc?: number | null;
  area?: string | null;
  fecha_creacion?: Date | null;
  estado?: string;
}

// tabla empleados
export interface Employee {
  idemp?: number | null;
  idempresa?: number | null;
  idsuc?: number | null;
  idarea?: number | null;
  identidad?: string | null;
  fecha_nac?: Date | null;
  nombres?: string | null;
  apellidos?: string | null;
  sexo?: string | null;
  estado_civil?: string | null;
  direccion?: string | null;
  fecha_creacion?: Date | null;
  estado?: string;
}

// tabla tipousuario
export interface UserType {
  idtpusuario?: number | null;
  idempresa?: number | null;
  tipo?: string | null;
  estado?: string;
}

// tabla usuario
export interface User {
  userid?: number | null;
  idempresa?: number | null;
  idsuc?: number | null;
  idtpusuario?: number | null;
  idemp?: number | null;
  usuario?: string | null;
  clave?: string | null;
  estado?: string;
}

// tabla clientes
export interface Customer {
  num_clie?: number | null;
  idempresa?: number | null;
  idsuc?: number | null;
  identidad?: string | null;
  rtn?: string | null;
  fecha_nac?: Date | null;
  nombre?: string | null;
  telefono?: string | null;
  direccion?: string | null;
  correo?: string | null;
  fecha_creacion?: Date | null;
  estado?: string;
}

// tabla tipoproducto
export interface ProductType {
  idtpprod?: number | null;
  idempresa?: number | null;
  tipo?: string | null;
  estado?: string;
}

// tabla producto
export interface Product {
  num_prod?: number | null;
  idempresa?: number | null;
  idsuc?: number | null;
  idtpprod?: number | null;
  descripcion?: string | null;
  presentacion?: string | null;
  marca?: string | null;
  valor?: number | null;
  precioventa?: number | null;
  existencia?: number | null;
  fecha_ingreso?: Date | null;
  fecha_actualiza?: Date | null;
  estado?: string;
}

// tabla formapago
export interface PaymentMethod {
  idfpago?: number | null;
  idempresa?: number | null;
  formapago?: string | null;
  estado?: string;
}

// tabla cxcobrar
export interface AccountReceivable {
  idcxc?: number | null;
  idempresa?: number | null;
  num_venta?: number | null;
  idsuc?: number | null;
  num_clie?: number | null;
  userid?: number | null;
  idfpago?: number | null;
  fecha_venta?: Date | null;
  num_prod?: number | null;
  cantidad?: number | null;
  precio?: number | null;
  isv?: number | null;
  descuento?: number | null;
  total?: number | null;
  fecha_pago?: Date | null;
  estado?: string;
}

// tabla cxpagar
export interface AccountPayable {
  idcxp?: number | null;
  num_compra?: number | null;
  idempresa?: number | null;
  idsuc?: number | null;
  idprov?: number | null;
  userid?: number | null;
  idfpago?: number | null;
  fecha_compra?: Date | null;
  num_prod?: number | null;
  cantidad?: number | null;
  precio?: number | null;
  subtotal?: number | null;
  isv?: number | null;
  total?: number | null;
  fecha_pago?: Date | null;
  estado?: string;
}

// tabla pagos
export interface Payment {
  idpago?: number | null;
  idempresa?: number | null;
  num_venta?: number | null;
  idsuc?: number | null;
  num_clie?: number | null;
  userid?: number | null;
  idfpago?: number | null;
  fecha_pago?: Date | null;
  num_prod?: number | null;
  cantidad?: number | null;
  precio?: number | null;
  isv?: number | null;
  descuento?: number | null;
  total?: number | null;
  estado?: string;
}
