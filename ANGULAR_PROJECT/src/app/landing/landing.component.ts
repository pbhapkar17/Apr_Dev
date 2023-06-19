import { Component } from '@angular/core'; //import section
import { Router } from '@angular/router';
import { StoringDataService } from '../storing-data.service';

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
 constructor( private router : Router,
   private sDataService: StoringDataService
  ){  //di-dependancy Injection

 }
  ngOnInit(){
   this.userName = this.sDataService.userFullName;
   console.log('  this.userName>>>',  this.userName);
    
   this.list = this.sDataService.listOfUsers;
   //get student data from service
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
}

}
