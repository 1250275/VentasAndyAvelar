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

  paymentMethod: PaymentMethod = this.newPaymentMethod();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getPaymentMethods();
  }

  newPaymentMethod(): PaymentMethod {
    return {
      idfpago: null,
      idempresa: null,
      formapago: null,
      estado: 'Activo'
    };
  }

  getPaymentMethods() {
    this.Data.getAll('/payment-methods')
      .subscribe(res => {
        this.paymentMethods = res;
      }, err => console.error(err));
  }

  addPaymentMethod() {
    delete this.paymentMethod.idfpago;
    this.Data.save(this.paymentMethod, '/payment-methods')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.paymentMethod = this.newPaymentMethod();
          this.getPaymentMethods();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deletePaymentMethod(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/payment-methods')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getPaymentMethods();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
