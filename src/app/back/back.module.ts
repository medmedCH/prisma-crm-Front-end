import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackRouting} from './back.routing';
import {BackComponent} from './back.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardLayoutModule} from './dashboardLayout/dashboard.layout.module';
import {AuthGuard} from '../services/security/auth.guard';
import {ClaimBackModule} from './claim/claim.back.module';
import {ProductModule} from './product/product.module';
import {PromotionModule} from './promotion/promotion.module';
import {PromotionService} from '../services/managers/promotion.service';
import { ScoringAgentComponent } from './scoringAgent/scoring.agent.component';
import {OffreModule} from './offre/offre.module';
import {OffreService} from '../services/managers/offre.service';
import {PackModule} from './pack/pack.module';
import {PackService} from '../services/managers/pack.service';
import {Affiche1Component} from './pack/affiche1/affiche1.component';
import {AppComponent} from '../app.component';
import {MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatNativeDateModule, MatSliderModule} from '@angular/material';

@NgModule({
  imports: [
    BackRouting,
    DashboardLayoutModule,
    ClaimBackModule,
    ProductModule,
    PromotionModule,
    OffreModule,
    PackModule, MatDialogModule, CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSliderModule,
    CommonModule
  ],
  declarations: [BackComponent, DashboardComponent, Affiche1Component , ScoringAgentComponent],
  providers: [AuthGuard, PromotionService, OffreService, PackService, PromotionService],
  entryComponents: [Affiche1Component]
})
export class BackModule {
}
