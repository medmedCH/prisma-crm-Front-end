import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }


}
