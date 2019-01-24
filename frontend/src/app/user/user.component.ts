import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
// import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   userReply:any
   userName:String
   units=1324
   rate=15

   user = {
    name:"rkkljd",
    address:"p0atja nai",
    pincode:20384,
    phoneno:998077770648,
    email:"roh80it.ku.dwivedi@gmail.com",
    userName:"RohitKuDwivedi",
    password:"bla-bla"
  }
  
  constructor(private userService:LoginService) { 
  }

  ngOnInit(){
    if(sessionStorage.getItem("role")!="user"){
    window.location.href= "http://localhost:4200/login"
    }
    else{
      this.userName = sessionStorage.getItem("userName")
    }
  }  

}
