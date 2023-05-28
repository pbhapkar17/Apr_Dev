import { BindingPipe } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR_PROJECT';

  firstName : string = 'poonam';   //propertyName :datatype = value/data;
  firstName1 = 'poonam';
  firstName2! : string  ;
  surName2 : any;
  surName : any = true;
  formTitle : string = 'Login Form...';
  
}

//data binding in angular:
// two types: 
// 1.one way data Binding :
//1.string interpolation: {{}}
// 2.two way data binding