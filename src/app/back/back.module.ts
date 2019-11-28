import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRouting } from './back.routing';
import { BackComponent } from './back.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutModule } from './dashboardLayout/dashboard.layout.module';
import {AuthGuard} from '../services/security/auth.guard';
import { PromotionComponent } from './promotion/promotion.component';


@NgModule({
  imports: [
    BackRouting,
    DashboardLayoutModule
  ],
  declarations: [ BackComponent, DashboardComponent, PromotionComponent],
  providers: [AuthGuard]
})
export class BackModule { }
