import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StorageService} from '../../services/security/storage.service';
import {AllFaqComponent} from './show/all.faq.component';
import {DetailFaqComponent} from './detail/detail.faq.component';
import {FaqService} from '../../services/managers/faq.service';
import {FaqRouting} from './faq.routing';
import {ClaimService} from '../../services/managers/claim.service';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    // FaqRouting,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [
    AllFaqComponent,
    DetailFaqComponent,
  ],
  providers: [FaqService, ClaimService, StorageService],
  entryComponents: [
  ],
})
export class FaqModule { }
