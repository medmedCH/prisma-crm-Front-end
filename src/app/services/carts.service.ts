import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CartModel} from '../models/orderModule/CartModel';
import {ProductCartRow} from '../models/orderModule/ProductCartRow';
import {ProductModel} from '../models/orderModule/ProductModel';
import {BehaviorSubject} from 'rxjs';
import {ReductionRatioModel} from '../models/orderModule/ReductionRatioModel';
import {ClientOrderModel} from '../models/orderModule/ClientOrderModel';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  public freshlyCreatedCart = new BehaviorSubject<CartModel>(new CartModel());
  public crt = this.freshlyCreatedCart.asObservable();

  constructor(private http: HttpClient) {
  }

  // works perfectly
  // integrated
  createClientCart(id) {
    return this.http.post<CartModel>('http://localhost:9080/prisma-crm-web/main/cart/new?id=' + 2, null);
  }

  // integrated
  // tested
  addProductToRow(productRow: ProductCartRow, withReduction) {
    return this.http.post('http://localhost:9080/prisma-crm-web/main/cart/add-product-to-cart'
      + '?product=' + productRow.product.id + '&cart=' + productRow.cart.id + '&quantity=' + productRow.quantity
      + '&points=' + productRow.usedFidelityPoints
      + '&reduction=' + withReduction, null);
  }

  // integrated
  // tested
  fetchCartsForAClient(client) {
    return this.http.get<CartModel[]>('http://localhost:9080/prisma-crm-web/main/cart/get-cart/' + 2);
  }


  // tested
  // integrated
  getCartRows(cart: CartModel) {
    return this.http.post<ProductCartRow[]>('http://localhost:9080/prisma-crm-web/main/cart/get-cart-rows/' + cart.id, null);
  }

  // tested
  // integrated
  fetchProducts() {
    return this.http.get<ProductModel[]>('http://localhost:9080/prisma-crm-web/main/cart/get-products');
  }

  // tested
  // integrated
  getProductById(id) {
    return this.http.get<ProductModel>('http://localhost:9080/prisma-crm-web/main/cart/get-product/' + id);
  }

  changeCurrentCart(cart: CartModel) {
    this.freshlyCreatedCart.next(cart);
  }

  // tested
  // integrated
  getProductReductionRatio(product) {
    return this.http.get<ReductionRatioModel>('http://localhost:9080/prisma-crm-web/main/cart/get-ReductionRatio/' + product);
  }


  // tested
  // integrated
  getProductCartRow(product: ProductModel, cart: CartModel) {
    return this.http.get<ProductCartRow>('http://localhost:9080/prisma-crm-web/main/cart/get-product-row/' + product.id + '/' + cart.id);
  }

  // tested
  // integrated
  resetProductClientData(row: ProductCartRow) {
    return this.http.get<ProductCartRow>('http://localhost:9080/' + 'prisma-crm-web/main/cart/reset-product-client-data/' +
      row.product.id + '/' + row.quantity + '/' + row.cart.client.id + '/' + row.usedFidelityPoints + '/' + row.cart.id);
  }

// tested
// integrated
  updateProductClientData(row: ProductCartRow, reduction) {
    return this.http.get<ProductModel>('http://localhost:9080/prisma-crm-web/main/cart/update-cart-row/' + row.cart.id + '/' + row.product.id +
      '/' + row.quantity + '/' + row.usedFidelityPoints + '/' + reduction);
  }

// tested
// integrated
  deleteEntireCart(cart: CartModel) {
    return this.http.post<ProductModel>('http://localhost:9080/prisma-crm-web/main/cart/delete-cart/' + cart.id, null);
  }

  // tested
  // integrated
  deleteCartRow(row: ProductCartRow) {
    return this.http.post<ProductModel>('http://localhost:9080/prisma-crm-web/main/cart/delete-product-from-cart/' + row.product.id + '/' + row.cart.id, null);
  }

  // tested
  // integrated
  getClientOrders(client) {
    return this.http.post<ClientOrderModel[]>('http://localhost:9080/prisma-crm-web/main/cart/get-client-orders/' + client, null);

  }

  // tested
  // integrated
  getClientCartById(id) {
    return this.http.post<CartModel>('http://localhost:9080/prisma-crm-web/main/cart/get-cart-by-id/' + id, null);
  }

  // tested
  // integrated
  getOrderById(id) {
    return this.http.post<Array<ProductCartRow>>('http://localhost:9080/prisma-crm-web/main/cart/get-order-rows/' + id, null);
  }

  // tested
  // integrated
  getSpecificOrder(id) {
    return this.http.post<ClientOrderModel>('    http://localhost:9080/prisma-crm-web/main/cart/get-specific-order/' + id, null);
  }
}
