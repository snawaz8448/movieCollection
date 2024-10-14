import { Injectable } from '@angular/core';
import { BaseUrl } from '../app/helper/contant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

header = new HttpHeaders();
  constructor( private http:HttpClient) { 
  }


   // SignIn method returning an Observable
   SignIn(data: any): Observable<any> {
    return this.http.post<any>(BaseUrl+'auth/login', data);
  }

}
