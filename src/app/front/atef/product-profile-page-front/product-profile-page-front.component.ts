import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../models/orderModule/ProductModel';
import {CartModel} from '../../../models/orderModule/CartModel';
import {ProductCartRow} from '../../../models/orderModule/ProductCartRow';
import {ReductionRatioModel} from '../../../models/orderModule/ReductionRatioModel';
import {ActivatedRoute, Route} from '@angular/router';
import {CartsService} from '../../../services/carts.service';


@Component({
  selector: 'app-product-profile-page-front',
  templateUrl: './product-profile-page-front.component.html',
  styleUrls: ['./product-profile-page-front.component.scss']
})
export class ProductProfilePageFrontComponent implements OnInit {
  currentProduct: ProductModel = new ProductModel();
  currentCart  = new CartModel();
  row = new ProductCartRow();
  currentReductionRatio: ReductionRatioModel = new ReductionRatioModel();
  isWithReduction = 'sans reduction';
  nbUnits: number;
  private router: Route;
  private isUpdated;
  private haveBeenReseted;

  q = 1;

  constructor(private service: CartsService, private route: ActivatedRoute) {
    console.log(this.route.params.subscribe((params) => {
      this.service.getProductById(params.id).subscribe((e) => {
        this.currentProduct = e;
        // lawej ala el row 9bal sinon ammel wahda jdiaa.
        console.log(this.currentProduct);
        this.service.getProductReductionRatio(params.id).subscribe((r) => {
            this.currentReductionRatio = r;
            console.log(this.currentReductionRatio);
          }
        );
        if (<CartModel>JSON.parse(sessionStorage.getItem('cart')) != null) {
          this.currentCart = <CartModel>JSON.parse(sessionStorage.getItem('cart'));
          // tslint:disable-next-line:no-shadowed-variable
          this.service.getProductCartRow(this.currentProduct, this.currentCart).subscribe(e => {
              this.row = e;
              console.log(e, 'e');
              this.currentCart.client.fidelityScore = e.cart.client.fidelityScore;
              this.currentProduct.stock = e.product.stock;
              this.isUpdated = true;
              this.haveBeenReseted = sessionStorage.getItem('row' + this.currentProduct.id + '#' + this.currentCart.id);
              if ((this.haveBeenReseted == null) || (this.haveBeenReseted === 'no')) {
                this.service.resetProductClientData(this.row).subscribe(e => {
                  sessionStorage.setItem('row' + this.currentProduct.id + '#' + this.currentCart.id, 'yes');
                  this.currentCart.client.fidelityScore = e.cart.client.fidelityScore;
                  this.currentProduct.stock = e.product.stock;
                });
              } else {
                sessionStorage.setItem('row' + this.currentProduct.id + '#' + this.currentCart.id, 'no');
              }
            },
            error => {
              this.row.cart = this.currentCart;
              this.row.product = this.currentProduct;
              this.row.usedFidelityPoints = 0;
              this.row.quantity = 0;
              this.row.totalPriceWNReduction = 0;
              this.row.finalPrice = 0;
              this.row.originalUnitPrice = this.currentProduct.price;
              this.isUpdated = false;
            }
          );
          this.row.cart = this.currentCart;
        }
        console.log(this.currentCart);
      });
    }));

  }

  ngOnInit() {
    if (<CartModel>JSON.parse(sessionStorage.getItem('cart')) != null) {
      this.currentCart = <CartModel>JSON.parse(sessionStorage.getItem('cart'));
    }
  }

  changeQuantityOnSurpassed() {
    if (this.currentProduct.stock < this.q ) {
      this.row.quantity = 1;
    } else {
      this.calculateRowTotal();
    }
    console.log(this.row.quantity);
  }

  changeFidelityOnSurpassed() {
    if (this.currentCart.client.fidelityScore < this.row.usedFidelityPoints) {
      this.row.usedFidelityPoints = this.currentCart.client.fidelityScore;
    } else {
      this.calculateRowTotal();
    }
  }

  calculateRowTotal() {
    if (this.isWithReduction === 'avec reduction') {
      this.nbUnits = this.row.usedFidelityPoints / this.currentReductionRatio.fidelityScoreForEach;
      console.log('units to be reduced' + this.nbUnits);
      this.row.originalUnitPrice = this.currentProduct.price;
      this.row.totalPriceWNReduction = this.row.quantity * this.currentProduct.price;
      this.row.finalPrice = this.row.totalPriceWNReduction - (this.nbUnits * this.currentReductionRatio.reductionRatio);
      console.log('invoked');
    } else {
      this.row.originalUnitPrice = this.currentProduct.price;
      this.row.totalPriceWNReduction = this.row.quantity * this.currentProduct.price;
      this.row.finalPrice = this.row.totalPriceWNReduction;
    }
  }

  addProductToCart() {
    if (this.isWithReduction === 'avec reduction') {
      this.row.totalPriceWNReduction = this.row.quantity * this.row.product.price;
      this.service.addProductToRow(this.row, true).subscribe((e) => {
        console.log('product added');
        this.currentCart.rows.push(this.row);
        sessionStorage.setItem('cart', JSON.stringify(this.currentCart));
      });
    } else {
      this.service.addProductToRow(this.row, false).subscribe((e) => {
        console.log('product added');
        this.currentCart.rows.push(this.row);
      });
    }
  }


  updateProductCart() {
    if (this.isWithReduction === 'avec reduction') {
      this.row.totalPriceWNReduction = this.q * this.row.product.price;
      this.service.updateProductClientData(this.row, true).subscribe((e) => {
        console.log('product updated');
        sessionStorage.setItem('row' + this.currentProduct.id + '#' + this.currentCart.id, 'no');
      });
    } else {
      this.service.updateProductClientData(this.row, false).subscribe((e) => {
        console.log('product updated');
        sessionStorage.setItem('row' + this.currentProduct.id + '#' + this.currentCart.id, 'yes');
      });
    }
  }
}
