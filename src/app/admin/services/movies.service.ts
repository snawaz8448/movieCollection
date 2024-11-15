import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from '../../helper/contant';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  header = new HttpHeaders();

  constructor(private http:HttpClient) { }



  getAllMovies(search?:string){
    let url='';
    if(search){
      url = BaseUrl + '/movies?name='+search;
    }
    else{
      url = BaseUrl + '/movies';
      }
    return this.http.get(url)

  }
}
