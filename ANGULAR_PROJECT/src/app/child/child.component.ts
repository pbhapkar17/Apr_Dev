import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { StoringDataService } from '../storing-data.service';
import { Router } from '@angular/router';

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
  constructor(public storingDataService : StoringDataService,private router: Router){

  }
  ngOnChanges(){
    console.log('OnChanges');
  }
  ngOnInit(){
   console.log('ngOninit');
  
  }
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContetChecked');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
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
     back(){
      this.router.navigateByUrl('landing')
     }
}
