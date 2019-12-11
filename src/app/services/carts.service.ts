import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CartModel} from '../models/orderModule/CartModel';
import {ProductCartRow} from '../models/orderModule/ProductCartRow';
import {ProductModel} from '../models/orderModule/ProductModel';
import {BehaviorSubject} from 'rxjs';
import {ReductionRatioModel} from '../models/orderModule/ReductionRatioModel';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  public freshlyCreatedCart = new BehaviorSubject<CartModel>(new CartModel());
  public crt = this.freshlyCreatedCart.asObservable();

  constructor(private http: HttpClient) {
  }

  // works perfectly
  createClientCart(id) {
    return this.http.post<CartModel>('http://localhost:9080/prisma-crm-web/main/cart/new?id=' + id, null);
  }

  // works perfectly
  fetchCartsForAClient(client) {
    return this.http.get<CartModel[]>('http://localhost:9080/prisma-crm-web/main/cart/get-cart/' + client);
  }


  addProductToRow(productRow: ProductCartRow, withReduction) {
    return this.http.post('http://localhost:9080/prisma-crm-web/main/cart/add-product-to-cart'
      + '?product=' + productRow.product.id + '&cart=' + productRow.cart.id + '&quantity=' + productRow.quantity
      + '&points=' + productRow.usedFidelityPoints
      + '&reduction=' + withReduction, null);
  }

  // works perfectly
  getCartRows(cart: CartModel) {
    return this.http.post<ProductCartRow[]>('http://localhost:9080/prisma-crm-web/main/cart/get-cart-rows/' + cart.id, null);
  }

  fetchProducts() {
    return this.http.get<ProductModel[]>('http://localhost:9080/prisma-crm-web/main/cart/get-products');
  }

  getProductById(id) {
    return this.http.get<ProductModel>('http://localhost:9080/prisma-crm-web/main/cart/get-product/' + id);
  }

  changeCurrentCart(cart: CartModel) {
    this.freshlyCreatedCart.next(cart);
  }

  getProductReductionRatio(product) {
    return this.http.get<ReductionRatioModel>('http://localhost:9080/prisma-crm-web/main/cart/get-ReductionRatio/' + product);
  }

  getProductCartRow(product: ProductModel, cart: CartModel) {
    return this.http.get<ProductCartRow>('http://localhost:9080/prisma-crm-web/main/cart/get-product-row/' + product.id + '/' + cart.id);
  }

  //
  resetProductClientData(row: ProductCartRow) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<ProductCartRow>('http://localhost:9080/' + 'prisma-crm-web/main/cart/reset-product-client-data/' +
      row.product.id + '/' + row.quantity + '/' + row.cart.client.id + '/' + row.usedFidelityPoints + '/' + row.cart.id);
  }

  updateProductClientData(row: ProductCartRow, reduction) {
    return this.http.get<ProductModel>('http://localhost:9080/prisma-crm-web/main/cart/update-cart-row/' + row.cart.id + '/' + row.product.id +
      '/' + row.quantity + '/' + row.usedFidelityPoints + '/' + reduction);
  }

}
