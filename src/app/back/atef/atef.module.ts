import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OrdersComponent} from './orders/orders.component';
import {ProductsComponent} from './products/products.component';
import {CartsComponent} from './carts/carts.component';
import {QuotationsComponent} from './quotations/quotations.component';
import {RecetteComponent} from './recette/recette.component';
import {InvoicesComponent} from './invoices/invoices.component';
import {EditOrderComponent} from './edit-order/edit-order.component';
import {ViewOrderComponent} from './view-order/view-order.component';
import {AuthGuard} from '../../services/security/auth.guard';
import {AtefRouting} from './atef.routing';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    AtefRouting,
    FormsModule,
    CommonModule,

  ],
  declarations: [
    OrdersComponent,
    ProductsComponent,
    CartsComponent,
    QuotationsComponent,
    InvoicesComponent,
    EditOrderComponent,
    ViewOrderComponent,
    RecetteComponent
  ],
  providers: [AuthGuard ],
})
export class AtefModule { }
