import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// import { credential } from 'src/credential';
import { sign } from 'src/app/sign';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  // constructor(private route:Router){}
  message: any;
  myForm: any;
  constructor(private route:Router,private cookieService: CookieService) { }

  ngOnInit(): void {
    // remove this line or implement the method
    // throw new Error('Method not implemented.');
  }

  cred:sign = new sign("", "", "", "");

  // method to set the cookie
  setCookie() {
    const cookieValue = 'Email: ' + this.cred.email + '\n' + 'Password: ' + this.cred.password;
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() +60 * 60 * 1000);
    this.cookieService.set('myCookie', cookieValue, expirationDate);
    const myCookieValue = this.cookieService.get('myCookie');
    alert(myCookieValue);
  }

  submit(){
    this.route.navigate(['home']);
   
   
  }
//not neede

submit1(){
  this.route.navigate(['signup']);
  }
}
