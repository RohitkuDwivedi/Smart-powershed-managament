import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

userName=""
password=""




resp
  constructor(private userService:LoginService ) { }

  ngOnInit() {
  }

  login(){
    const body={
      userName:this.userName,
      password:this.password
    }
     console.log(body);
     let response 
     this.userService.authenticateUser(body).
     subscribe(res => {this.resp=res
     console.log(this.resp);
     })
     
    if(this.userName=="admin" && this.password == "admin"){  
      sessionStorage.setItem("role", "admin");
   // window.location.href =  "http://localhost:4200/admin"
  }else{
    sessionStorage.setItem("role","user")
    sessionStorage.setItem("userName",this.userName)
   // window.location.href =  "http://localhost:4200/user/home"

  }
  }

}
