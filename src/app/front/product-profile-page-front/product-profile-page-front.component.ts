import {Component, OnInit} from '@angular/core';
import {CartsService} from '../../services/carts.service';
import {ProductModel} from '../../models/orderModule/ProductModel';
import {ActivatedRoute} from '@angular/router';
import {CartModel} from '../../models/orderModule/CartModel';
import {ProductCartRow} from '../../models/orderModule/ProductCartRow';

@Component({
  selector: 'app-product-profile-page-front',
  templateUrl: './product-profile-page-front.component.html',
  styleUrls: ['./product-profile-page-front.component.scss']
})
export class ProductProfilePageFrontComponent implements OnInit {
  currentProduct: ProductModel = new ProductModel();
  quantity = 0;
  currentCart;

  constructor(private service: CartsService, private route: ActivatedRoute) {
    console.log(this.route.params.subscribe((params) => {
      this.service.getProductById(params.id).subscribe((e) => {
        this.currentProduct = e;
        console.log(this.currentProduct);
        this.currentCart = <CartModel>JSON.parse(sessionStorage.getItem('cart'));
        console.log(this.currentCart);
      });
    }));

  }

  ngOnInit() {

  }

  addProductToCart() {
    const productRow = new ProductCartRow();
    productRow.quantity = this.quantity;
    productRow.originalUnitPrice = this.currentProduct.price;
    productRow.usedFidelityPoints = 0;
    productRow.product = this.currentProduct;
    productRow.cart = this.currentCart;
    this.service.addProductToRow(productRow).subscribe((e) => {
      const p = e;
      console.log(p);
    });
  }

}
