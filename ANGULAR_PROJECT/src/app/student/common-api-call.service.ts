
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {

  //  adminUrl = "http://localhost:3000/admin";
  //  studentNameUrl = "http://localhost:3000/studentname"
    url = "http://localhost:3000/";
    getDataById:any
    journey!: string;
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
    getApiCall(endPoint:any , id? : any ){
      //statment condition true ? part1 : prt2
     // 6 < 10 ? true  : false
      let url = id ? this.url + endPoint + '/' + id : this.url + endPoint ; 
      //http://localhost:3000/admin 
      //http://localhost:3000/admin/14
      return this.httpClient.get(url);
    }

    //getById
    // getById(id:any, endPoint:string){
    //   let url = 
    //   //http://localhost:3000/admin/4
    //   return this.httpClient.get(url);
    // }

    deletApiCall(endPoint:string , id : any){
      let url = this.url + endPoint + '/' + id;
          return  this.httpClient.delete(url);
    }

    putApiCall(endPoint:string,formData:any,id:any){
      let url = this.url + endPoint + '/' + id;
      return this.httpClient.put(url, formData)
    }
}
