import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APISService {
  const;
  CURRENCY_API_KEY = 'U3eKuEacN1u2YVRloiw_IvADYNSsEEn_ZnrFG7B-OcgCU80FhIRTG';
  CURRENCY_API_URI = 'https://currency.labstack.com/api/v1/convert/';

  constructor(private http: HttpClient) {
  }

  getCurrenciesInDollar(amount) {
    // Authorization
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.CURRENCY_API_KEY}`)
    };
   return  this.http.get('http://apilayer.net/api/live?access_key=0361b2af2ac54f0882a4a129b3cb0a66');
  }
}

