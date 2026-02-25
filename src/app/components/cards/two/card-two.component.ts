import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-two',
  imports: [],
  templateUrl: './card-two.component.html',
  styleUrl: './card-two.component.css'
})
export class CardTwoComponent {
  @Input() caseType: 1 | 2 = 1;
}
