import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Promotion} from '../../../models/Promotion';
import {PromotionService} from '../../../services/managers/promotion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  ajoutForm: FormGroup;
  submitted = false;
  promotion: Promotion = new Promotion();

  constructor(private formBuilder: FormBuilder, private promotionservice: PromotionService, private router: Router) {
  }

  ngOnInit() {
    this.ajoutForm = this.formBuilder.group({
        df: ['', Validators.required],
        pourcentage: ['', Validators.required],
        pd: ['', Validators.required],
        nm: ['', Validators.required]

      },
    );
  }

  addPromotion(p) {
    this.promotionservice.addPromotion(p).subscribe(data => 'ok');

  }


  // convenience getter for easy access to form fields
  get f() {
    return this.ajoutForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ajoutForm.invalid) {
      return;
    }
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ajoutForm.value, null, 4));
    this.promotionservice.getpromotion().subscribe(data => 'ok');
    this.router.navigateByUrl('/promotion/show');

  }

  onReset() {
    this.submitted = false;
    this.ajoutForm.reset();
  }


}
