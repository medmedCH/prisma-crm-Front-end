import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AjoutComponent} from './ajout/ajout.component';
import {ShowComponent} from './show/show.component';

const routes: Routes = [
  {path: 'ajout', component: AjoutComponent},
  {path: 'show', component: ShowComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffreRouting {
}
