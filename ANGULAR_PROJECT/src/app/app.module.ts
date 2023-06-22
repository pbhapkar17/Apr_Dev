import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from './shared/shared.module';




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
   
    
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    SharedModule
   
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
