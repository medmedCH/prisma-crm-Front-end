import {CreateComponent} from './create/create.component';
import {ShowComponent} from './show/show.component';
import {UpdateComponent} from './update/update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PasserenpromotionComponent} from './passerenpromotion/passerenpromotion.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: 'show', component: ShowComponent},
  { path: 'update', component: UpdateComponent},
  { path: 'passer', component: PasserenpromotionComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRouting { }
