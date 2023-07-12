import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentActivityComponent } from './student-activity/student-activity.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ApicallComponent } from './apicall/apicall.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
//import { HttpClientModule} from '@angular/common/http';
console.log('student module');


@NgModule({
  declarations: [
    StudentActivityComponent,
    ApicallComponent,
  
    NumbersOnlyDirective,
   // StudentDemoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    SharedModule,
   // HttpClientModule
    
  ],
 
})
export class StudentModule { }
