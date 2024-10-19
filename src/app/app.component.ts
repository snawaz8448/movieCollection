import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { environment } from '../environment/environmen.main';
import { ToastrService, ToastrModule } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet  ,  ToastrModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-collection';

constructor(private router:Router){
  if (environment.AUTH_TOKEN !== undefined && environment.AUTH_TOKEN !== null) {
    this.router.navigate(['/dashboard']);
}else{
  this.router.navigate(['/signin']);
}

}
}
