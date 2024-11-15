import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BaseUrl } from '../../helper/contant';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  header = new HttpHeaders();

  constructor(private http:HttpClient) { }
  private movieEventEmitter = new EventEmitter<boolean>();



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


   // Method to get the emitter observable to subscribe
   getMovieEventEmitter() {
    return this.movieEventEmitter;
  }
  // Method to emit event
  emitMovieEvent(data:boolean) {
    debugger
    this.movieEventEmitter.emit(data);
  }

}
