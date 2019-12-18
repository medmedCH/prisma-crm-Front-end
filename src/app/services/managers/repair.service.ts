import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Repairrequest} from '../../models/Repairrequest';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {LanguageCode} from '../../models/LanguageCode';
import {SentimentResult} from '../../models/SentimentResult';
import {SentimentRequest} from '../../models/SentimentRequest';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT'
  }),
  responseType: 'text' as 'text'
};
export const createSentimentRequest = (msg: string, language: LanguageCode): SentimentRequest => {
  return {
    documents: [
      {
        language: language,
        id : 1,
        text: msg
      }
    ]
  };
};

@Injectable()
export class RepairService {
  constructor(private http: HttpClient) {
  }

  azureSentimentServiceUrl: 'https://centralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment';
  azureTextAnalysisToken: '2ddbe8d6fca5490f8164b3574526f6a6';
  RepairUrl = 'http://localhost:9080/prisma-crm-web/Repair';

  addRepair(r: Repairrequest, idinv: number, idprod: number) {
    const body = JSON.stringify(r);
    return this.http.post(this.RepairUrl + '/add/' + idinv + '/' + idprod, body, httpOptions).pipe(map(response => {
      return response;
    }));
  }

  getRepId(id: string) {
    return this.http.get(this.RepairUrl + '/checkbyid/' + id)
      .pipe(map(response => {
        return response;
      }));
  }

  addNote(id: string, r: Repairrequest) {
    return this.http.put(this.RepairUrl + '/check/' + id, r, httpOptions).pipe(map(response => {
      return response;
    }));

  }

  // -----------------------------------------        backOffice         ----------------------------------------
  getAllRepairs() {
    return this.http.get(this.RepairUrl + '/all');
  }

  deleteRep(u: Repairrequest) {
    return this.http.delete(this.RepairUrl + '/delete/' + u.id);
  }

  editRepair(u: Repairrequest) {
    return this.http.put(this.RepairUrl + '/update/' + u.id, u, httpOptions);
  }


  getSentimentScoreForText(msg: string, language: LanguageCode): Observable<SentimentResult> {
    return this.http.post<SentimentResult>(
      this.azureSentimentServiceUrl,
      createSentimentRequest(msg, language),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': this.azureTextAnalysisToken
        })
      }
    ).pipe(map(response => {
      console.log(response);

      return response;
    }));
  }

  isMessagePositiveSentiment(msg: string, language: LanguageCode): Observable<number> {
    return this.getSentimentScoreForText(msg, language).pipe(
    filter(sentimentResult => sentimentResult.documents.length > 0),
      map(sentimentResult => sentimentResult.documents[0].score)
    );
  }

}
