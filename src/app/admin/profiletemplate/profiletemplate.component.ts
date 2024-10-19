import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef,MatDialogTitle,MatDialogContent,MatDialogActions,MatDialogClose, } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { ActivityComponent } from '../../activity/activity.component';
@Component({
  selector: 'app-profiletemplate',
  standalone: true,
  imports: [MatTooltipModule ,  ],
  templateUrl: './profiletemplate.component.html',
  styleUrl: './profiletemplate.component.scss'
})
export class ProfiletemplateComponent {





  constructor(private router:Router , public dialog: MatDialog){

  }

  openUpdateProfile() {
    // Navigate to the update profile form
    this.router.navigate(['/update-profile']);
  }
  
  openChangePassword() {
    // Navigate to the change password form
    this.router.navigate(['/change-password']);
  }
  

    
SignOut() {
  localStorage.removeItem('authToken');
  this.router.navigate(['/signin']);
}


favoriteList() {
  const dialogRef =this.dialog.open(ActivityComponent,{
    width: '25%',
    height:'100%',
    position: { top: '20px', right: '20px' },
    disableClose: false,
    data: { message: 'This is the data passed to the dialog!' },
    panelClass: 'activity-dialog'
  })

  }
  watchList() {

  }

}
