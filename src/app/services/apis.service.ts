import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APISService {


  CURRENCY_API_KEY = 'U3eKuEacN1u2YVRloiw_IvADYNSsEEn_ZnrFG7B-OcgCU80FhIRTG';
  CURRENCY_API_URI = 'https://currency.labstack.com/api/v1/convert/';
  REVERSE_API = 'https://nominatim.openstreetmap.org/reverse.php';
  MAP_QUEST_API = 'http://www.mapquestapi.com/directions/v2/routematrix';
  MAP_QUEST_KEY = 'qgluQem4iTGKYyMxdp1MdsyGHnwwFdva';

  constructor(private http: HttpClient) {
  }

  getCurrenciesInDollar(amount) {
    // Authorization
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.CURRENCY_API_KEY}`)
    };
    return this.http.get('http://apilayer.net/api/live?access_key=0361b2af2ac54f0882a4a129b3cb0a66');
  }

  calculateTimeDistanceBetweenTwoAddresses(origin, destination) {
    const body = {
      'locations': [
        origin,
        destination],
      'allToAll': false
    };
    return this.http.post(this.MAP_QUEST_API + '?key=' + this.MAP_QUEST_KEY, JSON.stringify(body));
  }

  reverseGeoCode(lon, lat) {
    // https://nominatim.openstreetmap.org/reverse.php?lat=36.8522391&lon=10.2077839&accept-language=eng&format=json
    return this.http.get('https://nominatim.openstreetmap.org/reverse.php?lat=' + lat + '&lon=' + lon + '&accept-language=en&format=json');
  }

  distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
    } else {
      const radlat1 = Math.PI * lat1 / 180;
      const radlat2 = Math.PI * lat2 / 180;
      const theta = lon1 - lon2;
      const radtheta = Math.PI * theta / 180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === 'K') {
        dist = dist * 1.609344;
      }
      if (unit === 'N') {
        dist = dist * 0.8684;
      }
      return dist;
    }
  }
}

