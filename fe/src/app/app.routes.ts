import { Routes } from '@angular/router';
import { HomepageComponent } from './component/pages/homepage/homepage.component';
import { LoginComponent } from './component/pages/login/login.component';
import { LoginOrRegisterComponent } from "./component/pages/login-or-register/login-or-register.component";
import { RegisterComponent } from './component/pages/register/register.component';
import { ForgotPasswordComponent } from './component/pages/forgot-password/forgot-password.component';
import { ForgotPasswordConfirmationComponent } from './component/pages/forgot-password-confirmation/forgot-password-confirmation.component';
import { ErrorPageComponent } from './component/pages/error-page/error-page.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login-or-register', component: LoginOrRegisterComponent},
    { path: 'forgot-password', component: ForgotPasswordComponent},
    { path: 'forgot-password-confirmation', component: ForgotPasswordConfirmationComponent},
    { path: 'error', component: ErrorPageComponent},
];


