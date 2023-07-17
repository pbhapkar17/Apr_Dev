import { Component } from '@angular/core';
import { StoringDataService } from '../storing-data.service';

@Component({
  selector: 'app-subject3',
  templateUrl: './subject3.component.html',
  styleUrls: ['./subject3.component.css']
})
export class Subject3Component {
  dataFromSub1!:string;
  constructor(private storingDataService: StoringDataService){}

  ngOnInit(){
 
      console.log('init s3');
    this.storingDataService.name.subscribe(data=>{
      this.dataFromSub1 = data;
    })
  }
}
