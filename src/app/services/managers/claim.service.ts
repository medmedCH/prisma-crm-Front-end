import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Claim} from '../../models/Claim';
import {StorageService} from "../security/storage.service";

const httpOptions =  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT'}),
  responseType: 'text' as 'text'
};

@Injectable()
export class ClaimService {


  constructor(private http: HttpClient) {
  }
  claimURL = 'http://localhost:9080/prisma-crm-web'

  getAllClaims() {
    return this.http.get(this.claimURL + '/dashboard/reclamation');
  }

  getClaimById(id: number) {
    return this.http.get(this.claimURL + '/dashboard/reclamation/id/' + id);
  }

  getStatudClaimByCode(id: string) {
    return this.http.get(this.claimURL + '/reclamation/code/' + id)
    .pipe(map( response => {
      console.log(response);
      return response;
    }));
  }

  getFaqById(id: number) {
    return this.http.get(this.claimURL + '/reclamation/FAQ/' + id);
  }

  addClaim(c: Claim) {
    const body = JSON.stringify(c);
    return this.http.post(this.claimURL + '/reclamation', body, httpOptions);
  }
}
