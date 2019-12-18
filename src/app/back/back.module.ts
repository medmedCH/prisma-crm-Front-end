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
import { ScoringAgentComponent } from './scoringAgent/scoring.agent.component';


@NgModule({
  imports: [
    BackRouting,
    DashboardLayoutModule,
    ClaimBackModule,
    ProductModule,
    PromotionModule,
    CommonModule
  ],
  declarations: [BackComponent, DashboardComponent, ScoringAgentComponent],
  providers: [AuthGuard, PromotionService]
})
export class BackModule {
}
