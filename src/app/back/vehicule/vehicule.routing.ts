import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VehiculeComponent} from './vehicule.component';
import {MaintenanceComponent} from './Maintaince/maintenance.component';

const routes: Routes = [
  {path: 'maintenance', component: MaintenanceComponent /*, canActivate: [RoleGuard], data: { roles: ['Admin'] } */},
  {path: '', component: VehiculeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRouting {
}
