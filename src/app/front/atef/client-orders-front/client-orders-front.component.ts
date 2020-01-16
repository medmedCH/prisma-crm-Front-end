import {Component, OnInit} from '@angular/core';
import {ClientOrderModel} from '../../../models/orderModule/ClientOrderModel';

@Component({
  selector: 'app-client-orders-front',
  templateUrl: './client-orders-front.component.html',
  styleUrls: ['./client-orders-front.component.scss']
})
export class ClientOrdersFrontComponent implements OnInit {
  clientOrders: Array<ClientOrderModel> = new Array<ClientOrderModel>();

  constructor() {
  }

  ngOnInit() {
    this.clientOrders = <ClientOrderModel[]>JSON.parse(sessionStorage.getItem('ordersToView'));
  }

}
