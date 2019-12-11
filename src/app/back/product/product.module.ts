
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductRouting} from './product.routing';
import {ProductService} from '../../services/managers/product.service';
import {NgbdModalContent, ProductAllComponent} from './all/product.all.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ProductAddComponent} from './add/product.add.component';
import {ProductAddStoreComponent} from './addstore/product.addstore.component';
import {MapsComponent} from '../../pages/maps/maps.component';

import { ToastrModule } from 'ngx-toastr';
import {ProductAddStockComponent} from './addstock/product.addstock.component';
import {ProductShowStoreComponent} from './showstore/product.showstore.component';



@NgModule({
  imports: [
    ProductRouting,
    HttpClientModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,

    ToastrModule.forRoot()

  ],
  declarations: [ProductAllComponent, NgbdModalContent, ProductAddComponent, ProductAddStoreComponent, MapsComponent, ProductAddStockComponent, ProductShowStoreComponent],
  providers: [ProductService],
  exports: [ProductAllComponent],
  bootstrap: [ProductAllComponent],
  entryComponents: [NgbdModalContent]
})
export class ProductModule { }
