import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';


console.log('app.module.ts file');

@NgModule({
  declarations: [ //components, directives, pipes
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    DirectivesInAngularComponent, 
    
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
