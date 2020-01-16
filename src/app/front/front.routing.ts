import {HomeComponent} from './home/home.component';
import {FrontComponent} from './front.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllFaqComponent} from './FAQ/show/all.faq.component';
import {DetailFaqComponent} from './FAQ/detail/detail.faq.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: '', loadChildren: '../layouts/auth-layout/auth-layout.module#AuthLayoutModule'},
      {path: 'claim', loadChildren: './claim/claim.module#ClaimModule'},
      {path: 'repair', loadChildren: './repair/repair.module#RepairModule'/*, canActivate: [RoleGuard], data: { roles: ['Admin'] } */},
      {path: 'faq', component: AllFaqComponent},
      {path: 'faq/:id', component: DetailFaqComponent },
      {path: 'promo', loadChildren: './promo/promo.module#PromoModule'},
      {path: 'pac', loadChildren: './pac/pac.module#PacModule'},
      {path: 'front/products', loadChildren: './frontproduct/front.product.module#FrontProductModule'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRouting {
}
