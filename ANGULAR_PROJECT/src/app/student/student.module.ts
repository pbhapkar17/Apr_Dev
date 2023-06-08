import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentActivityComponent } from './student-activity/student-activity.component';
import { StudentDemoComponent } from './student-demo/student-demo.component';
console.log('student module');


@NgModule({
  declarations: [
    StudentActivityComponent,
    StudentDemoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
