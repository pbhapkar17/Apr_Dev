import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { StudentDataService } from '../student-data.service';
import { StoringDataService } from 'src/app/storing-data.service';

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
  pass:any;
  confirmPass:any
  showPassword!:boolean;
  studentData:any;

  constructor(private fb: FormBuilder,
    public studentDataService:StudentDataService,
    private storingDataService : StoringDataService){}

  showForm(){
     //this.showSignInForm = true;
     this.showSignInForm = ! this.showSignInForm ;
     this.formDef();
  }

  formDef(){

    this.sigInForm = this.fb.group({
      password:[''],
      confirmPassword:[''],
      name:['',[Validators.required,this.nameValidation,this.storingDataService.whiteSpaceValidator]]
     })

  }
  


  //copy Copy COPY CoPy COPY.....
  nameValidation(inp:any){
   console.log(inp.value);
   let data = inp.value?.toLowerCase();
   let isErr = data.includes('copy')
    return isErr ? {Err : true}: null;
  }


  passwordValidatior(inp:any){
    console.log(inp.value);
    console.log(this.pass);
   


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
  showPass(){
    this.showPassword = !this.showPassword;
  }

  getData(){
       this.studentData  = this.studentDataService.studentData;
       console.log(' this.studentData >>>', this.studentData );
      let x = this.studentDataService.test(40,50);
      console.log('x',x);
      
  }
}
