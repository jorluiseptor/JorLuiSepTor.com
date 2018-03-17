import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IFacebookStatus } from './facebook.status';

@Injectable()
export class FacebookService {

//  private _url: string = "/assets/data/statuses.json";
  private _url: string = "https://graph.facebook.com/v2.12/me?fields=posts&access_token=EAACEdEose0cBADGyKiTQqSgyM3GRZBHA2BWar0kPa3ZCZAnrvzTnXphGZB9eBp3mWkuXiAPAGu9b4tx4C1H4efTfYoqYCjuS3LPRBCwozFVfmLUGXgOxGUS8wkhdUAKpZCreci5av7V0Jj25ZBdngMEYdR9hFr4gM4rrQVET2Pcw3zZBi8betCukN6q77RZBzsbtipSwwl1MeugrPO1OixRH";

  constructor(private http: HttpClient) { }

  getStatuses(): Observable<object>{
    return this.http.get(this._url);
  }

}
