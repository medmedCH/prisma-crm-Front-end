import {Component, OnInit} from '@angular/core';
import html2pdf from 'html2pdf.js';
import {CartModel} from '../../../models/orderModule/CartModel';
import {CartsService} from '../../../services/carts.service';
import {ActivatedRoute} from '@angular/router';
import {Client} from '../../../models/orderModule/Client';

@Component({
  selector: 'app-quotation-client',
  templateUrl: './quotation-client.component.html',
  styleUrls: ['./quotation-client.component.scss']
})
export class QuotationClientComponent implements OnInit {
  currentCart: CartModel = new CartModel();
  total = 0;
  date: Date = new Date();

  constructor(private servic: CartsService, private route: ActivatedRoute) {
    this.route.params.subscribe(e => {
      this.currentCart.client = new Client();
      this.servic.getClientCartById(e.id).subscribe(data => {
        this.currentCart.client = data.client;
        this.currentCart = data;
        this.servic.getCartRows(this.currentCart).subscribe(rows => {
          this.currentCart.rows = rows;
          for (const x of this.currentCart.rows) {
            this.total += x.totalPriceWNReduction;
          }
          console.log(this.currentCart);
          this.date = new Date(this.currentCart.createdAt);
        });
      });
    });
  }

  ngOnInit() {

  }

  downloadQuotation() {
    const options = {
      filename: 'doc.pdf',
      image: {type: 'jpeg'},
      html2canvas: {},
      jsPDF: {orientation: 'landscape'}
    };
    const content: Element = document.getElementById('quotation');
    html2pdf().from(content)
      .set(options)
      .save();
  }

}
