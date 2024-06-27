import { Routes } from '@angular/router';
import { HomepageComponent } from './component/pages/homepage/homepage.component';
import { LoginComponent } from './component/pages/login/login.component';
import { LoginOrRegisterComponent } from "./component/pages/login-or-register/login-or-register.component";
import { RegisterComponent } from './component/pages/register/register.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login-or-register', component: LoginOrRegisterComponent}
];
