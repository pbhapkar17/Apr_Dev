import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';
import { Subject1Component } from './subject1/subject1.component';
import { Subject3Component } from './subject3/subject3.component';


const routes: Routes = [
  { path : '', component : LandingComponent},
  { path : 'landing', component : LandingComponent},
  { path : 'login', component : LoginComponent},
  { path : 'signUp', component : SignUpComponent},
  { path : 'directives', component: DirectivesInAngularComponent},
  { path: 'life cycle hooks', component : LifecyclehooksComponent },
  { path : 'parent' , component: ParentComponent},
  { path : 'child', component : ChildComponent},
  { path:'form', component: FormComponent},
  { path : 'subject1', component : Subject1Component},
  { path : 'subject3', component : Subject3Component},
  { path : 'student', loadChildren:()=>import ('./student/student.module').then(mod=>mod.StudentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
