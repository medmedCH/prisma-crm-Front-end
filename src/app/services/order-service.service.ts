import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StoreModel} from '../models/orderModule/StoreModel';
import {ClientOrderModel} from '../models/orderModule/ClientOrderModel';
import {ProductModel} from '../models/orderModule/ProductModel';
import {Client} from '../models/orderModule/Client';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) {
  }

  // ------------------------------------Back office -----------------------------------------------//
  // tested
  // integrated
  getAllOrders() {
    return this.http.post<ClientOrderModel[]>('http://localhost:9080/prisma-crm-web/main/orderAd/back/fetch-orders', null);
  }
  // tested
  // integrated
  validateTemporaryOrder(orderId) {
    return this.http.post('http://localhost:9080/prisma-crm-web/main/orderAd/validateOrder/' + orderId + '/2', null);
  }


  // ------------------------------------End back office-------------------------------------------//
  // ------------------------------------front office -----------------------------------------------//
  // tested
  // integrated
  getNearestStoreAddress(longtitude, latitude) {
    return this.http.get<StoreModel>('http://localhost:9080/prisma-crm-web/main/cart/getNearesAddress/'
      + longtitude + '/' + latitude);
  }

  // tested
  // integrated
  passTemporaryOrder(cart, client, distance, store) {
    return this.http.post<number>('http://localhost:9080/prisma-crm-web/main/cart/checkOutOrderCash/' + cart
      + '/' + client + '/' + distance + '/' + store, null);
  }

  // tested
  // integrated
  passToPayPalOrder(cart, client, distance, store) {
    return this.http.post<number>('http://localhost:9080/prisma-crm-web/main/cart/checkOutOrderOnline/' + cart
      + '/' + client + '/' + distance + '/' + store, null);
  }


  getBestProductOfAllTime() {
    return this.http.post<ProductModel>('http://localhost:9080/prisma-crm-web/main/orderAd/back/product-of-allTime', null);
  }

  getBestClientOfAllTime() {
    return this.http.post<Client>('http://localhost:9080/prisma-crm-web/main/orderAd/back/client-of-all-time', null);
  }

  getOrdersTotal() {
  }

  getMostActiveStire() {

  }

  getTotalNumberOfOrders() {

  }

  getOrdersByDate(date) {
    return this.http.post<ClientOrderModel[]>('http://localhost:9080/prisma-crm-web/main/orderAd/back/get-orders-date/' + date, null);
  }


  // ------------------------------------End front office-------------------------------------------//

}
