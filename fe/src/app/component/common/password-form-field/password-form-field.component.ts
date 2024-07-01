import { Component, signal, computed, Signal, input, model } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-form-field',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './password-form-field.component.html',
  styleUrl: './password-form-field.component.scss'
})
export class PasswordFormFieldComponent {
  placeholder = input.required<string>();
  value = model<string>('');
  valid = input<boolean>(true);
  errorMessage = input<string>('');
  showPassword = signal<boolean>(false);
  type: Signal<string> = computed(() => this.showPassword() == true ? 'text' : 'password');
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;

  togglePasswordVisibility() {
    this.showPassword.update(value => !value);
  }
}
