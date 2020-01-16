import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Claim} from '../../../models/Claim';
import {ClaimService} from '../../../services/managers/claim.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NoteClaim} from '../../../models/NoteClaim';
import {NotesClaimService} from '../../../services/managers/notesClaim.service';
import {StorageService} from '../../../services/security/storage.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-notes-claim-back',
  templateUrl: './add.note.claim.back.component.html',
  styleUrls: ['./add.note.claim.back.component.css']
})
export class AddNoteClaimComponent implements OnInit {

  @Input()
  claim;

  @Output()
  sendAddRequest = new EventEmitter();

  noteClaim: NoteClaim;
  constructor(private notesService: NotesClaimService, private router: Router , private modalService: NgbModal) {
  }

  addNoteForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
  }

  addNoteFromChild() {
    this.sendAddRequest.emit(this.addNoteForm.value.description);
    this.addNoteForm.value.description.setValue('');
  }
}
