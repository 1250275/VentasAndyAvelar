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

  accountReceivable: AccountReceivable = {
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
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getAccountsReceivable();
  }

  getAccountsReceivable() {
    this.Data.getAll('/accounts-receivable')
      .subscribe(res => {
        this.accountsReceivable = res;
      }, err => console.error(err));
  }

}
