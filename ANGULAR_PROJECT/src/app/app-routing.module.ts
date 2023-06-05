import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'signUp', component: SignupComponent},
  { path : '' , component: HomeComponent},
  { path : 'home' , component: HomeComponent},
  { path: 'admin', loadChildren:()=> import('./admin/admin.module').then(mod => mod.AdminModule)},
  { path : 'owner', loadChildren:()=> import('./owner/owner.module').then(m=>m.OwnerModule)},
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  { path : '**', component : PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
