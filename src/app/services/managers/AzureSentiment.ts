import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SentimentResult} from '../../models/SentimentResult';
import {SentimentRequest} from '../../models/SentimentRequest';
import {LanguageCode} from '../../models/LanguageCode';

@Injectable({
  providedIn: 'root'
})
export class AzureSentiment {
  azureSentimentServiceUrl = 'https://centralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment';
  azureTextAnalyticsKey = '7b565b621d7a47bdb1fcf4cf2389b4fb';
  httpOptions = {
    headers: new HttpHeaders({
      'Ocp-Apim-Subscription-Key': this.azureTextAnalyticsKey,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  analize(textInput: string): Observable<SentimentResult> {

    const body: SentimentRequest = {
      documents: [
        {
          id: 1,
          language: LanguageCode.EN,
          text: textInput
        }]
    };
    console.log(textInput);
    return this.http.post<SentimentResult>(this.azureSentimentServiceUrl, body, this.httpOptions);
  }

}
