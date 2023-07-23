import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {
  LoginForm!:FormGroup;
  journey!:string;
  postResponse:any;
  constructor(private fb:FormBuilder,
    private commonService: CommonService,
    private apiCallService: CommonApiCallService,
    private router : Router){}

  ngOnInit(){
  this.journey = this.commonService.journey;
  console.log('this.journey',this.journey);
  
   this.FormDetails();
  }

  FormDetails(){
    this.LoginForm = this.fb.group({
      name:['',[]],
      email:['',[]],
      mobile:['',[]],
      password:['',[]],
      gender:['',[]],
      

    })
  }
  submit(){
    let request = {
      UserName : this.LoginForm.value.name,
      Email:   this.LoginForm.value.email,
      Mobile :  this.LoginForm.value.mobile,
      Password :  this.LoginForm.value.password,
      Gender :  this.LoginForm.value.gender
    }

    this.apiCallService.postApiCall(this.journey,request).subscribe(resp=>{
      console.log(resp);
      this.postResponse = resp;
    })
    // if(this.postResponse?.id){
     this.router.navigateByUrl('owner/ownerLogin');
     //}
  }

}
