
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {

  //  adminUrl = "http://localhost:3000/admin";
  //  studentNameUrl = "http://localhost:3000/studentname"
    url = "http://localhost:3000/";

  constructor(public httpClient : HttpClient) { }

  // postApiCall(formData:any){
  //   //post : 2 para: form url and form Data
  //   return  this.httpClient.post(this.adminUrl,formData)
  // }//observable: it is continous streaming of data.we will not able to get data untill and unless we subscribe it
  // postApiForStudentName(data:any) {
  //    return this.httpClient.post(this.studentNameUrl,data);
  // }
  
  //post API : to store data into db
    postApiCall(endpoint:string, data:any){
      //post method: 2 para: form url and form Data
      let apiUrl = this.url + endpoint;
      return  this.httpClient.post(apiUrl,data)
    }

    //to get data from db
    getApiCall(enpoint:any){
      let url = this.url + enpoint; 
      //http://localhost:3000/ + admin 
      //http://localhost:3000/admin
      return this.httpClient.get(url);
    }

    //getById
    getById(id:any, endPoint:string){
      let url = this.url + endPoint + '/' + id
      //http://localhost:3000/admin/2
    return this.httpClient.get(url);
    }
}
