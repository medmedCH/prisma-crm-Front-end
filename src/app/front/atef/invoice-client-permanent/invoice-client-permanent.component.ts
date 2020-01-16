import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import html2pdf from 'html2pdf.js';
import {ProductCartRow} from '../../../models/orderModule/ProductCartRow';
import {ClientOrderModel} from '../../../models/orderModule/ClientOrderModel';
import {CartsService} from '../../../services/carts.service';

@Component({
  selector: 'app-invoice-client-permanent',
  templateUrl: './invoice-client-permanent.component.html',
  styleUrls: ['./invoice-client-permanent.component.scss']
})
export class InvoiceClientPermanentComponent implements OnInit {
  orders: Array<ProductCartRow> = new Array<ProductCartRow>();
  currrentOrder: ClientOrderModel = new ClientOrderModel();
  date: Date = new Date();
  total = 0;
  totalWithoutReduction = 0;
  percentage;

  constructor(private service: CartsService, private router: ActivatedRoute) {
    this.router.params.subscribe(p => {
      this.service.getOrderById(p.id).subscribe(data => {
        this.orders = data;
        console.log(data);
        for (const t of this.orders) {
          this.total += t.finalPrice;
          this.totalWithoutReduction += t.totalPriceWNReduction;
        }
        this.percentage = Number.parseFloat(String(this.total / this.totalWithoutReduction)).toFixed(3);

        this.service.getSpecificOrder(p.id).subscribe(order => {
          this.currrentOrder = order;
          this.date = this.currrentOrder.createdAt;
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
