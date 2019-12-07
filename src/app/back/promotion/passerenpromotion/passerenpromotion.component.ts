import {Component, OnInit} from '@angular/core';
import {PromotionService} from '../../../services/managers/promotion.service';
import {Product} from '../../../models/Product';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {Promotion} from '../../../models/Promotion';
import {Router} from '@angular/router';

@Component({
  selector: 'app-passerenpromotion',
  templateUrl: './passerenpromotion.component.html',
  styleUrls: ['./passerenpromotion.component.scss']
})
export class PasserenpromotionComponent implements OnInit {
  prd: Product[] = [];
  promo: Promotion[] = [];
  passer: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private promotionservice: PromotionService, private router: Router) {

  }

  addProductPromotion = new FormGroup({
    produit: new FormControl('', [Validators.required]),
    promotion: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
   /* this.addProductPromotion = this.formBuilder.group({
        produit: ['', Validators.required],
        promotion: ['', Validators.required]
      }
    );*/

    this.promotionservice.getproduct().subscribe(data => this.prd = data);
    this.promotionservice.getpromotion().subscribe(data => this.promo = data);
  }


  get f() {
    return this.passer.controls;
  }

  sub() {
    this.promotionservice.passerpromotion(this.addProductPromotion.value.promotion , this.addProductPromotion.value.produit )
      .subscribe(data => console.log('mrigul'));
    this.router.navigateByUrl('/promotion/produitpromotion');
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.passer.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.passer.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.passer.reset();
  }

}
