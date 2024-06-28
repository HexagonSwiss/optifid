import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  @Input() type!: string; 
  @Input() placeholder!: string; 
  @Input() value: string = '';
  @Input() errorMessage!: string;
  @Input() submitted!: boolean;
  @Input() validation!: (value: any) => boolean;
  
  @Output() valueChange = new EventEmitter<string>(); 

  onInputChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value); 
  }
}
