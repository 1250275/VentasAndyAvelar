import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountReceivable } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-account-receivable-edit',
  templateUrl: './account-receivable-edit.component.html',
  styleUrls: ['./account-receivable-edit.component.css']
})
export class AccountReceivableEditComponent implements OnInit {

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
    };

  companyList: any = [];
  saleHeaderList: any = [];
  branchList: any = [];
  customerList: any = [];
  userList: any = [];
  paymentMethodList: any = [];
  productList: any = [];

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDropListCompanyList();
    this.getDropListSaleHeaderList();
    this.getDropListBranchList();
    this.getDropListCustomerList();
    this.getDropListUserList();
    this.getDropListPaymentMethodList();
    this.getDropListProductList();
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/accounts-receivable')
        .subscribe(
          res => {
            this.accountReceivable = res;
          },
          err => console.error(err)
        );
    }
  }

  getDropListCompanyList() {
    this.Data.getDropList('/companies').subscribe((data: any) => {
      this.companyList = data;
    });
  }

  getDropListSaleHeaderList() {
    this.Data.getDropList('/sale-headers').subscribe((data: any) => {
      this.saleHeaderList = data;
    });
  }

  getDropListBranchList() {
    this.Data.getDropList('/branches').subscribe((data: any) => {
      this.branchList = data;
    });
  }

  getDropListCustomerList() {
    this.Data.getDropList('/customers').subscribe((data: any) => {
      this.customerList = data;
    });
  }

  getDropListUserList() {
    this.Data.getDropList('/users').subscribe((data: any) => {
      this.userList = data;
    });
  }

  getDropListPaymentMethodList() {
    this.Data.getDropList('/payment-methods').subscribe((data: any) => {
      this.paymentMethodList = data;
    });
  }

  getDropListProductList() {
    this.Data.getDropList('/products').subscribe((data: any) => {
      this.productList = data;
    });
  }

  updateAccountReceivable() {
    this.Data.update(this.accountReceivable.idcxc!, this.accountReceivable, '/accounts-receivable')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/accounts-receivable']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
