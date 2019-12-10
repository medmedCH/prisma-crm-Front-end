import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {ProductAllComponent} from './all/product.all.component';
import {ProductAddComponent} from './add/product.add.component';
import {ProductAddStoreComponent} from './addstore/product.addstore.component';



const routes: Routes = [

  { path: 'all', component: ProductAllComponent},
  { path: 'new', component: ProductAddComponent},
  { path: 'store/new', component: ProductAddStoreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRouting { }
