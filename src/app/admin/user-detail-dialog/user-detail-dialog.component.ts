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
import { LoadingComponent } from "../../loading/loading.component";

@Component({
  selector: 'app-user-detail-dialog',
  standalone: true,
  imports: [ ReactiveFormsModule, MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule, MatSelectModule, MatSlideToggleModule, LoadingComponent],
  templateUrl: './user-detail-dialog.component.html',
  styleUrl: './user-detail-dialog.component.scss'
})
export class UserDetailDialogComponent {

  userDetailForm!:FormGroup;
  currentUser: any;
  isUserUpdating:boolean=false
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
      role: ['', Validators.required],
      usersModule: [false, Validators.required],
      entryModule: [false, Validators.required],
      sportsModule: [false, Validators.required],
      movieModule: [false, Validators.required],
      profileModule: [{ value: true, disabled: true }, Validators.required],
      searchModule: [false, Validators.required],
      homeModule: [{ value: true, disabled: true }, Validators.required],
      tvModule: [false, Validators.required],
    });


    if(this.data?.IsEditMode){
      let allModule = this.data?.user?.accessModule;
      allModule.forEach((element:any) => {
        this.userDetailForm.get(element.name)?.patchValue(true);
      });
      
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

    this.isUserUpdating=true
    let accessModule=[
      { name: 'profileModule' ,  access:this.userDetailForm.get('profileModule')?.value },
      { name: 'searchModule',   access:this.userDetailForm.get('searchModule')?.value },
      { name: 'homeModule',access:this.userDetailForm.get('homeModule')?.value },
      { name: 'tvModule', access:this.userDetailForm.get('tvModule')?.value },
      { name: 'movieModule',  access:this.userDetailForm.get('movieModule')?.value },
      { name: 'sportsModule',  access:this.userDetailForm.get('sportsModule')?.value },
      { name: 'usersModule', access:this.userDetailForm.get('usersModule')?.value },
      { name: 'entryModule', access:this.userDetailForm.get('entryModule')?.value }
        ]
    let postData = {
      id:this.data?.user?._id,
      name: this.userDetailForm.get('name')?.value,
      photo: this.userDetailForm.get('photo')?.value,
      email: this.userDetailForm.get('email')?.value,
      password: this.userDetailForm.get('password')?.value,
      confirmPassword: this.userDetailForm.get('confirmPassword')?.value,
      role: this.userDetailForm.get('role')?.value,
      accessModule: accessModule
    };
    this.authService.UpdateUser(postData ,this.currentUser?._id).subscribe((res:any)=>{
      console.log(res)
      this.noificationService.showSuccess('User Updated Successfully', 'Success');
      this.isUserUpdating=false;
      this.dialogRef.close();
    }),
    (error:Error)=>{
      this.noificationService.showSuccess(error?.message, 'Success');
      this.isUserUpdating=false;
      this.dialogRef.close();
    }

  }

  closeDialog(){
    this.dialogRef.close()
  }


  
  }




