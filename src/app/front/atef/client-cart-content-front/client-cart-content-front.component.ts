import {Component, OnInit, ViewChild} from '@angular/core';
import {CartModel} from '../../../models/orderModule/CartModel';
import {APISService} from '../../../services/apis.service';
import {CartsService} from '../../../services/carts.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-client-cart-content-front',
  templateUrl: './client-cart-content-front.component.html',
  styleUrls: ['./client-cart-content-front.component.scss']
})
export class ClientCartContentFrontComponent implements OnInit {

  @ViewChild('tableData') data;
  private cart: CartModel = new CartModel();
  private date: Date;
  private total = 0;
  private reduction = 0;
  private withoutReduction = 0;
  private totalInEuro = 0;
  private totalInDollars = 0;
  private reductionSum;

  constructor(private api: APISService, private service: CartsService) {
    this.cart = <CartModel>JSON.parse(sessionStorage.getItem('cart'));
    this.date = new Date(this.cart.createdAt);
    for (const x of this.cart.rows) {
      this.total += x.finalPrice;
      this.reduction += x.finalPrice - x.totalPriceWNReduction;
      this.withoutReduction += x.totalPriceWNReduction;
    }
    this.api.getCurrenciesInDollar(100).subscribe(e => {
      // @ts-ignore
      console.log(e.quotes.USDTND);
      // @ts-ignore
      const tmp: string = String(this.total / e.quotes.USDTND);
      // @ts-ignore
      this.totalInDollars = Number.parseFloat(tmp).toFixed(2);
      // @ts-ignore
      const eurr: string = String(this.total / (e.quotes.USDTND / e.quotes.USDEUR));
      console.log(eurr);
      // @ts-ignore
      this.totalInEuro = Number.parseFloat(eurr).toFixed(2);
    });
    const z: string = String((this.reduction / this.withoutReduction) * 100);
    this.reductionSum = Number.parseFloat(z).toFixed(2);
  }

  clearCart() {
    this.service.deleteEntireCart(this.cart).subscribe(e => {
        console.log(e);
      },
      error => {
        console.log('error have been occured');
      });
  }

  ngOnInit() {
  }

  getQuotation() {
    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    const content = this.data.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 500,
      'elementHandlers': specialElementHandlers
    });
    doc.save('quotation.pdf');

  }

}
