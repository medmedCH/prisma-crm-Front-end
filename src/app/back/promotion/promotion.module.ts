import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {NgbdModalContent, ShowComponent} from './show/show.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PromotionRouting} from './promotion.routing';
import {PasserenpromotionComponent} from './passerenpromotion/passerenpromotion.component';
import {HttpClientModule} from '@angular/common/http';
import {PromotionService} from '../../services/managers/promotion.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShowprodenpromotionComponent } from './showprodenpromotion/showprodenpromotion.component';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule} from '@angular/material';



@NgModule({
  imports: [
    PromotionRouting,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  declarations: [
    CreateComponent,
    ShowComponent,
    PasserenpromotionComponent, NgbdModalContent, ShowprodenpromotionComponent
  ],
  providers: [PromotionService],
  exports: [ShowComponent],
  bootstrap: [ShowComponent],
  entryComponents: [NgbdModalContent]
})

export class PromotionModule {
}
