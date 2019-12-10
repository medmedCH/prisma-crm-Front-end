import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BackRouting} from './back.routing';
import {BackComponent} from './back.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardLayoutModule} from './dashboardLayout/dashboard.layout.module';
import {AuthGuard} from '../services/security/auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserModule} from './User/user.module';
import {VehiculeModule} from './vehicule/vehicule.module';
import {ToastrModule} from 'ngx-toastr';
import {RepairModule} from './repairs/repair.module';


@NgModule({
  imports: [
    BackRouting,
    DashboardLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    RepairModule,
    VehiculeModule
  ],
  declarations: [BackComponent, DashboardComponent, UserProfileComponent],
  providers: [AuthGuard]
})
export class BackModule {
}
