import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {ShowComponent} from './show/show.component';
import {UpdateComponent} from './update/update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PromotionRouting} from './promotion.routing';
import {PasserenpromotionComponent} from './passerenpromotion/passerenpromotion.component';
import {HttpClientModule} from '@angular/common/http';
import {PromotionService} from '../../services/managers/promotion.service';



@NgModule({
  imports: [
    PromotionRouting,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,


  ],
  declarations: [
    CreateComponent,
    ShowComponent,
    UpdateComponent,
    PasserenpromotionComponent
  ],
  providers: [PromotionService ]
})

export class PromotionModule {
}
