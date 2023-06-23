import { Component } from '@angular/core';
import { StoringDataService } from '../storing-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentData:any;
  name:any="";
  valueFromChild:any;
  constructor(public storingDataService : StoringDataService){

  }

  set(){
  this.storingDataService.setData = "poonam";
  }
  getData(value : any){
    console.log(value);
    this.valueFromChild = value;
    
  }

}
