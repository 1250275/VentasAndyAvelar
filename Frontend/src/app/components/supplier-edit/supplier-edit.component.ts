import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Supplier } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {

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
    };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/suppliers')
        .subscribe(
          res => {
            this.supplier = res;
          },
          err => console.error(err)
        );
    }
  }

  updateSupplier() {
    this.Data.update(this.supplier.idprov!, this.supplier, '/suppliers')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/suppliers']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
