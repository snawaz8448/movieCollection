import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  constructor(private movieService:MoviesService

   ){}



   getAllMovie(){
    this.movieService.getAllMovies().subscribe((data:any) => {
      console.log(data)
   })}

}
