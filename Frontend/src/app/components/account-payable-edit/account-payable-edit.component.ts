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

  purchaseHeaderList: any = [];
  companyList: any = [];
  branchList: any = [];
  supplierList: any = [];
  userList: any = [];
  paymentMethodList: any = [];
  productList: any = [];

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDropListPurchaseHeaderList();
    this.getDropListCompanyList();
    this.getDropListBranchList();
    this.getDropListSupplierList();
    this.getDropListUserList();
    this.getDropListPaymentMethodList();
    this.getDropListProductList();
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
