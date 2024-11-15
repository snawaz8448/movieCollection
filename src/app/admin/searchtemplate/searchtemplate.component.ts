import { Component } from '@angular/core';
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

  constructor(private movieService:MoviesService){}

  ngOnInit(): void {
    this.searchMovie()
  }

  searchMovie(){
    this.searchMovieinput.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((name:any) => this.movieService.getAllMovies(name))).subscribe((movies) => {
        console.log(movies)
  });
  }
}
