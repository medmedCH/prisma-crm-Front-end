import {Component, OnInit} from '@angular/core';
import {PromotionService} from '../../../services/managers/promotion.service';
import {Promotion} from '../../../models/Promotion';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  pr: Promotion[] = [];
  promotion: Promotion = new Promotion();
  constructor(private promotionservice: PromotionService) {
  }

  ngOnInit() {

    this.promotionservice.getpromotion().subscribe(data => this.pr = data);
  }

  modifier(promotion) {
    this.promotionservice.modifier(promotion).subscribe(data => 'modifier');
  }
}
