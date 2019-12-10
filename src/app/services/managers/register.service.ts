import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Repairrequest} from '../../models/Repairrequest';
import {map} from 'rxjs/operators';
import {Claim} from '../../models/Claim';
import {User} from '../../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT'
  }),
  responseType: 'text' as 'text'
};

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {
  }

  user = 'http://localhost:9080/prisma-crm-web/users';

  addUser(u: User) {
    const body = JSON.stringify(u);
    return this.http.post(this.user + '/register', body, httpOptions);
  }

}
