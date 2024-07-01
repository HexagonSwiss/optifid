import { Component, signal, model } from '@angular/core';
import { FormService } from '../../../service/form_validation_service';
import { StandardButtonComponent } from '../../common/standard-button/standard-button.component';
import { FormFieldComponent } from '../../common/form-field/form-field.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [StandardButtonComponent, FormFieldComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})

export class ForgotPasswordComponent {

  constructor(private router: Router, private formService: FormService) {}

  public submitted = signal<boolean>(false); // State of the form
  private isValid = signal<boolean>(false); // Validity
  email = model<string>('');

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToForgotPasswordConfirmation() {
    this.router.navigate(['/forgot-password-confirmation']);
  }

  navigateToErrorPage(){
    this.router.navigate(['/error']);
  }

  handlePasswordReset(){
    this.submitted.set(true);

    const emailValidator: boolean = this.formService.validateEmail(this.email());

    if (!emailValidator){
      this.submitted.set(false);
      return;
    }

    try {
      // TODO: Call controller/repo/service to send the password request
      this.submitted.set(false);
      this.navigateToForgotPasswordConfirmation();
    } catch (error) {
      this.submitted.set(false);
      this.navigateToErrorPage();
    }
  }
}
