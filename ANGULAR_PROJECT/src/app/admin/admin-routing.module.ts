import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { PathNotFoundComponent } from '../path-not-found/path-not-found.component';

const routes: Routes = [
 
  { path: 'adminSignUp' , component : AdminSignUpComponent},
  { path : '**', component : PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
