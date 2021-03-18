import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
   url: string="";
  constructor(private http: HttpClient) { }
  getAll(requestUrl:string) {
    this.url=requestUrl;
    return this.http.get(this.url);
  }
}
