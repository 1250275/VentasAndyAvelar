import { Component, OnInit } from '@angular/core';
import { PaymentMethod } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  paymentMethods: any = [];

  paymentMethod: PaymentMethod = {
    idfpago: null,
    idempresa: null,
    formapago: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getPaymentMethods();
  }

  getPaymentMethods() {
    this.Data.getAll('/payment-methods')
      .subscribe(res => {
        this.paymentMethods = res;
      }, err => console.error(err));
  }

}
