import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';
//import { HttpClientModule } from '@angular/common/http';




console.log('app.module.ts file');

@NgModule({
  declarations: [ //components, directives, pipes
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    DirectivesInAngularComponent,
    LifecyclehooksComponent,
    ParentComponent,
    ChildComponent,
    FormComponent, 
   
    
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    SharedModule,
    //HttpClientModule
  
   
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
