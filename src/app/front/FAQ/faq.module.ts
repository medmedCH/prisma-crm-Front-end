import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StorageService} from '../../services/security/storage.service';
import {AllFaqComponent} from './show/all.faq.component';
import {DetailFaqComponent} from './detail/detail.faq.component';
import {FaqService} from '../../services/managers/faq.service';
import {ClaimService} from '../../services/managers/claim.service';
import {RouterModule} from "@angular/router";
import {AllFaqResolverService} from "../../services/resolvers/all.faq.resolver.service";
import {FaqDetailResolverService} from "../../services/resolvers/faq.detail.resolver.service";

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
  providers: [FaqService, ClaimService, StorageService,AllFaqResolverService, FaqDetailResolverService],
  entryComponents: [
  ],
})
export class FaqModule { }
