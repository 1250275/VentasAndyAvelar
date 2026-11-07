import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { BranchComponent } from './components/branch/branch.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { WorkAreaComponent } from './components/work-area/work-area.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';
import { ProductComponent } from './components/product/product.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { AccountReceivableComponent } from './components/account-receivable/account-receivable.component';
import { AccountPayableComponent } from './components/account-payable/account-payable.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'companies',
    pathMatch: 'full'
  },
  {
    path: 'companies',
    component: CompanyComponent
  },
  {
    path: 'branches',
    component: BranchComponent
  },
  {
    path: 'suppliers',
    component: SupplierComponent
  },
  {
    path: 'work-areas',
    component: WorkAreaComponent
  },
  {
    path: 'employees',
    component: EmployeeComponent
  },
  {
    path: 'user-types',
    component: UserTypeComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'product-types',
    component: ProductTypeComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'payment-methods',
    component: PaymentMethodComponent
  },
  {
    path: 'accounts-receivable',
    component: AccountReceivableComponent
  },
  {
    path: 'accounts-payable',
    component: AccountPayableComponent
  },
  {
    path: 'payments',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
