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

  purchaseHeaderList: any = [];
  companyList: any = [];
  branchList: any = [];
  supplierList: any = [];
  userList: any = [];
  paymentMethodList: any = [];
  productList: any = [];

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListPurchaseHeaderList();
    this.getDropListCompanyList();
    this.getDropListBranchList();
    this.getDropListSupplierList();
    this.getDropListUserList();
    this.getDropListPaymentMethodList();
    this.getDropListProductList();
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

  getDropListPurchaseHeaderList() {
    this.Data.getDropList('/purchase-headers').subscribe((data: any) => {
      this.purchaseHeaderList = data;
    });
  }

  getDropListCompanyList() {
    this.Data.getDropList('/companies').subscribe((data: any) => {
      this.companyList = data;
    });
  }

  getDropListBranchList() {
    this.Data.getDropList('/branches').subscribe((data: any) => {
      this.branchList = data;
    });
  }

  getDropListSupplierList() {
    this.Data.getDropList('/suppliers').subscribe((data: any) => {
      this.supplierList = data;
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
