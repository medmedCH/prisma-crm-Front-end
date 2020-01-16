import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pack} from '../../models/Pack';
import {Product} from '../../models/Product';


@Injectable({
  providedIn: 'root'
})
export class PackService {
  constructor(private http: HttpClient) {
  }

  addPack(pack) {
    return this.http.post<Pack>('http://localhost:9080/prisma-crm-web/pack/add', pack);
  }

  getPack() {
    return this.http.get<Pack[]>('http://localhost:9080/prisma-crm-web/pack/all');
  }

  addproductpack(id, id1) {
    return this.http.post<Product>('http://localhost:9080/prisma-crm-web/pack/addproductpack/' + id + '/' + id1,
      {id, id1});
  }

  getPackprd(id) {
    return this.http.get('http://localhost:9080/prisma-crm-web/pack/allProduct/' + id);
  }
  getPackprdd(id) {
    return this.http.get<Product[]>('http://localhost:9080/prisma-crm-web/pack/allPrt/' + id);
  }
  deleteprd(id, id1) {
    return this.http.delete('http://localhost:9080/prisma-crm-web/pack/deleteproductpack/' + id + '/' + id1);
  }
}
