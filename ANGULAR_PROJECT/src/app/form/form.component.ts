import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonApiCallService } from '../student/common-api-call.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
   form! : FormGroup;

   constructor(private fb : FormBuilder, 
    private commonApiCallService: CommonApiCallService){}

   ngOnInit(){
    console.log('...');
    this.myForm()
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
}
