import {Component} from '@angular/core';
import {ClaimService} from 'src/app/services/managers/claim.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Claim} from '../../../models/Claim';
import {StorageService} from '../../../services/security/storage.service';
import {AlertService} from '../../../services/common/AlerteService';
import {LoginService} from '../../../services/security/login.service';

@Component({
  selector: 'app-claim-add',
  templateUrl: './claim.add.html',
  styleUrls: []
})
export class ClaimAddComponent {

  title = 'Consul Claim';
  status;
  c: Claim;

  constructor(private claimService: ClaimService,
              private storageService: StorageService,
              private alertService: AlertService,
              private loginService: LoginService,
              private router: Router, private  route: ActivatedRoute) {
  }

  addClaimFrom = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
  });

  addClaim() {
    if (null === StorageService.get('currentUser')) {
      const currentUser = StorageService.get('currentUser');
      console.log(currentUser);
      // tslint:disable-next-line:max-line-length
      this.c = new Claim(this.addClaimFrom.value.titre, this.addClaimFrom.value.description, this.addClaimFrom.value.type, this.addClaimFrom.value.priority, currentUser.userId);
      this.claimService.addClaim(this.c)
        .subscribe(
          response => {},
          error => {console.log(error); }
        );
    }
    if (!LoginService.isLogged()) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: ['/claim/add'] } });
      this.alertService.error('Vous devez se connecter d\'abord');
    }
  }


}
