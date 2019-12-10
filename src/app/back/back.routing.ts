import {BackComponent} from './back.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from '../services/security/auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';

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


    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRouting {
}
