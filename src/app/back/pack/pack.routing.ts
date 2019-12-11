import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddComponent} from './add/add.component';
import {AfficheComponent} from './affiche/affiche.component';
import {AddproductpackComponent} from './addproductpack/addproductpack.component';

const routes: Routes = [
  {path: 'add', component: AddComponent},
  {path: 'affiche', component: AfficheComponent},
  {path: 'addpp', component: AddproductpackComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackRouting {
}
