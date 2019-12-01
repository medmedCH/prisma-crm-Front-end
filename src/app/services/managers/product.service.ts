import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Product} from '../../models/Product';


@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProducts() {

    return this.http.get('http://localhost:9080/prisma-crm-web/product/all').pipe(map( response => {
      console.log('response = ');
      console.log(response);
      return response;
    }));
  }

}
