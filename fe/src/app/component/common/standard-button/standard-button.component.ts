import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-standard-button',
  standalone: true,
  imports: [],
  templateUrl: './standard-button.component.html', 
})
export class StandardButtonComponent {
  @Input() buttonText: string = 'Login'; // Default button text
  @Output() clickEvent = new EventEmitter<void>(); // Event emitter for click

  handleClick() {
    this.clickEvent.emit(); // Emit event on click
  }
}
