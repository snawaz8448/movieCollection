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
  selector: 'app-change-password',
  standalone: true,
  imports: [   CommonModule ,ReactiveFormsModule , MatFormFieldModule ,MatCheckboxModule ,MatError ,MatInputModule ,MatButtonModule ,RouterModule ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

  changePasswordForm!:FormGroup;

  constructor(private fb:FormBuilder ,
    private authService:AuthService ,
    private notificationService:NotificationService ){

    this.changePasswordForm = this.fb.group({
      oldpassword: ['', Validators.required] , // Correct syntax for form control
      newpassword: ['', Validators.required],  // Correct syntax for form control
      confirmpassword: ['', Validators.required]  // Correct syntax for form control
    })
  }



  onSubmit(){
    if(this.changePasswordForm.valid  && (this.changePasswordForm.get('newpassword')?.value == this.changePasswordForm.get('confirmpassword')?.value)){
      let postData ={
        oldpassword:this.changePasswordForm.get('oldpassword')?.value ,
        password:this.changePasswordForm.get('newpassword')?.value ,
      }
      this.authService.UpdatePassword(postData).subscribe(
        (res:any)=>{
        console.log(res);
        this.notificationService.showSuccess('Password changed successfully' , 'Sucess');
      },
      (error)=>{
        console.log(error);
        this.notificationService.showError(error?.message, 'Error');
      }
    )
    }
  }



}
