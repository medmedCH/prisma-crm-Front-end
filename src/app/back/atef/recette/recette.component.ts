import {AfterViewInit, Component, OnInit} from '@angular/core';
import html2pdf from 'html2pdf.js';
import {ActivatedRoute} from '@angular/router';
import {RecetteModel} from '../../../models/orderModule/RecetteModel';
import {OrderServiceService} from '../../../services/order-service.service';
import {ClientOrderModel} from '../../../models/orderModule/ClientOrderModel';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit, AfterViewInit {
  recette: RecetteModel = new RecetteModel();
  dd: RecetteModel = new RecetteModel();

  constructor(private route: ActivatedRoute, private service: OrderServiceService) {
    this.route.params.subscribe(e => {
      console.log(e.date);
      this.service.getOrdersByDate(String(e.date)).subscribe(data => {
        this.recette.commandes = new Array<ClientOrderModel>();
        this.recette.commandes = data;
        this.recette.totaleRecette = 0;
        console.log(this.recette.commandes);
        for (const single of this.recette.commandes) {
          this.recette.dateCreation = single.createdAt;
          this.recette.totaleRecette += single.totale;
        }
      });
    });

  }

  ngOnInit() {

  }

  downloadAsPdf() {
    const options = {
      filename: 'doc.pdf',
      image: {type: 'jpeg'},
      html2canvas: {},
      jsPDF: {orientation: 'landscape'}
    };
    const content: Element = document.getElementById('recette');
    html2pdf().from(content)
      .set(options)
      .save();
  }

  ngAfterViewInit(): void {

  }

}
