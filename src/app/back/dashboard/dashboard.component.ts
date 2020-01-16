import {Component, OnInit} from '@angular/core';
// core components
import {OrderServiceService} from '../../services/order-service.service';
import {ProductModel} from '../../models/orderModule/ProductModel';
import {Client} from '../../models/orderModule/Client';
import {ClientOrderModel} from '../../models/orderModule/ClientOrderModel';
import {RecetteModel} from '../../models/orderModule/RecetteModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bestProduct: ProductModel = new ProductModel();
  bestClient: Client;
  totalIncomes: number = 0;
  countOrder: number = 0;
  orders: Array<ClientOrderModel> = new Array<ClientOrderModel>();
  recettes: Array<RecetteModel> = new Array<RecetteModel>();

  constructor(private service: OrderServiceService) {

  }

  ngOnInit() {
    this.service.getBestProductOfAllTime().subscribe(e => {
      this.bestProduct = e;
      console.log(e);
    });
    this.service.getAllOrders().subscribe(e => {
      this.orders = e;
      const dates: Array<ClientOrderModel> = this.orders.filter(
        (thing, i, arr) => arr.findIndex(t => t.createdAt === thing.createdAt) === i
      );
      console.table(dates);
      for (const single of dates) {
        const tmp = new RecetteModel();
        tmp.dateCreation = single.createdAt;
        let sum = 0;
        for (const row of this.orders) {
          if (row.createdAt === tmp.dateCreation) {
            sum += row.totale;
          }
        }
        tmp.totaleRecette = sum;
        this.recettes.push(tmp);
      }
      console.table(this.recettes);


      this.countOrder = this.orders.length;
      for (const row of this.orders) {
        this.totalIncomes += row.totale;
      }
    }, error => {
      console.log('error have been occured');
    });
    this.service.getBestClientOfAllTime().subscribe(e => {
      this.bestClient = e;
      console.log(this.bestClient);
    }, error => {
      console.log('error have been occured');
    });
  }


}
