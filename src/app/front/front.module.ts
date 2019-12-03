import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front.component';
import { ClaimModule } from './claim/claim.module';
import {AlertComponent} from './alerteJumbotron/alert.component';
import {RouterModule} from '@angular/router';
import {FrontRouting} from './front.routing';
import {FaqModule} from './FAQ/faq.module';


@NgModule({
  imports: [
    FrontRouting,
    ClaimModule,
    FaqModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [ FrontComponent, HomeComponent, AlertComponent ],
})
export class FrontModule { }
