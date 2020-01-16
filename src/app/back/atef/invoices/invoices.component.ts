import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientOrderModel} from '../../../models/orderModule/ClientOrderModel';
import {RecetteModel} from '../../../models/orderModule/RecetteModel';
import {OrderServiceService} from '../../../services/order-service.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  orders: Array<ClientOrderModel> = new Array<ClientOrderModel>();
  recettes: Array<RecetteModel> = new Array<RecetteModel>();
  bla = false;

  constructor(private  service: OrderServiceService, private route: Router) {
  }

  ngOnInit() {
    this.service.getAllOrders().subscribe(e => {
      this.orders = e;
      const dates: Array<ClientOrderModel> = this.orders.filter(
        (thing, i, arr) => arr.findIndex(t => t.createdAt === thing.createdAt) === i
      );
      console.table(dates);
      for (const single of dates) {
        const tmp = new RecetteModel();
        tmp.commandes = new Array<ClientOrderModel>();
        tmp.dateCreation = single.createdAt;
        let sum = 0;
        for (const row of this.orders) {
          if (row.createdAt === tmp.dateCreation) {
            sum += row.totale;
            tmp.commandes.push(row);
          }
        }
        tmp.totaleRecette = sum;
        this.recettes.push(tmp);
      }
      console.table(this.recettes);
    }, error => {
      console.log('error have been occured');
    });
  }

  exportAsPdf(date) {
    let recette = new RecetteModel();
    for (const single of this.recettes) {
      if (single.dateCreation === date) {
        recette = single;
        console.log('r9ineeeeha');
        sessionStorage.setItem('recette', JSON.stringify(recette));
      }
    }

    this.route.navigate(['/back/Recettes/recette', date]);

  }

}
