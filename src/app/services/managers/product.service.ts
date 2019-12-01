import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';

const httpOptions =  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT'}),
  responseType: 'text' as 'text'
};

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }


  getAllProducts(): Observable<Product[]> {
      return this.http.get<Product[]>('http://localhost:9080/prisma-crm-web/product/all') ;
  }



/*
  constructor(private http: HttpClient) {
  }
  productURL = '/'

  getProducts() {
    console.log('return = ' + this.http.get<Object[]>('http://localhost:9080/prisma-crm-web/product/all').pipe(map( response => {
      console.log(response);
      return response;
    })));
    return this.http.get<Object[]>('http://localhost:9080/prisma-crm-web/product/all');
  }

  getProductById(id: number) {
    return this.http.get('http://localhost:9080/prisma-crm-web/product/' + id)
      .pipe(map( response => {
      console.log(response);
      return response;
    }));
  }
  getProdss() {
      return new Promise(resolve => {
          this.http.get('http://localhost:9080/prisma-crm-web/product/all').subscribe(data => {
          resolve(data); } ,
        err => {
          console.log(err);
        });
    });
  }
*/
}
