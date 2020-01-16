import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthGuard} from '../../services/security/auth.guard';
import {AtefRouting} from './atef.routing';
import {CommonModule} from '@angular/common';
import {ProductProfilePageFrontComponent} from './product-profile-page-front/product-profile-page-front.component';
import {ProductsIndexFrontContentComponent} from './products-index-front-content/products-index-front-content.component';
import {ClientCartContentFrontComponent} from './client-cart-content-front/client-cart-content-front.component';
import {TmpinvoiceFrontComponent} from './tmpinvoice-front/tmpinvoice-front.component';
import {CheckOutFrontComponent} from './check-out-front/check-out-front.component';
import {OnlineInvoiceFrontComponent} from './online-invoice-front/online-invoice-front.component';
import {PaypalCheckoutComponent} from './paypal-checkout/paypal-checkout.component';
import {ClientOrdersFrontComponent} from './client-orders-front/client-orders-front.component';
import {QuotationClientComponent} from './quotation-client/quotation-client.component';
import {InvoiceClientPermanentComponent} from './invoice-client-permanent/invoice-client-permanent.component';
import {InvoiceClientTemporaryComponent} from './invoice-client-temporary/invoice-client-temporary.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  imports: [
    AtefRouting,
    FormsModule,
    CommonModule,
    NgxPayPalModule,
  ],
  declarations: [
    ProductsIndexFrontContentComponent,
    ProductProfilePageFrontComponent,
    ClientCartContentFrontComponent,
    CheckOutFrontComponent,
    TmpinvoiceFrontComponent,
    OnlineInvoiceFrontComponent,
    PaypalCheckoutComponent,
    ClientOrdersFrontComponent,
    QuotationClientComponent,
    InvoiceClientPermanentComponent,
    InvoiceClientTemporaryComponent
  ],
  providers: [AuthGuard],
})
export class AtefModule {
}
