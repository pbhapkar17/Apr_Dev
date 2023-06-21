import { Component } from '@angular/core'; //import section
import { Router } from '@angular/router';
import { StoringDataService } from '../storing-data.service';
import { StudentDataService } from '../student/student-data.service';

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

 constructor( private router : Router,
   private sDataService: StoringDataService,
   private studentDataService : StudentDataService
  ){  //di-dependancy Injection

 }
  ngOnInit(){
   this.userName = this.sDataService.userFullName;
   console.log('  this.userName>>>',  this.userName);
   this.list = this.sDataService.listOfUsers;
  //setting json data to service
    this.studentDataService.data = this.jsonData ;
   
  }
 
 login(){    //functions , lifecycle hooks
  
    this.router.navigateByUrl('/login');
  }
  studentActivity(){
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
}
