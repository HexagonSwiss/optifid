import { Component } from '@angular/core';
import { LoginOrRegisterComponent } from './component/pages/login-or-register/login-or-register.component';
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginOrRegisterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'optifid-fe';
}
