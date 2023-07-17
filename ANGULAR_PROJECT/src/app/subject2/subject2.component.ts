import { Component } from '@angular/core';
import { StoringDataService } from '../storing-data.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component {
  nameComingFromSub1! : string;
  constructor(private storingDataService: StoringDataService){}
  ngOnInit(){
    console.log('init s2');
   this.storingDataService.name.subscribe(data=>{
     this.nameComingFromSub1 = data;
   })
  }
}
