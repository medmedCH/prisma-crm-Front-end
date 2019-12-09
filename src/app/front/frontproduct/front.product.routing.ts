import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {FrontProductShowComponent} from './show/front.product.show.component';




const routes: Routes = [

  { path: 'show', component: FrontProductShowComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontProductRouting { }
