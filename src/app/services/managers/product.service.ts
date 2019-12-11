import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Product} from '../../models/Product';
import {Tariff} from '../../models/Tariff';


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
  addProduct(p) {
    return this.http.post('http://localhost:9080/prisma-crm-web/product/add', p ) ;
  }

  editProduct(p: Product) {

    return this.http.put('http://localhost:9080/prisma-crm-web/product', p ) ;
  }

  deleteProduct(id: number) {

    return this.http.delete('http://localhost:9080/prisma-crm-web/product/' + id) ;
  }
  uploadImage(file: string) {

    return this.http.get('http://localhost:9080/prisma-crm-web/product/uploads/' + file );
  }
  getProductById(id: number) {
    return this.http.get('http://localhost:9080/prisma-crm-web/product/' + id );
  }

  getProductTypes() {
    return this.http.get('http://localhost:9080/prisma-crm-web/product/types');
  }
  addTariff(t: Tariff) {
    return this.http.post('http://localhost:9080/prisma-crm-web/product/tarif/add', t ) ;
  }
  editTariff(t: Tariff) {
    return this.http.put('http://localhost:9080/prisma-crm-web/product/tarif', t ) ;
  }
  getTariffById(id: number) {
    return this.http.get('http://localhost:9080/prisma-crm-web/product/tarif/' + id ) ;
  }
  deleteTariff(id: number) {
    return this.http.delete('http://localhost:9080/prisma-crm-web/product/tarif/' + id) ;
  }
  assignTarifToProduct(idProduct: number, idTariff: number) {
    return this.http.get('http://localhost:9080/prisma-crm-web/product/assignTarif/' + idProduct + '/' + idTariff ) ;
  }

  getNearestStore(longtitude , latitude) {
    return this.http.get('http://localhost:9080/prisma-crm-web/store/getNearesAddress/' + longtitude + '/' + latitude ) ;
  }
  addStore(s){
      return this.http.post('http://localhost:9080/prisma-crm-web/store/add', s ) ;
  }

  getAllStores() {
    return this.http.get('http://localhost:9080/prisma-crm-web/store/all') ;
  }

  getStoreById(id: number) {
    return this.http.get('http://localhost:9080/prisma-crm-web/store/' + id) ;
  }

  getAllAddress() {
    return this.http.get('http://localhost:9080/prisma-crm-web/store/Address/all') ;
  }

  getAddressById(id: number) {
    return this.http.get('http://localhost:9080/prisma-crm-web/store/address/' + id) ;
  }

  addHour(h) {
    return this.http.post('http://localhost:9080/prisma-crm-web/store/hours/add', h ) ;
  }
  assignTimeToStore(idStore, idHour) {
    return this.http.put('http://localhost:9080/prisma-crm-web/store/hours?idStore=' + idStore + '&&idTime=' + idHour, {} ) ;
  }


}
