import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  constructor(private movieService:MoviesService,
    private router: Router
   ){}

   ngOnInit(): void {
     if(this.router.url=='/dashboard/overview/search'){
        this.getAllMovie()
     }
  }
   getAllMovie(){
    this.movieService.getAllMovies().subscribe((data:any) => {
      this.movieService.emitMovieEvent(true)
      console.log(data)
   })}

}
