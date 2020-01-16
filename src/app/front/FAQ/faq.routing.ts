import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleGuard} from '../../services/security/role.guard';
import {AllFaqComponent} from './show/all.faq.component';
import {DetailFaqComponent} from './detail/detail.faq.component';

const routes: Routes = [
  { path: '', component: AllFaqComponent /*, canActivate: [RoleGuard], data: { roles: ['Admin'] } */ },
  { path: 'id' , component: DetailFaqComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRouting { }
