import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
   signUpForm! : FormGroup ;
   //name:string = 'poonam';
   //name!:string;
   student = {
    name: 'poonam',
    age:30
   }
 constructor(private formBuilder : FormBuilder){

 }
    ngOnInit(){
      
      this.signUpFormControlls()
    }

    signUpFormControlls(){
      this.signUpForm = this.formBuilder.group({
        name : ['',[Validators.required,Validators.pattern("[a-zA-Z]*$"),Validators.minLength(10)]],
        email : [''],
        contact: [''],
        address:[''],
        gender:['male']
      })
    }
}
