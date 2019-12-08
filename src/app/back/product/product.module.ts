
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductRouting} from './product.routing';
import {ProductService} from '../../services/managers/product.service';
import {NgbdModalContent, ProductAllComponent} from './all/product.all.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ProductAddComponent} from './add/product.add.component';
import {ProductUploadComponent} from './upload/product.upload.component';




@NgModule({
  imports: [
    ProductRouting,
    HttpClientModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ProductAllComponent, NgbdModalContent, ProductAddComponent, ProductUploadComponent],
  providers: [ProductService],
  exports: [ProductAllComponent],
  bootstrap: [ProductAllComponent],
  entryComponents: [NgbdModalContent]
})
export class ProductModule { }
