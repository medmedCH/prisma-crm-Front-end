import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/managers/product.service';

@Component({
  selector: 'app-product-showstore',
  templateUrl: './product.showstore.component.html',
  styleUrls: ['./product.showstore.component.scss']
})


export class ProductShowStoreComponent implements OnInit {

  liste;
  constructor(private productService: ProductService) {
    this.productService.getAllStores().subscribe(data => {
      this.liste = data ;
    });
  }

  ngOnInit(): void {
  }


}
