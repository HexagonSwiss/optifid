import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StandardButtonComponent } from '../../common/standard-button/standard-button.component';

@Component({
  selector: 'app-forgot-password-confirmation',
  standalone: true,
  imports: [StandardButtonComponent],
  templateUrl: './forgot-password-confirmation.component.html',
  styleUrl: './forgot-password-confirmation.component.scss'
})
export class ForgotPasswordConfirmationComponent {

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
