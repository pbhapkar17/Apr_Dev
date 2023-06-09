import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-in-angular',
  templateUrl: './directives-in-angular.component.html',
  styleUrls: ['./directives-in-angular.component.css']
})
export class DirectivesInAngularComponent {
    show = false;
    show1 = true;
    toShowPara1!:string;
    toShowPara : string = 'poonam';
    undefinedProperty : any;
    nullProperty = null;
    toggel : boolean = false;


   
    toggelEffect(){
      //this.toggel = false;
      // this.toggel = !true >>false and  !false >>true
      this.toggel = !this.toggel;
      
    }


}




//  = >>assigment operator
// let x = 50;
// test = 60;
//  == >> Equality operator 
//  to compare only value , it will not compare data type
// let a = 20; //number
// let b = "20"  //string
//  if(a == b)>> true
//  === >> Equality operator (strictly checking data type as well as value)
// if(a === b)>> false