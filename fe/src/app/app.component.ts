import { Component } from '@angular/core';
import { LoginOrRegisterComponent } from './component/pages/login-or-register/login-or-register.component';
import { RouterOutlet } from '@angular/router'
import { RegisterComponent } from './component/pages/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginOrRegisterComponent, RouterOutlet, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'optifid-fe';
}
