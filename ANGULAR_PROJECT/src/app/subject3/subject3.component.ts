import { Component, ElementRef, ViewChild } from '@angular/core';
import { StoringDataService } from '../storing-data.service';
import { Subject2Component } from '../subject2/subject2.component';

@Component({
  selector: 'app-subject3',
  templateUrl: './subject3.component.html',
  styleUrls: ['./subject3.component.css']
})
export class Subject3Component {

  @ViewChild('headingTag') headLine! : ElementRef;
  @ViewChild (Subject2Component) sub2Compo! : Subject2Component;
 
  name!: string;
  dataFromSub1!:string;

  constructor(private storingDataService: StoringDataService){}

  ngOnInit(){
 
      console.log('init s3');
      this.storingDataService.name.subscribe(data=>{
      this.dataFromSub1 = data;
    })
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit calling....');
    console.log('headLine',this.headLine.nativeElement.innerHTML)
    this.headLine.nativeElement.innerHTML = 'POONAM';
    console.log(this.sub2Compo.surName);
    this.name = this.sub2Compo.surName;
    
  }
}
