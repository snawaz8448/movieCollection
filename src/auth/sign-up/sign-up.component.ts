import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [  CommonModule ,ReactiveFormsModule , MatFormFieldModule ,MatCheckboxModule ,MatError ,MatInputModule ,MatButtonModule ,MatSelectModule ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signUpForm: FormGroup;


  constructor(private fb: FormBuilder ,  private authService:AuthService) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
      // photo: [null, Validators.required] // You can handle photo upload differently if needed
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.authService.SignUp(this.signUpForm.value).subscribe((res:any)=>{
        localStorage.setItem('authToken' , res?.token)
      })
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const file = input.files[0];
      this.signUpForm.patchValue({ photo: file });
    }
  }
}
