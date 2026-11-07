import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    BranchComponent,
    SupplierComponent,
    WorkAreaComponent,
    EmployeeComponent,
    UserTypeComponent,
    UserComponent,
    CustomerComponent,
    ProductTypeComponent,
    ProductComponent,
    PaymentMethodComponent,
    AccountReceivableComponent,
    AccountPayableComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
