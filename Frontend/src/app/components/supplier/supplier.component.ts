import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  suppliers: any = [];

  supplier: Supplier = {
    idprov: null,
    idempresa: null,
    proveedor: null,
    direccion: null,
    telefono: null,
    responsable: null,
    fecha_creacion: null,
    observaciones: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers() {
    this.Data.getAll('/suppliers')
      .subscribe(res => {
        this.suppliers = res;
      }, err => console.error(err));
  }

}
