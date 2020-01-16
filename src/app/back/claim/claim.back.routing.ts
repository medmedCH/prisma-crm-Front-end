import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleGuard} from '../../services/security/role.guard';
import {AllClaimBackComponent} from './all/all.claim.back';

const routes: Routes = [
  { path: '', component: AllClaimBackComponent /*, canActivate: [RoleGuard], data: { roles: ['Admin','financial'] } */ },
  // { path: 'add', component: ClaimAddComponent /*, canActivate: [RoleGuard], data: { roles: ['Admin'] } */ },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimBackRouting { }
