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

  accountPayable: AccountPayable = {
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
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getAccountsPayable();
  }

  getAccountsPayable() {
    this.Data.getAll('/accounts-payable')
      .subscribe(res => {
        this.accountsPayable = res;
      }, err => console.error(err));
  }

}
