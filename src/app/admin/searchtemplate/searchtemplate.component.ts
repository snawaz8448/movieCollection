import { ChangeDetectorRef, Component } from '@angular/core';
import { MovielistContainerComponent } from "../../movielist-container/movielist-container.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../../commonInterface';

@Component({
  selector: 'app-searchtemplate',
  standalone: true,
  imports: [MovielistContainerComponent , ReactiveFormsModule ],
  templateUrl: './searchtemplate.component.html',
  styleUrl: './searchtemplate.component.scss'
})
export class SearchtemplateComponent {
  searchMovieinput = new FormControl('');

  isMovieLoaded:boolean=false;
  Movies:any[]=[]
  constructor(private movieService:MoviesService , private cd:ChangeDetectorRef){}

  ngOnInit(): void {
    this.getAllMovie();
    this.searchMovie();
  }

  searchMovie(){
    this.searchMovieinput.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((name:any) => {
        this.isMovieLoaded=false;
        return this.movieService.getAllMovies(name)})).subscribe((movies:any) => {
          this.isMovieLoaded=true;
          this.cd.detectChanges();
          console.log(movies)
  });
  }


  getAllMovie(){
    this.movieService.getAllMovies().subscribe((data:any) => {
      this.Movies=data?.data;
      this.movieService.emitMovieEvent(true )
      console.log(data)
   })}


  extractVideoId(url:string) {
    const urlParts = url.split('?'); 
    if (urlParts.length > 1) {
        const queryParams = urlParts[1].split('&');
        for (let param of queryParams) {
            const keyValue = param.split('='); 
            if (keyValue[0] === 'v') {
                return keyValue[1]; 
            }
        }
    }
    return null; // Return null if no video ID found
}



}
