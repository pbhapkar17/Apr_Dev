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
 @Input() parentsDataName :any;
 @Output() dataFromChild = new EventEmitter <any>;
 @Output() surName = new EventEmitter <any>
  constructor(public storingDataService : StoringDataService){

  }
  ngOnInit(){

  }
  get(){
    this.data = this.storingDataService.setData;
    console.log('data',this.data);
     }

     sendData(data? : any){
      let sName = 'Patil';
      this.surName.emit(sName);
    
      if(data){
        console.log(data.target.value);
        let value = data.target.value;
        this.dataFromChild.emit(value);
      }
 
     }
}
