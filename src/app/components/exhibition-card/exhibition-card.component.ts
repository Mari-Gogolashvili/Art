import { Component, Input } from '@angular/core';
import { data } from 'src/app/types/paintings';



@Component({
  selector: 'app-exhibition-card',
  templateUrl: './exhibition-card.component.html',
  styleUrls: ['./exhibition-card.component.css']
})
export class ExhibitionCardComponent {

  @Input() data!:data;
  @Input() loading=false;


  
}
