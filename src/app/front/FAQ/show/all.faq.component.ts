import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FaqService} from '../../../services/managers/faq.service';
import {ClaimService} from '../../../services/managers/claim.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'all-faq',
  templateUrl: './all.faq.component.html',
  styleUrls: []
})
export class AllFaqComponent {
  claims;

  constructor(private claimService: ClaimService, private router: Router, private route: ActivatedRoute,) {
    console.log(this.route.snapshot.data);
    this.claims = this.route.snapshot.data['listFaq'];
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.claimService.getAllFaq()
      .subscribe(
        response => {
          this.claims = response;
          console.log(response);
        },
        error => {
          console.log('hello error');
          console.log(error);
        }
      );
  }
}
