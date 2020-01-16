import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClaimService} from 'src/app/services/managers/claim.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../../services/security/storage.service';
import {PromotionService} from '../../services/managers/promotion.service';
import {NgbdModalContent, PacsComponent} from './pacs/pacs.component';
import {PacRouting} from './pac.routing';


@NgModule({
  imports: [
    PacRouting,
    ReactiveFormsModule,
    CommonModule,
    NgbModule
  ],
  declarations: [
    PacsComponent, NgbdModalContent
  ],
  providers: [PromotionService, StorageService],
  exports: [PacsComponent],
  bootstrap: [PacsComponent],
  entryComponents: [NgbdModalContent],
})
export class PacModule {
}
