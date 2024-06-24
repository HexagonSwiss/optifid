import { Routes } from '@angular/router';
import { HomepageComponent } from './component/pages/homepage/homepage.component';
import { LoginComponent } from './component/pages/login/login.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent}
];
