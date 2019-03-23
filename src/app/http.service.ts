import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // baseUrl:string = "http://127.0.0.1:5000";
  baseUrl:string = "http://3.18.197.205";

  constructor(private httpClient : HttpClient) {}

  post_subscriptions(jsonData){
    return this.httpClient.post<any>(this.baseUrl + '/landing/subscriptions', jsonData);
  }
}
