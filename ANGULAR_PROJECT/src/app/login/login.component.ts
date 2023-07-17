import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoringDataService } from '../storing-data.service';
import { CommonApiCallService } from '../student/common-api-call.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  gender ='male'
    constructor(private router:Router, public storingDataService: StoringDataService,
      private commonApiCallService: CommonApiCallService){

    }

    ngOnInit(){ 
     let a = this.storingDataService.myName;
     console.log(a);
   
    }

  back(){
    this.router.navigateByUrl('landing');
  }

  submit(formData:any){
    console.log(formData);

      //TO DO login logic to be implement


    //post API for template driven form..
    let requestData = {
      fullName : formData.fName,
      password : formData.pass,
      confirmPassword : formData.confirmPassword,
      gender : formData.gender
    }

    let endpoint = "owner";

    this.commonApiCallService.postApiCall(endpoint,requestData).subscribe(res=>{
      console.log(res);
      
    })
  }
  password(passwordValue:any){
   console.log(passwordValue);
   
  }

//   # Angular Events Cheat-sheet
// (drag)="myFunction()" imp
// (drop)="myFunction()" imp
// (dragover)="myFunction()"
// (blur)="someFunction()" imp >>input 
// (focus)="someFunction()"  imp >>input
// (scroll)="someFunction()"
// (submit)="someFunction()"
// (click)="someFunction()"  imp >>button
// (dblclick)="someFunction()"   
// (cut)="someFunction()"
// (copy)="someFunction()"
// (paste)="someFunction()"
// (keyup)="someFunction()" imp >>input
// (keypress)="someFunction()" imp >>input
// (keydown)="someFunction()" imp >>input
// (mouseup)="someFunction()"
// (mousedown)="someFunction()"
// (mouseenter)="someFunction()"
//(change)>> imp >>checkbox
}
