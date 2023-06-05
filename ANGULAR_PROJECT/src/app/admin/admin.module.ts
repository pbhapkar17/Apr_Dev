import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';


console.log('admin . module.ts');

@NgModule({
  declarations: [
    
      AdminSignUpComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
