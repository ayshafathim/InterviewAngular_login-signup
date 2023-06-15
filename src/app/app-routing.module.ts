import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './interview/contact/contact.component';
import { HomeComponent } from './interview/home/home.component';
import { InterviewComponent } from './interview/interview.component';
import { LoginComponent } from './interview/login/login.component';
import { SignupComponent } from './interview/signup/signup.component';
import { SignupiComponent } from './interview/signupi/signupi.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'signupi',component:SignupiComponent},
  {path:'interview',component:InterviewComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
