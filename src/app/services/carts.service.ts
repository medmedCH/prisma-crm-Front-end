import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CartModel} from '../models/orderModule/CartModel';
import {ProductCartRow} from '../models/orderModule/ProductCartRow';
import {ProductModel} from '../models/orderModule/ProductModel';
import {BehaviorSubject} from 'rxjs';

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


  addProductToRow(productRow: ProductCartRow) {
    return this.http.post('http://localhost:9080/prisma-crm-web/main/cart/add-product-to-cart'
      + '?product=' + productRow.product.id + '&cart=' + productRow.cart.id + '&quantity=' + productRow.quantity
      + '&points=' + 80
      + '&reduction=' + 'true', null);
  }

  // works perfectly
  getCartRows() {
    return this.http.post<ProductCartRow[]>('http://localhost:9080/prisma-crm-web/main/cart/get-cart-rows/65', null);
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

}
