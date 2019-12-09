import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AddComponent} from './add/add.component';
import {AfficheComponent} from './affiche/affiche.component';
import {PackRouting} from './pack.routing';
import {PackService} from '../../services/managers/pack.service';
import {AddproductpackComponent} from './addproductpack/addproductpack.component';
import {NgbdModalContent} from '../pack/affiche/affiche.component';


@NgModule({
  imports: [
    PackRouting,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,

  ],
  declarations: [AddComponent, AfficheComponent, AddproductpackComponent, NgbdModalContent
  ],
  providers: [PackService],
  exports: [AfficheComponent],
  bootstrap: [AfficheComponent],
  entryComponents: [NgbdModalContent]
})

export class PackModule {
}
