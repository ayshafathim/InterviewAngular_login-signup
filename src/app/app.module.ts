import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterviewComponent } from './interview/interview.component';
import { HomeComponent } from './interview/home/home.component';
import { SignupComponent } from './interview/signup/signup.component';
import { LoginComponent } from './interview/login/login.component';
import { SignupiComponent } from './interview/signupi/signupi.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './interview/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    InterviewComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    SignupiComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
