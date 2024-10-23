import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef,MatDialogTitle,MatDialogContent,MatDialogActions,MatDialogClose, } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { ActivityComponent } from '../../activity/activity.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
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
    data: { message: 'This is the data passed to the dialog!',type:'favorite' },
    panelClass: 'activity-dialog'
  })

  }
  watchList() {
    const dialogRef =this.dialog.open(ActivityComponent,{
      width: '30%',
      height:'100%',
      position: { top: '20px', right: '20px' },
      disableClose: false,
      data: { message: 'This is the data passed to the dialog!'  , type:'watchlist' },
      panelClass: 'activity-dialog'
    })
  }
  updateProfile() {
    const dialogRef =this.dialog.open(UpdateProfileComponent,{
      width: '30%',
      height:'auto',
      position: { top: '30px', right: '0px' },
      disableClose: false,
      data: { message: 'This is the data passed to the dialog!'  , type:'watchlist' },
      panelClass: 'activity-dialog'
    })
  }
  changePassword() {
    const dialogRef =this.dialog.open(ChangePasswordComponent,{
      width: '30%',
      height:'auto',
      position: { top: '30px', right: '30px' },
      disableClose: false,
      data: { message: 'This is the data passed to the dialog!'  , type:'watchlist' },
      panelClass: 'activity-dialog'
    })
  }

}
