import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {FrontProductShowComponent} from './show/front.product.show.component';
import {FrontProductDetailsComponent} from './details/front.product.details.component';




const routes: Routes = [
  { path: 'show', component: FrontProductShowComponent},
  { path: 'details/:id', component: FrontProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontProductRouting { }
