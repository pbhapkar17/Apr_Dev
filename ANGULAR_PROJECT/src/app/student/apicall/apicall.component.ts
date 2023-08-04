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
   postApiResponse =  {
    statusCode:1000,
    status:"Success",
    massage:"Data SUbmitted Successfuly"
    }
  studentName:any;

  constructor(private fb: FormBuilder, private sDataService : StoringDataService, 
    private ApiCallService:CommonApiCallService ){}

  ngOnInit(){
    this.formDef();
  }
  //CURD c-create/Post, U=Update/PUt/Patch Api , R=Read/Get APi, D=Delete api
  
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
  
    })
   // this.postApiResponse ={
   // "statusCode":1000,
  // "status":"Success",
  // "massage":"Data SUbmitted Successfuly"
  //  }
    if(this.postApiResponse.statusCode ==1000){
       alert(this.postApiResponse.massage);
      this.signUpForm.reset();
    }
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
