import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountReceivable } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-account-receivable',
  templateUrl: './account-receivable.component.html',
  styleUrls: ['./account-receivable.component.css']
})
export class AccountReceivableComponent implements OnInit {

  accountsReceivable: any = [];

  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  accountReceivable: AccountReceivable = this.newAccountReceivable();

  companyList: any = [];
  saleHeaderList: any = [];
  branchList: any = [];
  customerList: any = [];
  userList: any = [];
  paymentMethodList: any = [];
  productList: any = [];

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListCompanyList();
    this.getDropListSaleHeaderList();
    this.getDropListBranchList();
    this.getDropListCustomerList();
    this.getDropListUserList();
    this.getDropListPaymentMethodList();
    this.getDropListProductList();
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
