import { Routes } from '@angular/router';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { ResetPasswordComponent } from '../auth/reset-password/reset-password.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { ForgotPasswordComponent } from '../auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { SearchtemplateComponent } from './admin/searchtemplate/searchtemplate.component';
import { HometemplateComponent } from './admin/hometemplate/hometemplate.component';
import { ProfiletemplateComponent } from './admin/profiletemplate/profiletemplate.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingComponent } from './loading/loading.component';

export const routes: Routes = [
    {path:'' , redirectTo:'signup' , pathMatch:"full"},
    { path:'dashboard' , loadComponent:()=> import ('./admin/dashboard/template/template.component').then(m=>m.TemplateComponent),
        children:[
            {path:'' , redirectTo:'overview' , pathMatch:'full'} ,
            {path:'overview' , loadComponent:()=> import('./admin/dashboard/dashboard/dashboard.component').then(m=> m.DashboardComponent),
                children:[
                    {path:'' , redirectTo:'profile' , pathMatch:'full'} ,
                    {path:'search' , component:SearchtemplateComponent},
                    {path:'profile' , component:ProfiletemplateComponent},
                    {path:'home' , component:HometemplateComponent},
                    {path:'**' , component:PageNotFoundComponent}

                ]
            }
        ]
     },
    {path:'signin' , component:SignInComponent},
    {path:'signup' , component:SignUpComponent},
    {path:'resetpassword' , component:ResetPasswordComponent},
    {path:'forgotpassword' , component:ForgotPasswordComponent},
];
