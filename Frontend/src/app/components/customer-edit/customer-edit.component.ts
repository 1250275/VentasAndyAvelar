import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer = {
      num_clie: null,
      idempresa: null,
      idsuc: null,
      identidad: null,
      rtn: null,
      fecha_nac: null,
      nombre: null,
      telefono: null,
      direccion: null,
      correo: null,
      fecha_creacion: null,
      estado: 'Activo'
    };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/customers')
        .subscribe(
          res => {
            this.customer = res;
          },
          err => console.error(err)
        );
    }
  }

  updateCustomer() {
    this.Data.update(this.customer.num_clie!, this.customer, '/customers')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/customers']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
