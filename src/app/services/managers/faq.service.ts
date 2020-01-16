import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Claim} from '../../models/Claim';

@Injectable()
export class FaqService {

  constructor(private http: HttpClient) {
  }
  claimURL = 'http://localhost:9080/prisma-crm-web'

}
