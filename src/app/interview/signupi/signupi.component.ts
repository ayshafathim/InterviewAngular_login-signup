import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sign } from 'src/app/sign';

@Component({
  selector: 'app-signupi',
  templateUrl: './signupi.component.html',
  styleUrls: ['./signupi.component.css']
})
export class SignupiComponent implements OnInit  {
 
    myForm: any;
    cred:sign=new sign("","","","");
    constructor(private route:Router){}
    
    submit(){
      if(this.passwordsMatch==false)
      alert("invalid password");
      else if(this.passwordsMatch==true && this.emailMatch==true ){
        this.route.navigate(['login']);
      }
      // else
      // {
      //   alert("Password doesnt match");
      // }
     
    }
      password: string | undefined;
     re_password: string | undefined;
    passwordsMatch: boolean = true;
    emailMatch:boolean=true;
  
    // constructor() { }
  
    ngOnInit() {
    }
  
    checkPasswords() {
      if (this.cred.password === this.cred.re_password) {
        this.passwordsMatch = true;
      }
      else
       this.passwordsMatch=false;
       
      
      
  
      
    }
    checkEmail()
    {
      if(this.cred.email.match("[a-zA-Z0-9._%+-]+@[a-z]+\.[a-zA-Z]{2,}"))
       this.emailMatch=true;
      else
      alert("Invalid email"); 
    }
  
    }
  
  
  // export class SignupComponent implements OnInit {
  
  //   password: string | undefined;
  //   confirmPassword: string | undefined;
  //   passwordsMatch: boolean = true;
  
  //   constructor() { }
  
  //   ngOnInit() {
  //   }
  
  //   checkPasswords() {
  //     if (this.password === this.confirmPassword) {
  //       this.passwordsMatch = true;
  //     } else {
  //       this.passwordsMatch = false;
  //     }
  //   }
  
  // }
  
  