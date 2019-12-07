import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Claim} from '../../../models/Claim';
import {ClaimService} from '../../../services/managers/claim.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'edit-claim-modal',
  templateUrl: './edit.claim.back.component.html',
  styleUrls: []
})
export class EditClaimBackComponent implements OnInit {

  @Input()
  c: Claim;

  constructor(public activeModal: NgbActiveModal, private claimService: ClaimService) {

  }

  editClaimForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.editClaimForm.get('title').setValue(this.c.title);
    this.editClaimForm.get('description').setValue(this.c.description);
  }

  edit(c: Claim) {
    console.log('click');
    if ((this.c.title !== this.editClaimForm.value.title) || (this.c.description !== this.editClaimForm.value.description) ) {
      console.log('changement');
      this.c.title = this.editClaimForm.value.title;
      this.c.description = this.editClaimForm.value.description;
      console.log(this.c);
      this.claimService.editClaim(c).subscribe(
        response => {
          console.log('editClaim sucessfullaaay');
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
