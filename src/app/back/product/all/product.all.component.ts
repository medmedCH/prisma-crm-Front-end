import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {ProductService} from '../../../services/managers/product.service';

@Component({
  selector: 'app-product-all',
  templateUrl: './product.all.html',
  styleUrls: ['./product.all.scss']
})
export class ProductAllComponent implements OnInit {

  title = 'Productt Page';
  prod;
  ref;
  liste = [];
  users: any;


  constructor(private productService: ProductService, private router: Router) {
  }
  ngOnInit() {

    this.productService.getAllProducts().subscribe(
      (Data) => {
        this.liste = Data ;
        console.log('doctors' + Data);
      }
    );
  }

  /*getUsers() {
    this.productService.getProdss()
      .then(data => {
        this.users = data;
        console.log('uu = ' + this.users);
      });
  }


  getProds() {
    this.productService.getProducts().subscribe(
      (Data) => {
        this.liste = Data ;
        console.log(Data);
      }
    );
  }*/

  getProdById() {
    /*this.prod = this.productService.getProductById(6);
    this.ref = this.prod.reference;
    console.log(this.prod);
    console.log(this.ref);


    this.productService.getProductById(6)
      .subscribe( response => {
          this.ref = response;
          console.log(this.ref);
        }
      );*/
  }
  }

