import {Component, OnInit} from '@angular/core';
import {PromotionService} from '../../../services/managers/promotion.service';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-showprodenpromotion',
  templateUrl: './showprodenpromotion.component.html',
  styleUrls: ['./showprodenpromotion.component.scss']
})
export class ShowprodenpromotionComponent implements OnInit {

  prd: Product[] = [];

  constructor(private promotionservice: PromotionService) {

  }

  ngOnInit() {

    this.promotionservice.getproductPromotion().subscribe(data => this.prd = data);

  }


}
