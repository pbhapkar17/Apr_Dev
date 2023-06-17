import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
    age:30
   }
   constructor(private fb: FormBuilder){}

    ngOnInit(){
       this.formDef();
    }

     formDef(){
        this.signUpForm = this.fb.group({
          fullName : ['',[Validators.required, Validators.pattern("[a-zA-Z ]*$"),Validators.minLength(10)]],
          mobNo:['',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
          email:[],
          userName:[],
          city:[],
          address:[]
        })

      }

      submit(){
       console.log(this.signUpForm.value);
       
      }









}
