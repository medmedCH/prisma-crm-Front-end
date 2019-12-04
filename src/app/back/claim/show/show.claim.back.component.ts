import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Claim} from '../../../models/Claim';
import {ClaimService} from '../../../services/managers/claim.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NoteClaim} from '../../../models/NoteClaim';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'show-claim-modal',
  templateUrl: './show.claim.back.component.html',
  styleUrls: ['./show.claim.back.component.css']
})
export class ShowClaimBackComponent implements OnInit {
  c: {} = {} ;

  notes: NoteClaim[];
  id = this.route.snapshot.params.id;

  constructor(private claimService: ClaimService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.claimService.getClaimById(this.id)
      .subscribe(
        response => {
          console.log(response);
          this.c = response;} ,
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
