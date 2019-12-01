import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRouting } from './back.routing';
import { BackComponent } from './back.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutModule } from './dashboardLayout/dashboard.layout.module';
import {AuthGuard} from '../services/security/auth.guard';
import {ProductModule} from './product/product.module';




@NgModule({
  imports: [
    BackRouting,
    DashboardLayoutModule,
    ProductModule
  ],
  declarations: [ BackComponent, DashboardComponent],
  providers: [AuthGuard]
})
export class BackModule { }
