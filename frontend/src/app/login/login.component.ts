import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ""
  password = ""
  constructor() { }

  ngOnInit() {
  }

  login(){
    if(this.username=="admin" && this.password == "admin"){  
      sessionStorage.setItem("role", "admin");
    window.location.href =  "http://localhost:4200/admin"
  }else{
    sessionStorage.setItem("role","user")
    sessionStorage.setItem("userName",this.username)
    window.location.href =  "http://localhost:4200/user"

  }
  }

}
