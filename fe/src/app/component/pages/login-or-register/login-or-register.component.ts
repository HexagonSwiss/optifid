import { Component } from '@angular/core';
import { StandardButtonComponent } from '../../common/standard-button/standard-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-or-register',
  standalone: true,
  imports: [StandardButtonComponent],
  templateUrl: './login-or-register.component.html',
  styleUrl: './login-or-register.component.scss'
})
export class LoginOrRegisterComponent {

  constructor(private router: Router) {}

  handleLoginClick() {
    this.router.navigate(['/login']);
    console.log('Login button clicked!');
  }

  handleRegistrationClick() {
    this.router.navigate(['/register']);
    console.log('Registration button clicked!');
  }
}
