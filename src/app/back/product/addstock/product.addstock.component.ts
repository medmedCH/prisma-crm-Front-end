import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/managers/product.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-addstock',
  templateUrl: './product.addstock.component.html',
  styleUrls: ['./product.addstock.component.scss']
})


export class ProductAddStockComponent implements OnInit {
  storeList;
  productList;
  productSelect;
  storeSelect;
  quantitySelect;
  quantityMinSelect;
  test = false;
  recentQuantity;
  constructor(private productService: ProductService) {
    this.productService.getAllStores().subscribe(val => {
      this.storeList = val;
    });
    this.productService.getProducts().subscribe(data => {
      this.productList = data;
    });
  }

  ngOnInit(): void {
  }

  addStockk() {
    console.log(this.storeSelect + ' ' + this.productSelect + ' ' + this.quantitySelect + ' ' + this.quantityMinSelect);
    const stock = {
      quantity:  this.quantitySelect,
      quantityMin: this.quantityMinSelect
    };
    this.productService.addstockk(stock, this.productSelect, this.storeSelect).subscribe(s => {
      console.log(s);
    });
    this.test = true ;
    this.recentQuantity = this.quantitySelect ;
  }

  checkStockk() {
    this.recentQuantity = this.recentQuantity - 1 ;
    this.productService.checkStockk(this.storeSelect, this.productSelect).subscribe(data => data);
  }
}
