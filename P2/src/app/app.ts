import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbarComponent } from './components/app-navbar-component/app-navbar-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('P2');
}
