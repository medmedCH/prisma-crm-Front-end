import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {ProductAllComponent} from './all/product.all.component';

const routes: Routes = [

  { path: 'all', component: ProductAllComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRouting { }
