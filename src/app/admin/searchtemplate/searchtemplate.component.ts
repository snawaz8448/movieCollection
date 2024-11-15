import { ChangeDetectorRef, Component } from '@angular/core';
import { MovielistContainerComponent } from "../../movielist-container/movielist-container.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';

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
  constructor(private movieService:MoviesService , private cd:ChangeDetectorRef){}

  ngOnInit(): void {
    this.searchMovie()
  }

  searchMovie(){
    this.searchMovieinput.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((name:any) => {
        this.isMovieLoaded=false;
        return this.movieService.getAllMovies(name)})).subscribe((movies) => {
        this.isMovieLoaded=true;
        this.cd.detectChanges();
        console.log(movies)
  });
  }



  extractVideoId(url:string) {
    const urlParts = url.split('?'); // Split by '?' to separate base URL and query parameters
    if (urlParts.length > 1) {
        const queryParams = urlParts[1].split('&'); // Split query parameters by '&'
        for (let param of queryParams) {
            const keyValue = param.split('='); // Split each parameter into key and value
            if (keyValue[0] === 'v') {
                return keyValue[1]; // Return the video ID
            }
        }
    }
    return null; // Return null if no video ID found
}



}
