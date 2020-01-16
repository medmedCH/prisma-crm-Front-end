import {BackComponent} from './back.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from '../services/security/auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { ScoringAgentComponent } from './scoringAgent/scoring.agent.component';

const routes: Routes = [
  {
    path: '',
    component: BackComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'users', loadChildren: './User/user.module#UserModule'},
      {path: 'vehicules', loadChildren: './vehicule/vehicule.module#VehiculeModule'},
      {path: 'repaires', loadChildren: './repairs/repair.module#RepairModule'},
      {path: 'scoringAgent', component: ScoringAgentComponent},
      {path: 'claim', loadChildren: './claim/claim.back.module#ClaimBackModule'},
      {path: 'product', loadChildren: './product/product.module#ProductModule'},
      {path: 'promotion', loadChildren: './promotion/promotion.module#PromotionModule'},
      {path: 'offre', loadChildren: './offre/offre.module#OffreModule'},
      {path: 'pack', loadChildren: './pack/pack.module#PackModule'}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRouting {
}
