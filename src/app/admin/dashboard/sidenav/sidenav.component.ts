import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { AuthService } from '../../../../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule , CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  currentUser:any;
  Modules:any=[];

  allModules = [
    { name: 'profileModule', icon: 'fa-regular fa-user', routerLink: '/dashboard/overview/profile' },
    { name: 'searchModule', icon: 'fa-solid fa-magnifying-glass', routerLink: '/dashboard/overview/search' },
    { name: 'homeModule', icon: 'fa-solid fa-house', routerLink: '/dashboard/overview/home' },
    { name: 'tvModule', icon: 'fa-solid fa-tv', routerLink: '/dashboard/overview/tv' },
    { name: 'movieModule', icon: 'fa-regular fa-film', routerLink: '/dashboard/overview/movies' },
    { name: 'sportsModule', icon: 'fa-solid fa-volleyball', routerLink: '/dashboard/overview/sports' },
    { name: 'usersModule', icon: 'fa-solid fa-users', routerLink: '/dashboard/overview/users' },
    { name: 'entryModule', icon: 'fa-brands fa-slack', routerLink: '/dashboard/overview/entry' }
  ];


  constructor(private movieService:MoviesService,
    private router: Router,
    private authService:AuthService,
    private cd:ChangeDetectorRef
   ){}

   ngOnInit(): void {
    const authuser: any = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(authuser) || null;
    this.Modules=this.currentUser.accessModule;
    this.cd.detectChanges()
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
