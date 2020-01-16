import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front.component';
import { ClaimModule } from './claim/claim.module';
import {AlertComponent} from './alerteJumbotron/alert.component';
import {RepairModule} from './repair/repair.module';
import {RouterModule} from '@angular/router';
import {FrontRouting} from './front.routing';
import {FaqModule} from './FAQ/faq.module';
import {PromoModule} from './promo/promo.module';
import {PacModule} from './pac/pac.module';
import {FrontProductModule} from './frontproduct/front.product.module';
import {AllFaqResolverService} from '../services/resolvers/all.faq.resolver.service';

@NgModule({
  imports: [
    FrontRouting,
    ClaimModule,
    FaqModule,
    CommonModule,
    RepairModule,
    RouterModule,
    PromoModule,
    PacModule,
    FrontProductModule
  ],
  declarations: [ FrontComponent, HomeComponent, AlertComponent,   ],
})
export class FrontModule { }
