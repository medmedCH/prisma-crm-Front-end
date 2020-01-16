import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsIndexFrontContentComponent} from './products-index-front-content/products-index-front-content.component';
import {ProductProfilePageFrontComponent} from './product-profile-page-front/product-profile-page-front.component';
import {ClientCartContentFrontComponent} from './client-cart-content-front/client-cart-content-front.component';
import {CheckOutFrontComponent} from './check-out-front/check-out-front.component';
import {PaypalCheckoutComponent} from './paypal-checkout/paypal-checkout.component';
import {ClientOrdersFrontComponent} from './client-orders-front/client-orders-front.component';
import {QuotationClientComponent} from './quotation-client/quotation-client.component';
import {InvoiceClientPermanentComponent} from './invoice-client-permanent/invoice-client-permanent.component';
import {InvoiceClientTemporaryComponent} from './invoice-client-temporary/invoice-client-temporary.component';
import {HomeComponent} from '../home/home.component';
import {FrontComponent} from '../front.component';


const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      {path: 'products', component: ProductsIndexFrontContentComponent},
      {path: 'details/:id', component: ProductProfilePageFrontComponent},
      {path: 'cart', component: ClientCartContentFrontComponent},
      {path: 'checkout', component: CheckOutFrontComponent},
      {path: 'paypal', component: PaypalCheckoutComponent},
      {path: 'orders/:id', component: ClientOrdersFrontComponent},
      {path: 'quotation/:id', component: QuotationClientComponent},
      {path: 'invoicePermanent/:id', component: InvoiceClientPermanentComponent},
      {path: 'temporaryInvoice/:id', component: InvoiceClientTemporaryComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtefRouting {
}
