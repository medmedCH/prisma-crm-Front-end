import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front.component';
import { ClaimModule } from './claim/claim.module';
import {AlertComponent} from './alerteJumbotron/alert.component';
import {RouterModule} from '@angular/router';
import {FrontRouting} from './front.routing';
import {FaqModule} from './FAQ/faq.module';
import {AllFaqResolverService} from '../services/resolvers/all.faq.resolver.service';
import {FrontProductModule} from './frontproduct/front.product.module';
import {PromoModule} from './promo/promo.module';
import {PacModule} from './pac/pac.module';
import { HeaderFrontComponent } from './header-front/header-front.component';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { ProductsIndexFrontContentComponent } from './products-index-front-content/products-index-front-content.component';
import { ProductProfilePageFrontComponent } from './product-profile-page-front/product-profile-page-front.component';
import { ClientCartContentFrontComponent } from './client-cart-content-front/client-cart-content-front.component';
import { CheckOutFrontComponent } from './check-out-front/check-out-front.component';
import { TmpinvoiceFrontComponent } from './tmpinvoice-front/tmpinvoice-front.component';
import { OnlineInvoiceFrontComponent } from './online-invoice-front/online-invoice-front.component';
import {FormsModule} from '@angular/forms';
import { PaypalCheckoutComponent } from './paypal-checkout/paypal-checkout.component';
import {NgxPayPalModule} from 'ngx-paypal';


@NgModule({
  imports: [
    FrontRouting,
    ClaimModule,
    FaqModule,
    CommonModule,
    RouterModule,
    FrontProductModule,
    PromoModule,
    PacModule,
    CommonModule,
    FormsModule,
    NgxPayPalModule
  ],
  declarations: [ FrontComponent,
    HomeComponent,
    AlertComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    ProductsIndexFrontContentComponent,
    ProductProfilePageFrontComponent,
    ClientCartContentFrontComponent,
    CheckOutFrontComponent,
    TmpinvoiceFrontComponent,
    OnlineInvoiceFrontComponent,
    PaypalCheckoutComponent ],
})
export class FrontModule { }
