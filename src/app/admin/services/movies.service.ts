import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BaseUrl } from '../../helper/contant';
import { Movie } from '../../commonInterface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  header = new HttpHeaders();

  constructor(private http:HttpClient) { }
  private movieEventEmitter = new EventEmitter<boolean>();
   // Method to get the emitter observable to subscribe
   getMovieEventEmitter() {
    return this.movieEventEmitter;
  }
  // Method to emit event
  emitMovieEvent(data:boolean) {
    this.movieEventEmitter.emit(data);
  }



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

  getFavoriteMovies(id:string){
    return this.http.post(BaseUrl+'/user/favoriteMovies' , {id:id})
  }

  addMovies(movie:Movie){
   
    return this.http.post(BaseUrl+'/movies' , movie)
  }

}
