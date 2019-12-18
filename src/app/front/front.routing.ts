import {HomeComponent} from './home/home.component';
import {FrontComponent} from './front.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllFaqComponent} from './FAQ/show/all.faq.component';
import {DetailFaqComponent} from './FAQ/detail/detail.faq.component';
import {RoleGuard} from '../services/security/role.guard';
import {AllFaqResolverService} from '../services/resolvers/all.faq.resolver.service';
import {FaqDetailResolverService} from '../services/resolvers/faq.detail.resolver.service';

const routes: Routes = [
  {
    path: '',
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRouting {
}
