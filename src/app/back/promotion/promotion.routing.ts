import {CreateComponent} from './create/create.component';
import {ShowComponent} from './show/show.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PasserenpromotionComponent} from './passerenpromotion/passerenpromotion.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: 'show', component: ShowComponent},
  { path: 'passer', component: PasserenpromotionComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRouting { }
