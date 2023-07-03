import { Component } from '@angular/core'; //import section
import { Router } from '@angular/router';
import { StoringDataService } from '../storing-data.service';
import { StudentDataService } from '../student/student-data.service';
import { CommonApiCallService } from '../student/common-api-call.service';

@Component({ //component directive
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  
  test : any ;  //property section
  userName!:string;
  list:any;
  studentsData:any;
  //stringified JSON
  jsonData =  {
    "admin": [
      {
        name: 'om',
        age: 50,
        mob: 98989898
      }
    ],
    "statusCode": 200,
    "massage": "success"
  }

  //  JSON : javascript object Notification:
  //  JSON is a format for storing and transporting data.
  //  JSON is often used when data is sent from a server to a web page.
  //  JSON is a lightweight data interchange format
  sData:any = {
    admin: [
      {
        name: 'om',
        age: 50,
        mob: 98989898
      }
    ],
    books: ['Yoga Hints', 'Yoga Types'],
    statusCode: 200,
    massage: "success"
  };
  getApiResponse: any;

 constructor( private router : Router,
   private sDataService: StoringDataService,
   private studentDataService : StudentDataService,
   public commonApiCallService : CommonApiCallService
  ){  //di-dependancy Injection

 }
 ngOnChanges(){
  console.log('OnChanges');
  
}
  ngOnInit(){
    console.log('oninit');
    
   this.userName = this.sDataService.userFullName;
   console.log('  this.userName>>>',  this.userName);
   this.list = this.sDataService.listOfUsers;
  //setting json data to service
    this.studentDataService.data = this.jsonData ;
    this.show()
  }
 
 login(){    //functions , lifecycle hooks
     this.sDataService.myName = 'poonam';
    this.router.navigateByUrl('/login');
  }
  studentActivity(){
    this.login()
    this.router.navigateByUrl('student/studentActivity');
  }
  directives(){
    this.router.navigateByUrl('directives');
  }
  signUp(){
    this.router.navigateByUrl('signUp');
  }
show(){
  this.studentsData = this.sDataService.studentData; 
  console.log(this.sData);
  //JSON.stringify()
  let strigiFyedData = JSON.stringify(this.sData);
  console.log('stringifyedData',strigiFyedData);

 //JSON.parse()
 let parsedData = JSON.parse(strigiFyedData );
 console.log('parsedData>>',parsedData);
  
}
lifeCycleHooks(){
  this.router.navigateByUrl('life cycle hooks');
}
parent(){
  this.router.navigateByUrl('parent');
}
child(){
  this.router.navigateByUrl('child');
}
apicall(){
  this.router.navigateByUrl('student/apiCall')
}
getApiCall(){
  console.log('get method calling');
  let endpoint = 'admin';
  this.commonApiCallService.getApiCall(endpoint).subscribe(response =>{
    this.getApiResponse = response;
  })
  console.log(" this.getApiResponse", this.getApiResponse);
  
}
form(){
  this.router.navigateByUrl('form');
}
}
