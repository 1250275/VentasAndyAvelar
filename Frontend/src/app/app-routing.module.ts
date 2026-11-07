import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { BranchComponent } from './components/branch/branch.component';
import { BranchEditComponent } from './components/branch-edit/branch-edit.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { SupplierEditComponent } from './components/supplier-edit/supplier-edit.component';
import { WorkAreaComponent } from './components/work-area/work-area.component';
import { WorkAreaEditComponent } from './components/work-area-edit/work-area-edit.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { UserTypeEditComponent } from './components/user-type-edit/user-type-edit.component';
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';
import { ProductTypeEditComponent } from './components/product-type-edit/product-type-edit.component';
import { ProductComponent } from './components/product/product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { PaymentMethodEditComponent } from './components/payment-method-edit/payment-method-edit.component';
import { AccountReceivableComponent } from './components/account-receivable/account-receivable.component';
import { AccountReceivableEditComponent } from './components/account-receivable-edit/account-receivable-edit.component';
import { AccountPayableComponent } from './components/account-payable/account-payable.component';
import { AccountPayableEditComponent } from './components/account-payable-edit/account-payable-edit.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentEditComponent } from './components/payment-edit/payment-edit.component';

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
    path: 'companies/edit/:id',
    component: CompanyEditComponent
  },
  {
    path: 'branches',
    component: BranchComponent
  },
  {
    path: 'branches/edit/:id',
    component: BranchEditComponent
  },
  {
    path: 'suppliers',
    component: SupplierComponent
  },
  {
    path: 'suppliers/edit/:id',
    component: SupplierEditComponent
  },
  {
    path: 'work-areas',
    component: WorkAreaComponent
  },
  {
    path: 'work-areas/edit/:id',
    component: WorkAreaEditComponent
  },
  {
    path: 'employees',
    component: EmployeeComponent
  },
  {
    path: 'employees/edit/:id',
    component: EmployeeEditComponent
  },
  {
    path: 'user-types',
    component: UserTypeComponent
  },
  {
    path: 'user-types/edit/:id',
    component: UserTypeEditComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent
  },
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'customers/edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'product-types',
    component: ProductTypeComponent
  },
  {
    path: 'product-types/edit/:id',
    component: ProductTypeEditComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'payment-methods',
    component: PaymentMethodComponent
  },
  {
    path: 'payment-methods/edit/:id',
    component: PaymentMethodEditComponent
  },
  {
    path: 'accounts-receivable',
    component: AccountReceivableComponent
  },
  {
    path: 'accounts-receivable/edit/:id',
    component: AccountReceivableEditComponent
  },
  {
    path: 'accounts-payable',
    component: AccountPayableComponent
  },
  {
    path: 'accounts-payable/edit/:id',
    component: AccountPayableEditComponent
  },
  {
    path: 'payments',
    component: PaymentComponent
  },
  {
    path: 'payments/edit/:id',
    component: PaymentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
