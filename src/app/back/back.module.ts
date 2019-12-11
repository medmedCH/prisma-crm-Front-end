import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRouting } from './back.routing';
import { BackComponent } from './back.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutModule } from './dashboardLayout/dashboard.layout.module';
import {AuthGuard} from '../services/security/auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CartsComponent } from './carts/carts.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  imports: [
    BackRouting,
    DashboardLayoutModule,
    BrowserModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [ BackComponent, DashboardComponent, OrdersComponent, ProductsComponent, CartsComponent, QuotationsComponent, InvoicesComponent, EditOrderComponent, ViewOrderComponent],
  providers: [AuthGuard]
})
export class BackModule { }
