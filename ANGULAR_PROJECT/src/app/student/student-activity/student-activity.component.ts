import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-student-activity',
  templateUrl: './student-activity.component.html',
  styleUrls: ['./student-activity.component.css']
})
export class StudentActivityComponent {
  sigInForm!: FormGroup;
  showSignInForm : boolean = false;
  passwordValue : any;
  confirmPassValue : any;
  isMatch! : boolean;
  isMatchConfirm!:boolean;

  constructor(private fb: FormBuilder){}

  showForm(){
     //this.showSignInForm = true;
     this.showSignInForm = ! this.showSignInForm 
     this.formDef();
  }

  formDef(){

    this.sigInForm = this.fb.group({
      password:['',[Validators.required]],
      confirmPassword:[],
      name:['',[this.nameValidation]]
     }
     )

  }


  nameValidation(inp:any){
   console.log(inp.value);
   let data = inp.value?.toLowerCase();
   let isErr = data.includes('copy')
    return isErr ? {Err : true}: null;
  }


  passwordMatchingValidatior(){

  }
  password() {

    this.passwordValue = this.sigInForm.value.password;
    if (this.passwordValue == this.confirmPassValue) {
      this.isMatch = true;
    }
    else {
      this.isMatch = false;
    }
  }

  confirmPassword() {
    this.confirmPassValue = this.sigInForm.value.confirmPassword;
    if (this.passwordValue == this.confirmPassValue) {
      this.isMatch = true;
    }
    else {
      this.isMatch = false;
    }
  }
}
