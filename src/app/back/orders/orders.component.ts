import {Component, OnInit} from '@angular/core';
import {ClientOrderModel} from '../../models/orderModule/ClientOrderModel';
import {OrderServiceService} from '../../services/order-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Array<ClientOrderModel> = new Array<ClientOrderModel>();

  constructor(private service: OrderServiceService) {
  }

  ngOnInit() {
    this.service.getAllOrders().subscribe(e => {
      this.orders = e;
      console.table(e);
    }, error => {
      console.log('error have been occured');
    });
  }

  validateOrder(orderId) {
    this.service.validateTemporaryOrder(orderId).subscribe(e=>{
      console.log('success');
    },error => {
      console.log('failure');
    })
  }

}
