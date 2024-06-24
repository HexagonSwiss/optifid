import { Component } from '@angular/core';
import { ButtonComponent } from '../../component/button/button.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ButtonComponent, RouterOutlet ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
