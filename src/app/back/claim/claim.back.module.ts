import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimBackRouting } from './claim.back.routing'
import { ClaimService } from 'src/app/services/managers/claim.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../../services/security/storage.service';
import {AllClaimBackComponent} from './all/all.claim.back';

@NgModule({
  imports: [
    ClaimBackRouting,
    ReactiveFormsModule,
    CommonModule,
    NgbModule
  ],
  declarations: [
    AllClaimBackComponent
  ],
  providers: [ClaimService, StorageService],
  entryComponents: [
    // StatusModalComponent,
  ],
})
export class ClaimBackModule { }
