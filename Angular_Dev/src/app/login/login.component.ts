import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formTitle = '--LOGIN FORM--';
  test!: string;

  //propertyName : data type = value ; D+D of property
  //propertyName! : data type; only declareation

  amount: number = 50000;
  panNo: any = true;

  submit() {
    this.test = 'testing property';
    this.formTitle = 'Login Form'
  }


}
