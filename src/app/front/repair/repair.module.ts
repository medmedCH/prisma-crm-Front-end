import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StatusModalComponent} from './check/statusModal/statusModal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../../services/security/storage.service';
import {RepairRouting} from './repair.routing';
import {CheckRepairComponent} from './check/repair.check.component';
import {AddRepairComponent} from './add/repair.add.component';
import {RepairService} from '../../services/managers/repair.service';
import {RepairComponent} from './repair.component';
import {RefModalComponent} from './add/refModal.component';

@NgModule({
  imports: [
    RepairRouting,
    ReactiveFormsModule,
    CommonModule,
    NgbModule
  ],
  declarations: [
    CheckRepairComponent,
    StatusModalComponent,
    RefModalComponent,
    RepairComponent,
    AddRepairComponent
  ],
  providers: [RepairService, StorageService],
  entryComponents: [
    StatusModalComponent, RefModalComponent
  ],
})
export class RepairModule {
}
