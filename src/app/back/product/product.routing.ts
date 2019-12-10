import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {ProductAllComponent} from './all/product.all.component';
import {ProductAddComponent} from './add/product.add.component';
import {ProductAddStoreComponent} from './addstore/product.addstore.component';
import {MapsComponent} from '../../pages/maps/maps.component';



const routes: Routes = [

  { path: 'all', component: ProductAllComponent},
  { path: 'new', component: ProductAddComponent},
  { path: 'store/new', component: ProductAddStoreComponent},
  { path: 'mymap', component: MapsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRouting { }
