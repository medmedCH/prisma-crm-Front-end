import {BackComponent} from './back.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AuthGuard} from '../services/security/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BackComponent,
    children: [
      {path: '', component: DashboardComponent},
<<<<<<< HEAD
      {path: 'claim', loadChildren: './claim/claim.back.module#ClaimBackModule'},
      {path: 'product', loadChildren: './product/product.module#ProductModule'}
=======
      {path: 'promotion', loadChildren: () => import('./promotion/promotion.module').then(m => m.PromotionModule)}
>>>>>>> bf7218dd85542c56d099def06d4d2ee35438ffde
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRouting {
}
