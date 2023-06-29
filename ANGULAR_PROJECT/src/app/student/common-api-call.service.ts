
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {

   adminUrl = "http://localhost:3000/admin";

  constructor(public httpClient : HttpClient) { }

  postApiCall(formData:any){
    return  this.httpClient.post(this.adminUrl,formData)
  }
}
