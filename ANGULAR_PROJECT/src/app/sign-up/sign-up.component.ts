import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { StoringDataService } from '../storing-data.service';
import { StudentDataService } from '../student/student-data.service';
import { CommonApiCallService } from '../student/common-api-call.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
   signUpForm! :FormGroup
   //name:string = 'poonam';
   //name!:string;
   student = {
    name: 'poonam',
    age:30,
    mob:64646464646,
    city:'mumbai'
   }
   data:any;
  postApiData: any;
  getDataById: any;
  journey! :string;
   constructor(private fb: FormBuilder, 
            private sDataService : StoringDataService,
             private router: Router,
             private studentDataService: StudentDataService,
             private commonApiCallService: CommonApiCallService){}

    ngOnInit(){
      this.getDataById = this.commonApiCallService.getDataById;
      this.journey = this.commonApiCallService.journey;
      console.log( this.getDataById );
      
       this.formDef();
       this.sDataService.studentData =  this.student; //set student obj to service property studentData
        this.data  = this.studentDataService.data;
        console.log(" this.data  >>", this.data  );
        
      }

     formDef(){
        this.signUpForm = this.fb.group({
          fullName : [this.getDataById.fullName ? this.getDataById.fullName : '',[Validators.required, Validators.pattern("[a-zA-Z ]*$"),
                     Validators.minLength(10),this.sDataService.whiteSpaceValidator]],
          mobNo:[this.getDataById.mobNo ? this.getDataById.mobNo : '',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
          email:[this.getDataById.email ? this.getDataById.email : ''],
          userName:[this.getDataById.userName ? this.getDataById.userName : ''],
          city:[this.getDataById.city ? this.getDataById.city : ''],
          address:[this.getDataById.address ? this.getDataById.address : ''],
          gender:[this.getDataById.gender ? this.getDataById.gender : ''],
          password:[this.getDataById.password ? this.getDataById.password : ''],
          confirmPassword:[this.getDataById.confirmPassword ? this.getDataById.confirmPassword : '']
        })

      }

      submit(){
       console.log(this.signUpForm.value);
       this.sDataService.userFullName = this.signUpForm.value.fullName;
       console.log(' this.sDataService.userFullName>>', this.sDataService.userFullName);
       this.sDataService.listOfUsers = ['poonam','pooja','nitin','shri'];
       let endPoint="admin";
       if(this.journey != 'update'){
        this.commonApiCallService.postApiCall(endPoint,this.signUpForm.value).subscribe(response=>{
          this.postApiData = response ;
         })
       }
       else{
        this.commonApiCallService.putApiCall(endPoint,this.signUpForm.value,'14').subscribe(res=>{
          console.log(res);
          
        })
       }
       
       this.router.navigateByUrl('landing');
      }









}
