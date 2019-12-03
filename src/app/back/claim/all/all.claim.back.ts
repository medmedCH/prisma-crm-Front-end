import {Component} from '@angular/core';
import {ClaimService} from 'src/app/services/managers/claim.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../../../services/security/storage.service';
import {AlertService} from '../../../services/common/AlerteService';
import {LoginService} from '../../../services/security/login.service';
import {Claim} from '../../../models/Claim';

@Component({
  selector: 'app-all-claim-back',
  templateUrl: './all.claim.back.html',
  styleUrls: []
})
export class  AllClaimBackComponent {

  allClaims: Claim[];
  constructor(private claimService: ClaimService,
              private storageService: StorageService,
              private alertService: AlertService,
              private loginService: LoginService,
              private router: Router, private  route: ActivatedRoute) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // @ts-ignore
    this.claimService.getAllClaims<Claim[]>().subscribe(
      response => {
        console.log('hello faq');
        this.allClaims = response;
        console.log(response);
      } ,
      error => {
        console.log('hello error');
        console.log(error);
      }
    );;
  }

}
