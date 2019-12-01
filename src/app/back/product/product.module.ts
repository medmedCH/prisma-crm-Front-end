import {NgModule} from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import {ProductRouting} from './product.routing';
import {ProductService} from '../../services/managers/product.service';
import {ProductAllComponent} from './all/product.all.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    ProductRouting,
    HttpClientModule,
    CommonModule,
  ],
  declarations: [ProductAllComponent],
  providers: [ProductService]
})
export class ProductModule { }
