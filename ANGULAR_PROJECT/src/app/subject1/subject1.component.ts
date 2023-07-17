import { Component } from '@angular/core';
import { StoringDataService } from '../storing-data.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component {
  name='Poonam';
 constructor(private storingDataService: StoringDataService){}
  
 sendData(){
  console.log('init s1');
  this.storingDataService.name.next(this.name);
  }
}
