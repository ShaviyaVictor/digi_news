import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor( private _http:HttpClient ) { }

  // ALL SOURCES API URL
  allSourcesUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4b36014a7947493f9e0447b1e431d439'

  // top headlines function
  topHeading() : Observable<any> {
    return this._http.get(this.allSourcesUrl);
  }

}
