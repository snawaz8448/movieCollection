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

  currentUser:any;

  constructor(private movieService:MoviesService,
    private router: Router
   ){}

   ngOnInit(): void {
    const authuser: any = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(authuser) || null;
    
     if(this.router.url=='/dashboard/overview/search'){
        // this.getAllMovie()
     }
  }
   getAllMovie(){
    this.movieService.getAllMovies().subscribe((data:any) => {
      this.movieService.emitMovieEvent(true )
      console.log(data)
   })}

}
