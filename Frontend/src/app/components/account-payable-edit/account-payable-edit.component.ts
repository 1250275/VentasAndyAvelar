import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountPayable } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-account-payable-edit',
  templateUrl: './account-payable-edit.component.html',
  styleUrls: ['./account-payable-edit.component.css']
})
export class AccountPayableEditComponent implements OnInit {

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
    };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/accounts-payable')
        .subscribe(
          res => {
            this.accountPayable = res;
          },
          err => console.error(err)
        );
    }
  }

  updateAccountPayable() {
    this.Data.update(this.accountPayable.idcxp!, this.accountPayable, '/accounts-payable')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/accounts-payable']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
