import {Injectable} from '@angular/core';
import {ProductModel} from '../models/orderModule/ProductModel';
import {HttpClient} from '@angular/common/http';
import {StoreModel} from '../models/orderModule/StoreModel';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) {
  }

  getNearestStoreAddress(longtitude, latitude) {
    return this.http.get<StoreModel>('http://localhost:9080/prisma-crm-web/main/cart/getNearesAddress/'
      + longtitude + '/' + latitude);
  }

  // ------------------------------------Back office -----------------------------------------------//
  // ------------------------------------End back office-------------------------------------------//
  // ------------------------------------front office -----------------------------------------------//

  // ------------------------------------End front office-------------------------------------------//

}
