import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Promotion} from '../../models/Promotion';
import {Offre} from '../../models/Offre';
import {Product} from '../../models/Product';


@Injectable({
  providedIn: 'root'
})
export class OffreService {
  constructor(private http: HttpClient) {
  }

  addOffre(offre) {
    return this.http.post<Offre>('http://localhost:9080/prisma-crm-web/offer/add', offre);
  }

  getoffre() {
    return this.http.get<Offre[]>('http://localhost:9080/prisma-crm-web/offer/all');
  }

  deleteoffre(id: number) {

    return this.http.delete('http://localhost:9080/prisma-crm-web/offer/delete/' + id) ;
  }
  modifier(offre) {
    return this.http.put<Offre>('http://localhost:9080/prisma-crm-web/offer', offre);
  }
  getOffreById(id: number) {
    return this.http.get('http://localhost:9080/prisma-crm-web/offer/' + id );
  }
}
