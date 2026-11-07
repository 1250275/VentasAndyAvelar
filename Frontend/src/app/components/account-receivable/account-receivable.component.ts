import { Component, OnInit } from '@angular/core';
import { AccountReceivable } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-account-receivable',
  templateUrl: './account-receivable.component.html',
  styleUrls: ['./account-receivable.component.css']
})
export class AccountReceivableComponent implements OnInit {

  accountsReceivable: any = [];

  accountReceivable: AccountReceivable = this.newAccountReceivable();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getAccountsReceivable();
  }

  newAccountReceivable(): AccountReceivable {
    return {
      idcxc: null,
      idempresa: null,
      num_venta: null,
      idsuc: null,
      num_clie: null,
      userid: null,
      idfpago: null,
      fecha_venta: null,
      num_prod: null,
      cantidad: null,
      precio: null,
      isv: null,
      descuento: null,
      total: null,
      fecha_pago: null,
      estado: 'Activo'
    };
  }

  getAccountsReceivable() {
    this.Data.getAll('/accounts-receivable')
      .subscribe(res => {
        this.accountsReceivable = res;
      }, err => console.error(err));
  }

  addAccountReceivable() {
    delete this.accountReceivable.idcxc;
    this.Data.save(this.accountReceivable, '/accounts-receivable')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.accountReceivable = this.newAccountReceivable();
          this.getAccountsReceivable();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteAccountReceivable(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/accounts-receivable')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getAccountsReceivable();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
