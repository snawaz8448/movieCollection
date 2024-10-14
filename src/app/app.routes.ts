import { Routes } from '@angular/router';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { ResetPasswordComponent } from '../auth/reset-password/reset-password.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { ForgotPasswordComponent } from '../auth/forgot-password/forgot-password.component';

export const routes: Routes = [
    {path:'' , redirectTo:'forgotpassword' , pathMatch:"full"},
    {path:'signin' , component:SignInComponent},
    {path:'signup' , component:SignUpComponent},
    {path:'resetpassword' , component:ResetPasswordComponent},
    {path:'forgotpassword' , component:ForgotPasswordComponent}
];
