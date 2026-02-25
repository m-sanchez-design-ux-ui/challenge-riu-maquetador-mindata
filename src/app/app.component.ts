import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionOneComponent } from './components/sections/one/section-one.component';

@Component({
  selector: 'md-root',
  imports: [RouterOutlet, SectionOneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'challenge-riu-maquetador-mindata';
}
