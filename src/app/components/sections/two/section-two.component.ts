import { Component } from '@angular/core';
import { SearchComponent } from '../../search/search.component';
import { CardTwoComponent } from '../../cards/two/card-two.component';

@Component({
  selector: 'section-two',
  imports: [SearchComponent, CardTwoComponent],
  templateUrl: './section-two.component.html',
  styleUrl: './section-two.component.css'
})
export class SectionTwoComponent {

}
