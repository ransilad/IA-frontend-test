import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string = environment.apiURL;
  constructor(private httpClient : HttpClient) {}

  post_subscriptions(jsonData){
    return this.httpClient.post<any>(this.baseUrl + '/landing/subscriptions', jsonData);
  }
}
