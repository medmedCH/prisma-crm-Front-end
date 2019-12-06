import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Claim} from '../../../models/Claim';
import {ClaimService} from '../../../services/managers/claim.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NoteClaim} from '../../../models/NoteClaim';
import {NotesClaimService} from '../../../services/managers/notesClaim.service';
import {AlertService} from '../../../services/common/AlerteService';
import {StorageService} from '../../../services/security/storage.service';

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
  userLogged = StorageService.get('currentUser');
  idUserLogged = this.userLogged.userId;

  constructor(private claimService: ClaimService,
              private notesClaimService: NotesClaimService,
              private alertService: AlertService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.claimService.getClaimById(this.id)
      .subscribe(
        response => {
          this.c = response; } ,
        error => {console.log(error); }
      );
      this.fetchAllNotes();
  }

  fetchAllNotes() {
    // @ts-ignore
    this.claimService.getAllNotesByClaimId<Claim[]>(this.id)
      .subscribe(
        response => {this.notes = response; } ,
        error => {console.log(error); }
      );
  }

  deletNote(n: any) {
    if (confirm('Are you sure to delete this note' )) {
      this.notesClaimService.deleteNoteClaim(n).subscribe(
        response => {
          // this.notes.splice(n.id, 1);
          this.fetchAllNotes();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  resolve(c: Claim) {
    this.claimService.resolveClaim(c.id)
      .subscribe(
        response => {
          this.alertService.success('Réclamation résolut !!');
          c.status = 'RESOLU';
        },
        error => {
          console.log(error);
        }
      );
  }

  deleguer(c: Claim) {
    this.claimService.deleguerClaim(c.id)
      .subscribe(
        response => {
          this.alertService.success('Réclamation déléguer !!');
          this.router.navigate(['/dash/claim']);
        } ,
        error => {
          console.log(error);
        }
      );
  }

  setIsFaq(c: Claim) {
    this.claimService.setAsFAQ(c.id)
      .subscribe(
        response => {
          this.alertService.success('Réclamation setted As FAQ !!');
          c.isFaq = true;
        } ,
        error => {
          console.log(error);
        }
      );
  }
}
