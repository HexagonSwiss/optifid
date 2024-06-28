import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-form-field',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './password-form-field.component.html',
  styleUrl: './password-form-field.component.scss'
})
export class PasswordFormFieldComponent {
  @Input() placeholder!: string; // Placeholder text
  @Input() value: string = ''; // Password value
  @Output() valueChange = new EventEmitter<string>(); // Event to emit on value change
  showPassword: boolean = false; // visibility state
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  handleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Cast to HTMLInputElement
    this.value = inputElement.value; // Access the value property
    this.valueChange.emit(this.value);
  }
}
