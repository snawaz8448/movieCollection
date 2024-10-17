import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ ReactiveFormsModule , MatFormFieldModule ,MatCheckboxModule ,MatError ,MatInputModule ,MatButtonModule ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  forgotPasswordForm!:FormGroup;

  constructor( private fb:FormBuilder , private authService:AuthService){

    this.forgotPasswordForm= this.fb.group({
      email:['', [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.authService.ForgotPassword(this.forgotPasswordForm.value).subscribe((res:any) => {
        console.log(res);
      })


    }
  }



}
