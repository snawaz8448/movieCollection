import { EventEmitter, Injectable } from '@angular/core';
import { BaseUrl } from '../app/helper/contant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

header = new HttpHeaders();
  constructor( private http:HttpClient) { 
  }


   // SignIn method returning an Observable
   SignIn(data: any): Observable<any> {
    return this.http.post<any>(BaseUrl+'/auth/login', data);
  }

   // SignUp method returning an Observable
   SignUp(data: any): Observable<any> {
    return this.http.post<any>(BaseUrl+'/auth/signup', data);
  }
   // ForgotPassword method returning an Observable
   ForgotPassword(data: any): Observable<any> {
    return this.http.post<any>(BaseUrl+'/auth/forgotPassword', data);
  }
   // ResetPassword method returning an Observable    //token
   ResetPassword(data: any): Observable<any> {
    return this.http.post<any>(BaseUrl+'/auth/signup', data);
  }
   // UpdatePassword method returning an Observable   
   UpdatePassword(data: any): Observable<any> {
    return this.http.post<any>(BaseUrl+'/auth/updatePassword', data);
  }
   // UpdateProfile method returning an Observable   
   UpdateProfile(data: any): Observable<any> {
    return this.http.patch<any>('https://novies.vercel.app/api/v1/user/updateProfile', data);
  }
   // DeleteUser method returning an Observable   
   DeleteUser(data: any): Observable<any> {
    return this.http.post<any>(BaseUrl+'/auth/deleteProfile', data);
  }
   // GetAllUser method returning an Observable   
   GetAllUser(): Observable<any> {
    return this.http.get<any>(BaseUrl+'/user/getAllUsers');
  }

   favoriteMovie(postData:any): Observable<any> {
    return this.http.patch<any>(BaseUrl+'/user/addfavoriteMovies' ,postData);
  }

  UpdateUser(postData:any ,  id:any): Observable<any>{
    return this.http.patch<any>(BaseUrl+'/user/updateuserAccess/'+id ,postData)
  };

  GetUserModules(id:any): Observable<any> {
    return this.http.post<any>(BaseUrl+'/user/GetUserModules' , {id});
  }

 GetUserModulesEmitter = new BehaviorSubject<any | null>(null); // Initial value is null
  sendModulesData(data: any) {
    this.GetUserModulesEmitter.next(data);
  }
}
