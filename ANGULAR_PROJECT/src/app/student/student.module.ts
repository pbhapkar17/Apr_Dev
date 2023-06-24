import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentActivityComponent } from './student-activity/student-activity.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

console.log('student module');


@NgModule({
  declarations: [
    StudentActivityComponent,
   // StudentDemoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    SharedModule,
    
  ],
 
})
export class StudentModule { }
