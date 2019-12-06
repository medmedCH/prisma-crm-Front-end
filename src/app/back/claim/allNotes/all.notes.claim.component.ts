import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Claim} from '../../../models/Claim';
import {ClaimService} from '../../../services/managers/claim.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NoteClaim} from '../../../models/NoteClaim';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'all-notes-claim-back',
  templateUrl: './all.notes.claim.back.component.html',
  styleUrls: ['./all.notes.claim.back.component.css']
})
export class AllNotesClaimComponent implements OnInit {
  @Input()
  notes;

  ngOnInit() {
  }

}
