import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionOneComponent } from './components/sections/one/section-one.component';
import { SectionTwoComponent } from './components/sections/two/section-two.component';
import { SectionThreeComponent } from './components/sections/three/section-three.component';

@Component({
  selector: 'md-root',
  imports: [RouterOutlet, SectionOneComponent, SectionTwoComponent, SectionThreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'challenge-riu-maquetador-mindata';
}