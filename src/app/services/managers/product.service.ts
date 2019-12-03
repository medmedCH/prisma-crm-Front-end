import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Product} from '../../models/Product';


@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:9080/prisma-crm-web/product/all').pipe(map( response => {
      console.log('response = ');
      console.log(response);
      return response;
    }));
  }

  editProduct(p: Product) {

    console.log('prod= ' );
    console.log(p);
    return this.http.put('http://localhost:9080/prisma-crm-web/product', p ) ;
  }

  deleteProduct(id: number) {

    return this.http.delete('http://localhost:9080/prisma-crm-web/product/' + id) ;
  }

  getProductById(id: number) {
    return this.http.get('http://localhost:9080/prisma-crm-web/product/' + id );
  }


}
