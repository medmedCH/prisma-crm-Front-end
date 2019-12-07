import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Claim} from '../../models/Claim';
import {StorageService} from '../security/storage.service';
import {NoteClaim} from '../../models/NoteClaim';

const httpOptions =  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT'}),
  responseType: 'text' as 'text'
};

@Injectable()
export class NotesClaimService {

  constructor(private http: HttpClient) {
  }
  claimURL = 'http://localhost:9080/prisma-crm-web'

  deleteNoteClaim(n: NoteClaim ) {
    return this.http.delete(this.claimURL + '/dashboard/reclamation/deleteNote/' + n.id);
  }

  addNoteToClaim(n: NoteClaim, c: Claim) {
    const body = JSON.stringify(n);
    console.log(body);
    return this.http.post(this.claimURL + '/dashboard/reclamation/addNoteToClaim/' + c.id, body, httpOptions);
  }

}
