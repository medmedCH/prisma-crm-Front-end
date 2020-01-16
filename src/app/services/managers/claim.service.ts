import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Claim} from '../../models/Claim';
import {StorageService} from '../security/storage.service';
import {Agent} from "../../models/Agent";

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
    return this.http.get<Claim[]>(this.claimURL + '/dashboard/reclamation');
  }

  getAllClaimsByUser(idU: number) {
    return this.http.get<Claim[]>(this.claimURL + '/dashboard/reclamation/userId/' + idU);
  }

  getClaimById(id: number) {
    return this.http.get<Claim>(this.claimURL + '/dashboard/reclamation/' + id);
  }

  getStatudClaimByCode(id: string) {
    return this.http.get(this.claimURL + '/reclamation/code/' + id)
      .pipe(map( response => {
        console.log(response);
        return response;
      }));

  }

  addClaim(c: Claim) {
    const body = JSON.stringify(c);
    return this.http.post(this.claimURL + '/reclamation', body, httpOptions);
  }

  deleteClaim(c: Claim ) {
    return this.http.delete(this.claimURL + '/dashboard/reclamation/delete/' + c.id);
  }
  editClaim(c: Claim) {
    const body = JSON.stringify(c);
    return this.http.put('http://localhost:9080/prisma-crm-web/claim/editClaim/' + c.id , c, httpOptions);
  }
  archiverClaim(c: Claim) {
    return this.http.put(this.claimURL + '/dashboard/reclamation/archiver/' + c.id , httpOptions);
  }

  confirmerClaim(c: Claim) {
    return this.http.put(this.claimURL + '/dashboard/reclamation/confirmer/' + c.id , httpOptions);
  }


  getAllFaq() {
    return this.http.get<Claim[]>(this.claimURL + '/reclamation/FAQ/' );
  }

  getFaqById(id: number) {
    return this.http.get(this.claimURL + '/reclamation/FAQ/' + id);
  }

  setAsFAQ(id: number) {
    return this.http.put(this.claimURL + '/claim/addFAQ/' + id, httpOptions);
  }
  getAllNotesByClaimId(id: number) {
    return this.http.get<Claim[]>(this.claimURL + '/notesClaim/claim/' + id );
  }

  resolveClaim(id: number) {
    return this.http.put(this.claimURL + '/dashboard/reclamation/resolve/' + id, httpOptions);
  }
  deleguerClaim(id: number) {
    return this.http.get(this.claimURL + '/dashboard/reclamation/deleguer/' + id);
  }

  getAllAgents() {
    return this.http.get(this.claimURL + '/dashboard/reclamation/allAg/');
  }


  desarchiverClaim(c: any) {
    return this.http.put(this.claimURL + '/dashboard/reclamation/desarchiver/' + c.id , httpOptions);
  }

  bipperAgent(id: number) {
    console.log('serv');
    console.log(id);

    return this.http.post('http://localhost:9080/prisma-crm-web/claim/bipperAgent/' + id , httpOptions);
  }
}
