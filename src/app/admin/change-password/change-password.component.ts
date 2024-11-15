import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { NotificationService } from '../services/notification.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-password',
  standalone: true,
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
  imports: [ CommonModule, ReactiveFormsModule , MatFormFieldModule ,MatCheckboxModule  ,MatInputModule ,MatButtonModule ,RouterModule]

})
export class ChangePasswordComponent {

  changePasswordForm!:FormGroup;

  constructor(private fb:FormBuilder ,
    private authService:AuthService ,
    private notificationService:NotificationService ,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA )public data: any){

    this.changePasswordForm = this.fb.group({
      oldpassword: ['', Validators.required] , // Correct syntax for form control
      newpassword: ['', Validators.required],  // Correct syntax for form control
      confirmpassword: ['', Validators.required]  // Correct syntax for form control
    })
  }



  onSubmit(){
  
    if(this.changePasswordForm.valid  && (this.changePasswordForm.get('newpassword')?.value == this.changePasswordForm.get('confirmpassword')?.value)){
      let postData ={
        currentPassword:this.changePasswordForm.get('oldpassword')?.value ,
        password:this.changePasswordForm.get('newpassword')?.value ,
        confirmPassword:this.changePasswordForm.get('confirmpassword')?.value ,
      }
      this.authService.UpdatePassword(postData).subscribe(
        (res:any)=>{
        console.log(res);
        this.dialogRef.close()
        this.notificationService.showSuccess('Password changed successfully' , 'Sucess');
      },
      (error)=>{
        console.log(error);
        this.dialogRef.close()
        this.notificationService.showError(error?.message, 'Error');
      }
    )
    }
  }


  closeDialog(){
    this.dialogRef.close();
  }


}
