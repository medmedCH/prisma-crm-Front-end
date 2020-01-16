import {Component} from '@angular/core';
import {Router} from '@angular/router';
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

  constructor(private claimService: ClaimService, private router: Router) {
  }

  OnInit() {
    // this.faqService.getAllFaq()
    //   .subscribe(
    //     response => {
    //       console.log('hello faq');
    //
    //       console.log(response);
    //     },
    //     error => {
    //       console.log('hello error');
    //       console.log(error);
    //     }
    //   );
  }
}
