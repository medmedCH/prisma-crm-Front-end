import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PromotionService} from '../../../services/managers/promotion.service';
import {Router} from '@angular/router';
import {PackService} from '../../../services/managers/pack.service';
import {Product} from '../../../models/Product';
import {Pack} from '../../../models/Pack';

@Component({
  selector: 'app-addproductpack',
  templateUrl: './addproductpack.component.html',
  styleUrls: ['./addproductpack.component.scss']
})
export class AddproductpackComponent implements OnInit {
  prd: Product[] = [];
  pa: Pack[] = [];
  submitted = false;

  constructor(private formBuilder: FormBuilder, private promotionservice: PromotionService, private router: Router, private packservice: PackService) {
  }

  addProductPack = new FormGroup({
    produit: new FormControl('', [Validators.required]),
    pack: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.promotionservice.getproduct().subscribe(data => this.prd = data);
    this.packservice.getPack().subscribe(data => this.pa = data);
  }

  sub() {
    this.packservice.addproductpack(this.addProductPack.value.produit, this.addProductPack.value.pack)
      .subscribe(data => console.log('mrigul'));
  }

  onReset() {
    this.submitted = false;
    this.addProductPack.reset();
  }
}
