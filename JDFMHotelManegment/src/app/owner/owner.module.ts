import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';

import { SharedModule } from '../common/shared/shared.module';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    OwnerhomeComponent,
    OwnersignupComponent,
    OwnersuccessComponent,
    NewhotelregistrationComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
