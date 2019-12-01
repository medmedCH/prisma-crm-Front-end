import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {ProductService} from '../../../services/managers/product.service';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-product-all',
  templateUrl: './product.all.html',
  styleUrls: ['./product.all.scss']
})
export class ProductAllComponent implements OnInit {

  liste: any = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts()
      .subscribe( data => {
          this.liste = data ;
        }
      );
  }
  getProds() {

  }
  ngOnInit() {
    this.getProds();

  }
  }

