import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AffComponent} from './aff/aff.component';

const routes: Routes = [
  { path: 'aff', component: AffComponent /*, canActivate: [RoleGuard], data: { roles: ['Admin'] } */ },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRouting { }
