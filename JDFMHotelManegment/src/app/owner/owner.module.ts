import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { SharedModule } from '../common/shared/shared.module';


@NgModule({
  declarations: [
    OwnerhomeComponent,
    OwnersignupComponent,
    OwnerLoginComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
