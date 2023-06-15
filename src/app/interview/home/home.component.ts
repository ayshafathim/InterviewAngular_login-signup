import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route:Router){}

  submit3(){
    this.route.navigate(['login']);
  }

  submit1(){
  this.route.navigate(['signup']);
  }
  submit2(){
    this.route.navigate(['signupi']);
}
}
