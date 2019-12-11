import {Component, OnInit} from '@angular/core';
import {OffreService} from '../../../services/managers/offre.service';
import {PromotionService} from '../../../services/managers/promotion.service';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-aff',
  templateUrl: './aff.component.html',
  styleUrls: ['./aff.component.scss']
})
export class AffComponent implements OnInit {
  prd: Product[] = [];

  constructor(private promotionservice: PromotionService) {
  }

  ngOnInit() {
    this.promotionservice.getproductPromotion().subscribe(data => this.prd = data);
  }

}
