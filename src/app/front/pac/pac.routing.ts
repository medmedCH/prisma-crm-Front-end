import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PacsComponent} from './pacs/pacs.component';

const routes: Routes = [
  { path: 'pacs', component: PacsComponent /*, canActivate: [RoleGuard], data: { roles: ['Admin'] } */ },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacRouting { }
