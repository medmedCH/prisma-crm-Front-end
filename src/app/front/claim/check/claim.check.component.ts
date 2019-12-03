import {Component} from '@angular/core';
import { ClaimService } from 'src/app/services/managers/claim.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {StatusModalComponent} from './statusModal/statusModal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-claim-check',
  templateUrl: './claim.check.html',
  styleUrls: ['./claim.check.scss']
})
export class ClaimCheckComponent {

  title = 'Consul Claim';
  status;
  claim;
  constructor(private claimService: ClaimService, private router: Router , private modalService: NgbModal) {
  }


  getStatusFrom = new FormGroup({
    claimCode: new FormControl('', [Validators.required]),
  });

  ngOnInit() {

  }
  /*this.claimService.getFaqById(1)
    .subscribe(
      response => {
        console.log('hello faq');

        console.log(response);
        } ,
      error =>{
        console.log('hello error');
        console.log(error);
      }
  );*/


  getClaimStatus() {
    this.claimService.getStatudClaimByCode(this.getStatusFrom.value.claimCode)
      .subscribe(
        response => {
          this.status = response['claimStatus'];
          const modalRef = this.modalService.open(StatusModalComponent);
          modalRef.componentInstance.status = this.status;
        },
        error => {
          const modalRef = this.modalService.open(StatusModalComponent);
          modalRef.componentInstance.status = 'Code invalide';
        }
      );
  }

}
