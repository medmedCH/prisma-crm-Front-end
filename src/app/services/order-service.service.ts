import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StoreModel} from '../models/orderModule/StoreModel';
import {ClientOrderModel} from '../models/orderModule/ClientOrderModel';
import {ProductModel} from '../models/orderModule/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) {
  }

  // ------------------------------------Back office -----------------------------------------------//
  getAllOrders() {
    return this.http.post<ClientOrderModel[]>('http://localhost:9080/prisma-crm-web/main/orderAd/back/fetch-orders', null);
  }

  getOrderCart() {
  }

  getPercentageWinLossBetweenTwoDays() {
  }

  getTodayCarts() {
  }

  validateTemporaryOrder(orderId) {
    return this.http.post('http://localhost:9080/prisma-crm-web/main/orderAd/validateOrder/' + orderId + '/2', null);
  }


  // ------------------------------------End back office-------------------------------------------//
  // ------------------------------------front office -----------------------------------------------//
  getNearestStoreAddress(longtitude, latitude) {
    return this.http.get<StoreModel>('http://localhost:9080/prisma-crm-web/main/cart/getNearesAddress/'
      + longtitude + '/' + latitude);
  }

  passTemporaryOrder(cart, client, distance, store) {
    return this.http.post<number>('http://localhost:9080/prisma-crm-web/main/cart/checkOutOrderCash/' + cart
      + '/' + client + '/' + distance + '/' + store, null);
  }

  passToPayPalOrder(cart, client, distance, store) {
    return this.http.post<number>('http://localhost:9080/prisma-crm-web/main/cart/checkOutOrderOnline/' + cart
      + '/' + client + '/' + distance + '/' + store, null);
  }


  getBestProductOfAllTime() {
    return this.http.post<ProductModel>('http://localhost:9080/prisma-crm-web/main/orderAd/back/product-of-allTime', null);
  }

  getBestClientOfAllTime() {
    return this.http.post<ProductModel>('http://localhost:9080/prisma-crm-web/main/orderAd/back/client-of-all-time', null);
  }

  getOrdersTotal() {
  }

  getMostActiveStire()
  {

  }

  getTotalNumberOfOrders()
  {

  }

  get



  // ------------------------------------End front office-------------------------------------------//

}
