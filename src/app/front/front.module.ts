import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRouting } from './front.routing';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front.component';
import { ClaimModule } from './claim/claim.module';


@NgModule({
  imports: [
    FrontRouting,
    ClaimModule
  ],
  declarations: [ FrontComponent, HomeComponent ],
})
export class FrontModule { }
