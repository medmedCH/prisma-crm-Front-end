import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FaqService} from '../../../services/managers/faq.service';
import { ActivatedRoute } from '@angular/router';
import {Claim} from '../../../models/Claim';
import {ClaimService} from '../../../services/managers/claim.service';
import {NoteClaim} from '../../../models/NoteClaim';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'faq-detail',
  templateUrl: './detail.faq.component.html',
  styleUrls: ['./detail.faq.component.css']
})
export class DetailFaqComponent {
  c: {} = {} ;

  notes: NoteClaim[];
  id = this.route.snapshot.params.id;

  constructor(private claimService: ClaimService, private router: Router, private route: ActivatedRoute) {
    console.log(this.route.snapshot.data['faq']);
    this.c = this.route.snapshot.data['faq'];
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.claimService.getFaqById(this.id)
      .subscribe(
        response => {this.c = response;} ,
        error => {console.log(error);}
      );

    // @ts-ignore
    this.claimService.getAllNotesByClaimId<Claim[]>(this.id)
      .subscribe(
        response => {this.notes = response;} ,
        error => {console.log(error);}
      );
  }
}
