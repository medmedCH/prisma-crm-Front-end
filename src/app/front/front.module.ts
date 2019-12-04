import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRouting } from './front.routing';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front.component';
import { ClaimModule } from './claim/claim.module';
import { HeaderFrontComponent } from './header-front/header-front.component';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { ProductsIndexFrontContentComponent } from './products-index-front-content/products-index-front-content.component';
import { ProductProfilePageFrontComponent } from './product-profile-page-front/product-profile-page-front.component';
import { ClientCartContentFrontComponent } from './client-cart-content-front/client-cart-content-front.component';
import { CheckOutFrontComponent } from './check-out-front/check-out-front.component';
import { TmpinvoiceFrontComponent } from './tmpinvoice-front/tmpinvoice-front.component';
import { OnlineInvoiceFrontComponent } from './online-invoice-front/online-invoice-front.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    FrontRouting,
    ClaimModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ FrontComponent, HomeComponent, HeaderFrontComponent, FooterFrontComponent, ProductsIndexFrontContentComponent, ProductProfilePageFrontComponent, ClientCartContentFrontComponent, CheckOutFrontComponent, TmpinvoiceFrontComponent, OnlineInvoiceFrontComponent ],
})
export class FrontModule { }
