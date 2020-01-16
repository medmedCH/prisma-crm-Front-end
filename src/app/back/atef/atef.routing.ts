import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {OrdersComponent} from './orders/orders.component';
import {QuotationsComponent} from './quotations/quotations.component';
import {InvoicesComponent} from './invoices/invoices.component';
import {CartsComponent} from './carts/carts.component';
import {ViewOrderComponent} from './view-order/view-order.component';
import {EditOrderComponent} from './edit-order/edit-order.component';
import {RecetteComponent} from './recette/recette.component';

const routes: Routes = [
  {path: 'productsBack', component: ProductsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'quotations', component: QuotationsComponent},
  {path: 'Recettes', component: InvoicesComponent},
  {path: 'carts', component: CartsComponent},
  {path: 'viewOrder', component: ViewOrderComponent},
  {path: 'editOrder', component: EditOrderComponent},
  {path: 'Recettes/recette/:date', component: RecetteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtefRouting {
}
