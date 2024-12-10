import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../../../auth/auth.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-user-detail-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule, MatSelectModule , MatSlideToggleModule],
    templateUrl: './user-detail-dialog.component.html',
  styleUrl: './user-detail-dialog.component.scss'
})
export class UserDetailDialogComponent {

  userDetailForm!:FormGroup;
  currentUser: any;

  constructor(
    public dialogRef: MatDialogRef<UserDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService:AuthService,
    private noificationService:NotificationService,
    private cd:ChangeDetectorRef,
    private fb:FormBuilder
  ) {

    const authuser: any = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(authuser) || null;

    this.userDetailForm = this.fb.group({
      name: ['', Validators.required],
      photo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
      usersModule: [false, Validators.required],
      entryModule: [false, Validators.required],
      sportsModule: [false, Validators.required],
      movieModule: [false, Validators.required],
    });



    if(this.data?.IsEditMode){
      this.userDetailForm.patchValue({
        name: this.data?.user?.name,
        photo: this.data?.user?.photo,
        email: this.data?.user?.email,
        role:this.data?.user?.role
      })
    }


  }

  ngOnInit(){
    debugger
    console.log(this.data)
  }




  onSubmit(){

    let acessModule=[
      // { name: 'profileModule' ,  access:this.userDetailForm.get('profileModule') },
      // { name: 'searchModule',   access:this.userDetailForm.get('searchModule') },
      // { name: 'homeModule',access:this.userDetailForm.get('homeModule') },
      // { name: 'tvModule', access:this.userDetailForm.get('tvModule') },
      { name: 'movieModule',  access:this.userDetailForm.get('movieModule') },
      { name: 'sportsModule',  access:this.userDetailForm.get('sportsModule') },
      { name: 'usersModule', access:this.userDetailForm.get('usersModule') },
      { name: 'entryModule', access:this.userDetailForm.get('entryModule') }
        ]

    let postData = {
      id:this.data?.user?._id,
      name: this.userDetailForm.get('name')?.value,
      photo: this.userDetailForm.get('photo')?.value,
      email: this.userDetailForm.get('email')?.value,
      password: this.userDetailForm.get('password')?.value,
      confirmPassword: this.userDetailForm.get('confirmPassword')?.value,
      role: this.userDetailForm.get('role')?.value,
      acessModule: acessModule
    };
    this.authService.UpdateUser(postData ,this.currentUser?._id).subscribe((res:any)=>{
      console.log(res)
      this.noificationService.showSuccess('User Updated Successfully', 'Success')
    }),
    (error:Error)=>{
      this.noificationService.showSuccess(error?.message, 'Success')
    }

  }

  closeDialog(){
    this.dialogRef.close()
  }

  }




