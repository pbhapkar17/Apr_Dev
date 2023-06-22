import { Component, Input } from '@angular/core';
import { StoringDataService } from '../storing-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  data!: string;
  @Input() dataFromParent:any;

  constructor(public storingDataService : StoringDataService){

  }
  get(){
    this.data = this.storingDataService.setData;
    console.log('data',this.data);
    
  }
}
