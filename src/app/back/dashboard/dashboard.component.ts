import {Component, OnInit} from '@angular/core';
// core components
import {OrderServiceService} from '../../services/order-service.service';
import {ProductModel} from '../../models/orderModule/ProductModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bestProduct: ProductModel = new ProductModel();

  constructor(private service: OrderServiceService) {
    this.service.getBestProductOfAllTime().subscribe(e => {
      this.bestProduct = e;
      console.log(e);
    });
  }

  ngOnInit() {

  }


}
