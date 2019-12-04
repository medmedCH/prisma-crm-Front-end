import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimBackRouting } from './claim.back.routing'
import { ClaimService } from 'src/app/services/managers/claim.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../../services/security/storage.service';
import {AllClaimBackComponent} from './all/all.claim.back';
import {EditClaimBackComponent} from './edit/edit.claim.back.component';
import {ShowClaimBackComponent} from './show/show.claim.back.component';

@NgModule({
  imports: [
    ClaimBackRouting,
    ReactiveFormsModule,
    CommonModule,
    NgbModule
  ],
  declarations: [
    AllClaimBackComponent,
    EditClaimBackComponent,
    ShowClaimBackComponent,
  ],
  providers: [ClaimService, StorageService],
  entryComponents: [
    EditClaimBackComponent,
  ],
})
export class ClaimBackModule { }
