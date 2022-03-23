import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor( private _http:HttpClient ) { }

  // ALL SOURCES API URL
  allSourcesUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4b36014a7947493f9e0447b1e431d439';

  // Key for - Tech News
  techNewsUrl = 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=4b36014a7947493f9e0447b1e431d439';

  // Business news URL
  bizNewsUrl = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=4b36014a7947493f9e0447b1e431d439'

  // top headlines function
  topHeading() : Observable<any> {
    return this._http.get(this.allSourcesUrl);
  }

  // tech news function
  techNewsProperties() : Observable<any> {
    return this._http.get(this.techNewsUrl);
  }

  // business news function
  bizNewsProperties() : Observable<any> {
    return this._http.get(this.bizNewsUrl);
  }

}
