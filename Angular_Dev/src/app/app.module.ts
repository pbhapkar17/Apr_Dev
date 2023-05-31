import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ //componenets and directives and pipes
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingComponent,
   
   
    
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
