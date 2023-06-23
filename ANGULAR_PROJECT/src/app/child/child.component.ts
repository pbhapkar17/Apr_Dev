import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { StoringDataService } from '../storing-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  data!: string;
 @Input() dataFromParent :any;
 @Output() dataFromChild = new EventEmitter <any>;

  constructor(public storingDataService : StoringDataService){

  }
  get(){
    this.data = this.storingDataService.setData;
    console.log('data',this.data);
     }

     sendData(data : any){
     console.log(data.target.value);
     let value = data.target.value;
     this.dataFromChild.emit(value);
     }
}
