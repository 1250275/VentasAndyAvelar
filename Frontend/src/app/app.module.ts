import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
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

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyEditComponent,
    BranchComponent,
    BranchEditComponent,
    SupplierComponent,
    SupplierEditComponent,
    WorkAreaComponent,
    WorkAreaEditComponent,
    EmployeeComponent,
    EmployeeEditComponent,
    UserTypeComponent,
    UserTypeEditComponent,
    UserComponent,
    UserEditComponent,
    CustomerComponent,
    CustomerEditComponent,
    ProductTypeComponent,
    ProductTypeEditComponent,
    ProductComponent,
    ProductEditComponent,
    PaymentMethodComponent,
    PaymentMethodEditComponent,
    AccountReceivableComponent,
    AccountReceivableEditComponent,
    AccountPayableComponent,
    AccountPayableEditComponent,
    PaymentComponent,
    PaymentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
