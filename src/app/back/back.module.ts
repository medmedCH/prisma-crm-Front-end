import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackRouting } from './back.routing';
import { BackComponent } from './back.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutModule } from './dashboardLayout/dashboard.layout.module';
import {AuthGuard} from '../services/security/auth.guard';
import {ClaimBackModule} from './claim/claim.back.module';
import {ProductModule} from './product/product.module';
import {PromotionModule} from './promotion/promotion.module';
import {PromotionService} from '../services/managers/promotion.service';
import {OffreModule} from './offre/offre.module';
import {OffreService} from '../services/managers/offre.service';

@NgModule({
  imports: [
    BackRouting,
    DashboardLayoutModule,
    ClaimBackModule,
    ProductModule,
    PromotionModule,
    OffreModule
  ],
  declarations: [BackComponent, DashboardComponent ],
  providers: [AuthGuard, PromotionService, OffreService ]
})
export class BackModule {
}
