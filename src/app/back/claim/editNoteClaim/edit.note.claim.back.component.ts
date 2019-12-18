
import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Claim} from '../../../models/Claim';
import {ClaimService} from '../../../services/managers/claim.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NoteClaim} from '../../../models/NoteClaim';
import {NotesClaimService} from '../../../services/managers/notesClaim.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'edit-note-claim-modal',
  templateUrl: './edit.note.claim.back.component.html',
  styleUrls: []
})
export class EditNoteBackComponent implements OnInit {

 @Input()
 note: NoteClaim;

  constructor(public activeModal: NgbActiveModal, private noteClaimService: NotesClaimService) {

  }

  editNoteClaimForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    console.log(this.note);
    this.editNoteClaimForm.get('description').setValue(this.note.description);
  }

  edit() {
    if (this.note.description !== this.editNoteClaimForm.value.description) {
      this.note.description = this.editNoteClaimForm.value.description;
      console.log(this.note, 'note after edit');
      const n = this.note;
      console.log(n, 'n');
      this.noteClaimService.editNoteClaim(this.note).subscribe(
        response => {
          console.log('edit note Claim sucessfullaaay');
          this.activeModal.close();
        },
        error => {
          console.log(error);
          this.activeModal.close();
        }
      );
    }
  }
}
