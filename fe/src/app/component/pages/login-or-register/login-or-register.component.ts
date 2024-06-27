import { Component } from '@angular/core';
import { LoginButtonComponent } from '../../common/login-button/login-button.component';
import { RegisterButtonComponent } from '../../common/register-button/register-button.component';

@Component({
  selector: 'app-login-or-register',
  standalone: true,
  imports: [LoginButtonComponent, RegisterButtonComponent],
  templateUrl: './login-or-register.component.html',
  styleUrl: './login-or-register.component.scss'
})
export class LoginOrRegisterComponent {

}
