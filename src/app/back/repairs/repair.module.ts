import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../../services/security/storage.service';
import {RepairRouting} from './repair.routing';
import {RepairComponent} from './repair.component';
import {DashboardLayoutModule} from '../dashboardLayout/dashboard.layout.module';
import {UsersService} from '../../services/managers/users.service';
import {RepairService} from '../../services/managers/repair.service';
import {EditModalComponent} from './editModal.component';
import {SentimentComponent} from './sentiments/sentiment.component';

@NgModule({
  imports: [
    RepairRouting,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    DashboardLayoutModule,
  ],

  declarations: [
    RepairComponent,
    EditModalComponent,
    SentimentComponent
  ],
  providers: [RepairService, UsersService, StorageService],
  entryComponents: [EditModalComponent, SentimentComponent],
})
export class RepairModule {
}
