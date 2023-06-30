import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoringDataService } from 'src/app/storing-data.service';
import { CommonApiCallService } from '../common-api-call.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent {
  signUpForm! :FormGroup;
  postApiResponse: any;
  studentName:any;

  constructor(private fb: FormBuilder, private sDataService : StoringDataService, 
    private ApiCallService:CommonApiCallService ){}

  ngOnInit(){
    this.formDef();
  }
  
  formDef(){
    this.signUpForm = this.fb.group({
      fullName : ['',[Validators.required, Validators.pattern("[a-zA-Z ]*$"),
                 Validators.minLength(10),this.sDataService.whiteSpaceValidator]],
      mobNo:['',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      email:[],
      userName:[],
      city:[],
      address:[],
      gender:['Female']
    })
  }
  submit(){
    console.log(this.signUpForm.value);
    let endpoint = 'admin';
    this.ApiCallService.postApiCall(endpoint,this.signUpForm.value).subscribe(response =>{
    this.postApiResponse = response;
    })
  }

  inputBox(){
   console.log(this.studentName);
   let reqData = {
    "studentName" : this.studentName
   }
   let urlEndPoint = "studentname";
   if(this.studentName.length > 2){
    this.ApiCallService.postApiCall(urlEndPoint,reqData).subscribe(resp => {
      console.log(resp);  
     })
    }

   }

}
