import { Component, input, model} from '@angular/core';
@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})

export class FormFieldComponent {
  placeholder = input.required<string>();
  // errorMessage = input<string>('');
  valid = input<boolean>(true);
  value = model<string>('');

}
