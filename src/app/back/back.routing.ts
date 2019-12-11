import {BackComponent} from './back.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AuthGuard} from '../services/security/auth.guard';
import { ScoringAgentComponent } from './scoringAgent/scoring.agent.component';
import {ProductsIndexFrontContentComponent} from '../front/products-index-front-content/products-index-front-content.component';
import {ProductsComponent} from './products/products.component';
import {OrdersComponent} from './orders/orders.component';
import {QuotationsComponent} from './quotations/quotations.component';
import {InvoicesComponent} from './invoices/invoices.component';
import {CartsComponent} from './carts/carts.component';
import {ViewOrderComponent} from './view-order/view-order.component';
import {EditOrderComponent} from './edit-order/edit-order.component';

const routes: Routes = [
  {
    path: 'back',
    component: BackComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'scoringAgent', component: ScoringAgentComponent},
      {path: 'claim', loadChildren: './claim/claim.back.module#ClaimBackModule'},
      {path: 'product', loadChildren: './product/product.module#ProductModule'},
      {path: 'promotion', loadChildren: './promotion/promotion.module#PromotionModule'},
      {path: 'offre', loadChildren: './offre/offre.module#OffreModule'},
      {path: 'pack', loadChildren: './pack/pack.module#PackModule'}
      {path: 'products', component: ProductsComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'quotations', component: QuotationsComponent},
      {path: 'invoices', component: InvoicesComponent},
      {path: 'carts', component: CartsComponent},
      {path: 'viewOrder', component: ViewOrderComponent},
      {path: 'editOrder', component: EditOrderComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRouting {
}
