import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {

  loginForm!:FormGroup;
  endPoint!:string;
  ownerData : any;
  validUser: boolean = false;
  forgetPasswordForm!:FormGroup;
  showForgetPasswordForm: boolean = false;
  constructor(private router: Router,
    private fb: FormBuilder,
    private commonApiCallService: CommonApiCallService,
    private commonService: CommonService) {

  }
 
  ngOnInit(){
    this.endPoint = this.commonService.journey;
    console.log('endPoint...',this.endPoint);
    this.loginFormDetails();
  }

  loginFormDetails(){
    this.loginForm = this.fb.group({
      userName:[],
      password:[]
    })
  }
  forgoPasswordFormDetails(){
    this.forgetPasswordForm = this.fb.group({
      newPassword:[],
      confirmPassword:[]
    })
  }
  
  login() {
    console.log(this.loginForm.value);
    if(this.loginForm.value.userName ){
       this.commonService.userName = this.loginForm.value.userName ;
    }
    this.getOwnerApiData();
    console.log('this.ownerData', this.ownerData);

    if (this.ownerData) {
      this.isValidUser();
      if (this.validUser) {
        this.router.navigateByUrl('owner/ownerSuccess');
      }
      else {
        this.router.navigateByUrl('owner/ownerHome');
      }
    }
  }
  back(){
    this.router.navigateByUrl('home')
  }

  getOwnerApiData(){
    this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse=>{
      this.ownerData = getOwnerResponse;
    })
    console.log('this.ownerData',this.ownerData);
    
  }

  isValidUser(){
    this.ownerData.forEach((ownerData:any)=>{
      if(ownerData.UserName === this.loginForm.value.userName && ownerData.Password === this.loginForm.value.password) {
        this.validUser = true;
      }     
    });
    return
  }

  forgetPassword(){
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgoPasswordFormDetails();
  }

  submit(){
    if(this.ownerData ){
      this.updatePassword();
     }
     else{
       this.getOwnerApiData();
       this.updatePassword();
     }
     this.showForgetPasswordForm = !this.showForgetPasswordForm;
  }
  updatePassword(){
    var user:any;
    this.ownerData.forEach((data:any)=>{
      if(data.UserName ===  this.loginForm.value.userName){
        user = data;
      }
      console.log('user',user);
      
    }) 
    if(user){
      let request = {
        Password : this.forgetPasswordForm.value.newPassword
      }
        this.commonApiCallService.patchApiCall(this.endPoint,request,user.id ).subscribe((respo:any)=>{
          console.log(respo);
          
        })
    }
  }
}
