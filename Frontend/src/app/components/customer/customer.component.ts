import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: any = [];

  customer: Customer = this.newCustomer();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  newCustomer(): Customer {
    return {
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
  }

  getCustomers() {
    this.Data.getAll('/customers')
      .subscribe(res => {
        this.customers = res;
      }, err => console.error(err));
  }

  addCustomer() {
    delete this.customer.num_clie;
    this.Data.save(this.customer, '/customers')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.customer = this.newCustomer();
          this.getCustomers();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteCustomer(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/customers')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getCustomers();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
