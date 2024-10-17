import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-profiletemplate',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './profiletemplate.component.html',
  styleUrl: './profiletemplate.component.scss'
})
export class ProfiletemplateComponent {

  constructor(private router:Router){

  }

  openUpdateProfile() {
    // Navigate to the update profile form
    this.router.navigate(['/update-profile']);
  }
  
  openChangePassword() {
    // Navigate to the change password form
    this.router.navigate(['/change-password']);
  }
  

}
