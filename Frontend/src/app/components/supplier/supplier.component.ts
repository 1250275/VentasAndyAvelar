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

  supplier: Supplier = this.newSupplier();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  newSupplier(): Supplier {
    return {
      idprov: null,
      idempresa: null,
      proveedor: null,
      direccion: null,
      telefono: null,
      responsable: null,
      fecha_creacion: null,
      observaciones: null,
      estado: 'Activo'
    };
  }

  getSuppliers() {
    this.Data.getAll('/suppliers')
      .subscribe(res => {
        this.suppliers = res;
      }, err => console.error(err));
  }

  addSupplier() {
    delete this.supplier.idprov;
    this.Data.save(this.supplier, '/suppliers')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.supplier = this.newSupplier();
          this.getSuppliers();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteSupplier(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/suppliers')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getSuppliers();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
