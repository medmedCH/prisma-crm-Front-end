import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StoreModel} from '../models/orderModule/StoreModel';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) {
  }

  // ------------------------------------Back office -----------------------------------------------//
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

  passToCashOrder() {

  }

  passToPayPalOrder() {

  }


  // ------------------------------------End front office-------------------------------------------//

}
