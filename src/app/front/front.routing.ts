import {HomeComponent} from './home/home.component';
import {FrontComponent} from './front.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllFaqComponent} from './FAQ/show/all.faq.component';
import {DetailFaqComponent} from './FAQ/detail/detail.faq.component';
import {RoleGuard} from '../services/security/role.guard';
import {AllClaimsResolverService} from '../services/resolvers/all.claims.resolver.service';
import {AllFaqResolverService} from '../services/resolvers/all.faq.resolver.service';
import {FaqDetailResolverService} from '../services/resolvers/faq.detail.resolver.service';
import {ProductsIndexFrontContentComponent} from './products-index-front-content/products-index-front-content.component';
import {ProductProfilePageFrontComponent} from './product-profile-page-front/product-profile-page-front.component';
import {ClientCartContentFrontComponent} from './client-cart-content-front/client-cart-content-front.component';
import {CheckOutFrontComponent} from './check-out-front/check-out-front.component';
import {PaypalCheckoutComponent} from './paypal-checkout/paypal-checkout.component';

const routes: Routes = [
  {
    path: 'front',
    component: FrontComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: '', loadChildren: '../layouts/auth-layout/auth-layout.module#AuthLayoutModule'},
      {path: 'faq', component: AllFaqComponent, resolve : { listFaq: AllFaqResolverService }},
      {path: 'faq/:id', component: DetailFaqComponent, resolve : {faq: FaqDetailResolverService} },
      {path: 'claim', loadChildren: './claim/claim.module#ClaimModule'},
      {path: 'front/products', loadChildren: './frontproduct/front.product.module#FrontProductModule'},
      {path: 'promo', loadChildren: './promo/promo.module#PromoModule'},
      {path: 'pac', loadChildren: './pac/pac.module#PacModule'},
      {path: 'products', component: ProductsIndexFrontContentComponent},
      {path: 'details/:id', component: ProductProfilePageFrontComponent},
      {path: 'auth', loadChildren: '../layouts/auth-layout/auth-layout.module#AuthLayoutModule'},
      {path: 'cart', component: ClientCartContentFrontComponent},
      {path: 'checkout', component: CheckOutFrontComponent},
      {path: 'paypal', component: PaypalCheckoutComponent},
      {path: '**', component: HomeComponent},
      {path: 'repair', loadChildren: './repair/repair.module#RepairModule'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRouting {
}
