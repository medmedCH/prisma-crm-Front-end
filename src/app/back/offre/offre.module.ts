import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OffreRouting} from './offre.routing';
import {AjoutComponent} from './ajout/ajout.component';
import {NgbdModalContent, ShowComponent} from './show/show.component';
import {OffreService} from '../../services/managers/offre.service';


@NgModule({
  imports: [
    OffreRouting,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,

  ],
  declarations: [AjoutComponent, ShowComponent, NgbdModalContent,
  ],
  providers: [OffreService],
  exports: [ShowComponent],
  bootstrap: [ShowComponent],
  entryComponents: [NgbdModalContent]
})

export class OffreModule {
}
