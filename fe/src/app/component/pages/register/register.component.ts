import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormFieldComponent } from '../../common/form-field/form-field.component';
import { StandardButtonComponent } from '../../common/standard-button/standard-button.component';
import { PasswordFormFieldComponent } from '../../common/password-form-field/password-form-field.component';
import { FormService } from '../../../service/form_validation_service';
import { ErrorModel } from '../../../model/error_model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormFieldComponent, StandardButtonComponent, PasswordFormFieldComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  constructor(private router: Router, private formService: FormService) { }

  public submitted = signal<boolean>(false); // State of the form
  private isValid = signal<boolean>(false); // Overall form validity

  name = signal<string>('');
  email = signal<string>('');
  lastName = signal<string>('');
  role = signal<string>('');
  phone = signal<string>('');
  password = signal<string>('');
  passwordConfirmation = signal<string>('');
  validationResult: { [key: string]: ErrorModel } = {};

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  validateForm() {
    this.submitted.set(true);

    this.validationResult = this.formService.validateAllFields(
      this.name(),
      this.email(),
      this.lastName(),
      this.role(),
      this.phone(),
      this.password(),
      this.passwordConfirmation()
    );

    let isValid = true; // Assume all fields are valid initially

    for (const key in this.validationResult) {
      if (!this.validationResult[key].valid) {
        isValid = false;
        break;
      }
    }

    this.isValid.set(isValid);

    if (isValid) {
      console.log("Form Validation Successful!");
      this.router.navigate(['/']);
    } else {
      console.error("Form Validation Failed!");
    }

    this.submitted.set(false); // Reset submitted state regardless of validation result
  }
}
