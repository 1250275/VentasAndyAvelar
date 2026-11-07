import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentMethod } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-payment-method-edit',
  templateUrl: './payment-method-edit.component.html',
  styleUrls: ['./payment-method-edit.component.css']
})
export class PaymentMethodEditComponent implements OnInit {

  paymentMethod: PaymentMethod = {
      idfpago: null,
      idempresa: null,
      formapago: null,
      estado: 'Activo'
    };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/payment-methods')
        .subscribe(
          res => {
            this.paymentMethod = res;
          },
          err => console.error(err)
        );
    }
  }

  updatePaymentMethod() {
    this.Data.update(this.paymentMethod.idfpago!, this.paymentMethod, '/payment-methods')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/payment-methods']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
