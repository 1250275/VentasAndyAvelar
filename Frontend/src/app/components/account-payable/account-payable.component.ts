import { Component, OnInit } from '@angular/core';
import { AccountPayable } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-account-payable',
  templateUrl: './account-payable.component.html',
  styleUrls: ['./account-payable.component.css']
})
export class AccountPayableComponent implements OnInit {

  accountsPayable: any = [];

  accountPayable: AccountPayable = this.newAccountPayable();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getAccountsPayable();
  }

  newAccountPayable(): AccountPayable {
    return {
      idcxp: null,
      num_compra: null,
      idempresa: null,
      idsuc: null,
      idprov: null,
      userid: null,
      idfpago: null,
      fecha_compra: null,
      num_prod: null,
      cantidad: null,
      precio: null,
      subtotal: null,
      isv: null,
      total: null,
      fecha_pago: null,
      estado: 'Activo'
    };
  }

  getAccountsPayable() {
    this.Data.getAll('/accounts-payable')
      .subscribe(res => {
        this.accountsPayable = res;
      }, err => console.error(err));
  }

  addAccountPayable() {
    delete this.accountPayable.idcxp;
    this.Data.save(this.accountPayable, '/accounts-payable')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.accountPayable = this.newAccountPayable();
          this.getAccountsPayable();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteAccountPayable(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/accounts-payable')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getAccountsPayable();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
