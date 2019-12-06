import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Promotion} from '../../models/Promotion';
import {Product} from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  constructor(private http: HttpClient) {
  }

  addPromotion(promotion) {
    return this.http.post<Promotion>('http://localhost:9080/prisma-crm-web/promotion/add', promotion);
  }

  getpromotion() {
    return this.http.get<Promotion[]>('http://localhost:9080/prisma-crm-web/promotion/all');

  }

  modifier(promotion) {
    return this.http.put<Promotion>('http://localhost:9080/prisma-crm-web/promotion/', promotion);
  }

  getproduct() {
    return this.http.get<Product[]>('http://localhost:9080/prisma-crm-web/product/all');
  }

  passerpromotion(id, id1) {
    return this.http.post<Product>('http://localhost:9080/prisma-crm-web/promotion/passerenpromotion/' + id + '/' + id1,
      {id, id1});
  }

  getPromotionById(id: number) {
    return this.http.get('http://localhost:9080/prisma-crm-web/promotion/' + id );
  }

}
