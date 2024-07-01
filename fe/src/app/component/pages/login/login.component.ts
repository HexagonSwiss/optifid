import { Component, input, output, signal, model } from '@angular/core';
import { FormFieldComponent } from '../../common/form-field/form-field.component';
import { Router } from '@angular/router';
import { FormService } from '../../../service/form_validation_service';
import { StandardButtonComponent } from '../../common/standard-button/standard-button.component';
import { PasswordFormFieldComponent } from '../../common/password-form-field/password-form-field.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormFieldComponent, PasswordFormFieldComponent, StandardButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router, private formService: FormService) {}

  public submitted = signal<boolean>(false); // State of the form
  private isValid = signal<boolean>(false); // Validity
  email = model<string>('');
  password = model<string>('');

  navigateToHome() {
    this.router.navigate(['/login']);
  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  validateLogin() {
    // Let's use this to make the button invalid temporarily while operations are running.
    this.submitted.set(true);

    // These variables determine the final value of isValid
    var emailResult: boolean = false;
    var passwordResult: boolean = false;

    // We call the service methods to make the validation for us
    emailResult = this.formService.validateEmail(this.email());
    passwordResult = this.formService.validatePassword(this.password());

    if (emailResult == false || passwordResult == false) {
      this.isValid.set(false);
    }

    // We choose if we navigate to login or log an error, display error message, etc
    // TODO: Call controller/repo to validate login operation
    if (this.isValid()){
      this.submitted.set(false);
      this.navigateToHome();
    } else {
      this.submitted.set(false);
      console.log('TS: Login Form error');
    }
  }
}
