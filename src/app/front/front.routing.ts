import {HomeComponent} from './home/home.component';
import {FrontComponent} from './front.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsIndexFrontContentComponent} from './products-index-front-content/products-index-front-content.component';
import {ProductProfilePageFrontComponent} from './product-profile-page-front/product-profile-page-front.component';
import {ClientCartContentFrontComponent} from './client-cart-content-front/client-cart-content-front.component';
import {CheckOutFrontComponent} from './check-out-front/check-out-front.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsIndexFrontContentComponent},
      {path: 'details/:id', component: ProductProfilePageFrontComponent},
      {path: 'auth', loadChildren: '../layouts/auth-layout/auth-layout.module#AuthLayoutModule'},
      {path: 'claim', loadChildren: './claim/claim.module#ClaimModule'},
      {path: 'cart', component: ClientCartContentFrontComponent},
      {path: 'checkout', component: CheckOutFrontComponent},
      {path: '**', component: HomeComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRouting {
}
