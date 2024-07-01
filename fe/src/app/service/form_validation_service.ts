import { Injectable } from '@angular/core';
import { ErrorModel } from '../model/error_model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {}

  validateEmail(email: string): boolean {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  }

  validatePhoneNumber(phoneNumber: string): boolean {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phoneNumber);
  }

  validateEmptyOrNull(value: any): boolean {
    return value !== null && value !== undefined && value.trim() !== '';
  }

  validatePassword(password: string): boolean {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-={}\\|;:'",<.>/?_+])[A-Za-z\d!@#$%^&*()\-={}\\|;:'",<.>/?_+]{10,}$/;
    return re.test(password);
  }

  comparePasswords(password: string, passwordConfirmation: string): boolean {
    return password === passwordConfirmation;
  }

  validateAllFields(name: string, email: string, lastName: string, role: string, phone: string, password: string, passwordConfirmation: string): { [key: string]: ErrorModel } {
    const fieldValidities: { [key: string]: ErrorModel } = {};
  
    fieldValidities['email'] = new ErrorModel(this.validateEmail(email), this.validateEmail(email) ? undefined : 'Invalid email format');
  
    fieldValidities['name'] = new ErrorModel(this.validateEmptyOrNull(name), this.validateEmptyOrNull(name) ? undefined : 'Please enter your name');
  
    fieldValidities['lastName'] = new ErrorModel(this.validateEmptyOrNull(lastName), this.validateEmptyOrNull(lastName) ? undefined : 'Please enter your last name');
  
    fieldValidities['role'] = new ErrorModel(this.validateEmptyOrNull(role), this.validateEmptyOrNull(role) ? undefined : 'Please enter your role');
  
    fieldValidities['phone'] = new ErrorModel(this.validateEmptyOrNull(phone), this.validateEmptyOrNull(phone) ? undefined : 'Please enter your phone number');
  
    fieldValidities['password'] = new ErrorModel(this.validatePassword(password), this.validatePassword(password) ? undefined : 'Password must be at least 10 characters and include a number, lowercase, uppercase, and special character');
  
    fieldValidities['passwordConfirmation'] = new ErrorModel(this.comparePasswords(password, passwordConfirmation), this.comparePasswords(password, passwordConfirmation) ? undefined : 'Passwords do not match');
  
    return fieldValidities;
  }
}