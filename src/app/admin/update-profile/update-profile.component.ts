import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [   CommonModule ,ReactiveFormsModule , MatFormFieldModule ,MatCheckboxModule ,MatError ,MatInputModule ,MatButtonModule ,RouterModule ],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.scss'
})
export class UpdateProfileComponent {


  updateProfileForm!:FormGroup;

  constructor(private fb:FormBuilder ,
    private authService:AuthService ,
    private notificationService:NotificationService ){

    this.updateProfileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
  }



  onSubmit(){
    if(this.updateProfileForm.valid ){
      let postData ={
        name:this.updateProfileForm.get('name')?.value ,
        email:this.updateProfileForm.get('email')?.value ,
      }
      this.authService.UpdateProfile(postData).subscribe(
        (res:any)=>{
        console.log(res);
        this.notificationService.showSuccess(' Update Profile successfully' , 'Sucess');
      },
      (error:any)=>{
        console.log(error);
        this.notificationService.showError(error?.message, 'Error');
      }
    )
    }
  }

}