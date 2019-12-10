import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VehiculeComponent} from './vehicule.component';

const routes: Routes = [
 // {path: 'list-Vehicule', component: ListUserComponent /*, canActivate: [RoleGuard], data: { roles: ['Admin'] } */},
  {path: '', component: VehiculeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRouting {
}
