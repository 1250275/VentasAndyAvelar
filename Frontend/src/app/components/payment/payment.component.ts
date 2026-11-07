import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payments: any = [];

  payment: Payment = this.newPayment();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getPayments();
  }

  newPayment(): Payment {
    return {
      idpago: null,
      idempresa: null,
      num_venta: null,
      idsuc: null,
      num_clie: null,
      userid: null,
      idfpago: null,
      fecha_pago: null,
      num_prod: null,
      cantidad: null,
      precio: null,
      isv: null,
      descuento: null,
      total: null,
      estado: 'Activo'
    };
  }

  getPayments() {
    this.Data.getAll('/payments')
      .subscribe(res => {
        this.payments = res;
      }, err => console.error(err));
  }

  addPayment() {
    delete this.payment.idpago;
    this.Data.save(this.payment, '/payments')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.payment = this.newPayment();
          this.getPayments();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deletePayment(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/payments')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getPayments();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
