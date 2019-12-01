import {NgModule} from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import {ProductRouting} from './product.routing';
import {ProductService} from '../../services/managers/product.service';
import {ProductAllComponent} from './all/product.all.component';


@NgModule({
  imports: [
    ProductRouting,
    ReactiveFormsModule
  ],
  declarations: [ProductAllComponent],
  providers: [ProductService]
})
export class ProductModule { }
