import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonApiCallService } from '../student/common-api-call.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
   form! : FormGroup;
   adminData:any;
   tableHeading : any[]= ['Full Name', "Mobile Number", "City", "Email"];
   myName = 'poonam';
   todayDate = new Date();
   searchBoxVal:any;
   inp:any;
   inputValue:any;
   matForm! : FormGroup;
   showPassword : boolean = false;
   showConfirmPassword: boolean = false;
   passwordField: any;
   confirmPasswordField: any;
   passwordMatch : boolean = false;
   ConfirmPasswordMatch: boolean= false;
   constructor(private fb : FormBuilder, 
    private commonApiCallService: CommonApiCallService,
    private httpClient : HttpClient){}
    
    
    ngOnInit(){
    console.log('...');
    this.myForm();
    this.getData();
    this.matFormDetails();
   }

    myForm(){
      this.form = this.fb.group({
      name : ['',[]],
      mobileNo : ['']
    })
    }

    save(){
      console.log(" this.form", this.form.value);
      let urlEndPoint = 'form';
      let formData = {
        Name : this.form.value.name,
        MobileNumber : this.form.value.mobileNo
      }
     this.commonApiCallService.postApiCall(urlEndPoint,formData).subscribe(resp=>{
      console.log(resp);
     })
    }

    getData(){
      let endpointToGetData = 'admin';
      this.commonApiCallService.getApiCall(endpointToGetData).subscribe(data =>{
      console.log('get data',data);
      this.adminData = data;
    }); 
    }

    inptVal(val:any){
      console.log('val',val.target.value);
      console.log('inputValue',this.inputValue);
      
      this.inp = val.target.value
    }
    searchBoxValue(){
      this.searchBoxVal = this.inp;
    }

    matFormDetails(){
      this.matForm = this.fb.group({
        firstName : ['',[Validators.required, Validators.pattern('[a-zA-Z]*$'),Validators.minLength(2)]],
        middleName : ['',[Validators.required]],
        lastName : ['',[Validators.required]],
        password:['',[Validators.required]],
        confirmPassword:['',[Validators.required]]
      })
    }

    visibilePassword(){
      this.showPassword =  !this.showPassword;
      
     
      
    }
    visibileConfirmPassword(){
      //this.confirmPasswordField = this.matForm.value.confirmPassword;
      this.showConfirmPassword = !this.showConfirmPassword;
     // this.passwordField == this.confirmPasswordField ? this.ConfirmPasswordMatch=true : this.ConfirmPasswordMatch = false;
    }
    passValidation(){
      console.log(this.matForm.value.password);
      this.passwordField = this.matForm.value.password;
      this.confirmPasswordField = this.matForm.value.confirmPassword;
      if(this.passwordField == this.confirmPasswordField){
        this.passwordMatch = false
      }
      else{
        this.passwordMatch = true;
      }
    }
    confPassValidation(){
      this.passwordField = this.matForm.value.password;
      this.confirmPasswordField = this.matForm.value.confirmPassword;
      if(this.passwordField == this.confirmPasswordField){
        this.ConfirmPasswordMatch = false
      }
      else{
        this.ConfirmPasswordMatch = true;
      }
    }
}
