import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRouting } from './front.routing';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front.component';
import { ClaimModule } from './claim/claim.module';
import {AlertComponent} from './alerteJumbotron/alert.component';


@NgModule({
  imports: [
    FrontRouting,
    ClaimModule,
    CommonModule,
  ],
  declarations: [ FrontComponent, HomeComponent, AlertComponent ],
})
export class FrontModule { }
