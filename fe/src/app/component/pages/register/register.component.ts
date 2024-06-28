import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormFieldComponent } from '../../common/form-field/form-field.component';
import { StandardButtonComponent } from '../../common/standard-button/standard-button.component';
import { PasswordFormFieldComponent } from '../../common/password-form-field/password-form-field.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormFieldComponent, StandardButtonComponent, PasswordFormFieldComponent, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  constructor(private router: Router) { }

  name: string = '';
  email: string = '';
  lastName: string = '';
  role: string = '';
  phone: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  submitted = false;

  validateEmail(email: string) {
    const re = /r'^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$'/;
    console.log("Email Validation:", re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
  }

  validatePhoneNumber(phoneNumber: string) {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    console.log("Phone Number Validation:", re.test(phoneNumber));
    return re.test(phoneNumber);
  }

  validateEmptyOrNull(value: any): boolean {
    console.log("Empty/Null Validation - Value:", value);
    console.log("Empty/Null Validation - Result:", value !== null && value !== undefined && value.trim() !== '');
    return value !== null && value !== undefined && value.trim() !== '';
  }

  validatePassword(password: string) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-={}\\|;:'",<.>/?_+])[A-Za-z\d!@#$%^&*()\-={}\\|;:'",<.>/?_+]{10,}$/;
    console.log("Password Validation:", re.test(password));
    return re.test(password);
  }

  comparePasswords(password: string, passwordConfirmation: string) {
    console.log("Password Comparison:", password === passwordConfirmation);
    return password === passwordConfirmation;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  onFieldValueChange(newValue: string) {
    console.log("New value:", newValue);
  }

  validateForm() {
    this.submitted = true;
    let isValid = true;

    if (!this.validateEmail(this.email)) {
      console.log("Failed in email validation in validateForm");
      isValid = false;
    }

    if (!this.validateEmptyOrNull(this.name)) {
      console.log("Failed in name validation in validateForm");
      isValid = false;
    }

    if (!this.validateEmptyOrNull(this.lastName)) {
      console.log("Failed in lastName validation in validateForm");
      isValid = false;
    }

    if (!this.validateEmptyOrNull(this.role)) {
      console.log("Failed in role validation in validateForm");
      isValid = false;
    }

    if (!this.validateEmptyOrNull(this.phone)) {
      console.log("Failed in phone validation in validateForm");
      isValid = false;
    }

    if (!this.validatePassword(this.password)) {
      console.log("Failed in password validation in validateForm");
      isValid = false;
    }

    if (!this.comparePasswords(this.password, this.passwordConfirmation)) {
      console.log("Failed in passwordConfirmation validation in validateForm");
      isValid = false;
    }

    if (!isValid) {
      console.error("Form Validation Failed!");
      // Handle form validation failure (e.g., display error messages)
    } else {
      this.submitted = false;
      console.log("Form Validation Successful!");
      // All validations pass, proceed with navigation
      this.router.navigate(['/']);
    }
  }
}
