import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimService } from 'src/app/services/managers/claim.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../../services/security/storage.service';
import {AffComponent} from './aff/aff.component';
import {PromotionService} from '../../services/managers/promotion.service';
import {PromoRouting} from './promo.routing';

@NgModule({
  imports: [
    PromoRouting,
    ReactiveFormsModule,
    CommonModule,
    NgbModule
  ],
  declarations: [
   AffComponent
  ],
  providers: [PromotionService, StorageService],
  entryComponents: [
  ],
})
export class PromoModule { }
