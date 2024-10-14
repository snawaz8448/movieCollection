import { Routes } from '@angular/router';
import { SignInComponent } from '../auth/reset-password/sign-in/sign-in.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { ResetPasswordComponent } from '../auth/reset-password/reset-password.component';

export const routes: Routes = [
    {path:'' , redirectTo:'resetpassword' , pathMatch:"full"},
    {path:'signin' , component:SignInComponent},
    {path:'signup' , component:SignUpComponent},
    {path:'resetpassword' , component:ResetPasswordComponent}
];
