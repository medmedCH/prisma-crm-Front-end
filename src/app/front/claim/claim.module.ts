import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimRouting } from './claim.routing'
import { ClaimCheckComponent } from './check/claim.check.component'
import { ClaimService } from 'src/app/services/managers/claim.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StatusModalComponent} from './check/statusModal/statusModal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClaimAddComponent} from './add/claim.add.component';
import {StorageService} from '../../services/security/storage.service';

@NgModule({
  imports: [
    ClaimRouting,
    ReactiveFormsModule,
    CommonModule,
    NgbModule
  ],
  declarations: [
    ClaimCheckComponent,
    StatusModalComponent,
    ClaimAddComponent
  ],
  providers: [ClaimService, StorageService],
  entryComponents: [
    StatusModalComponent,
  ],
})
export class ClaimModule { }
