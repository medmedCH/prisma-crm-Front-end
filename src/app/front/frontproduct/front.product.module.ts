
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ProductService} from '../../services/managers/product.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FrontProductShowComponent} from './show/front.product.show.component';
import {FrontProductRouting} from './front.product.routing';
import {FrontProductDetailsComponent} from './details/front.product.details.component';
import {FrontProductNearestStoreComponent} from './neareststore/front.product.neareststore.component';







@NgModule({
  imports: [
    FrontProductRouting,
    HttpClientModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [FrontProductShowComponent, FrontProductDetailsComponent, FrontProductNearestStoreComponent],
  providers: [ProductService],

})
export class FrontProductModule { }
