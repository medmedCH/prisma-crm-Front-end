import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VehiculeComponent} from './vehicule.component';
import {MaintenanceComponent} from './Maintaince/maintenance.component';
import {MaintainceResolver} from '../../services/resolvers/maintainceResolver';

const routes: Routes = [
  {
    path: 'maintenance',
    component: MaintenanceComponent,
    resolve: {listMaint: MaintainceResolver}/*, canActivate: [RoleGuard], data: { roles: ['Admin'] } */
  },
  {path: '', component: VehiculeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRouting {
}
