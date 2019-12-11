import {Component, OnInit} from '@angular/core';
import {CartsService} from './services/carts.service';
import {CartModel} from './models/orderModule/CartModel';
import {ProductCartRow} from './models/orderModule/ProductCartRow';
import {ProductModel} from './models/orderModule/ProductModel';
import {ClientOrderModel} from './models/orderModule/ClientOrderModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Prisma crm';
  data: CartModel[];
  rows: ProductCartRow[];
  cart;
  product;
  order;

  ngOnInit() {

  }

  constructor(private service: CartsService) {

  }


  getData() {
    console.log(this.data);
  }
}
