import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../../services/security/storage.service';
import {UserRouting} from './user.routing';
import {UserComponent} from './user.component';
import {ListUserComponent} from './listUser/user.list.component';
import {DashboardLayoutModule} from '../dashboardLayout/dashboard.layout.module';
import {UsersService} from '../../services/managers/users.service';
@NgModule({
  imports: [
    UserRouting,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    DashboardLayoutModule,
  ],
  declarations: [
    ListUserComponent,
    UserComponent
  ],
  providers: [UsersService, StorageService],
  entryComponents: [
  ],
})
export class UserModule { }
