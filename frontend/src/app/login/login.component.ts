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
// res:any
res:any={
  address: "babaki gali",
  email: "rdwivedi345@gmail.com",
  name: "rohit2",
  password: "iot",
  phoneno: 997777068,
  pincode: 49201,
  userName: "iot",
}

  constructor(private userService:LoginService ) { }

  ngOnInit() {
  }

  login(){
    const body={
      userName:this.userName,
      password:this.password
    }

    

     let response
  if(body.userName == "" || body.password == "")
  {
    // window.location.href = "http://localhost:4200/login"
  
    window.alert("enter username & password");
  } 
     this.userService.authenticateUser(body).
     subscribe(res => {
      this.res=res
      
        sessionStorage.setItem("name",this.res.msg.name)
        
        
        sessionStorage.setItem("userName",this.res.msg.userName)
        sessionStorage.setItem("address",this.res.msg.address)
        sessionStorage.setItem("pincode", this.res.msg.pincode.toString())
        sessionStorage.setItem("phoneno",this.res.msg.phoneno.toString())
        sessionStorage.setItem("email",this.res.msg.email)
        if(body.userName !=this.res.msg.userName || body.password != this.res.msg.password)
        {
          window.alert("enter valid username or password");
    
          //window.location.href = "http://localhost:4200/login"
        }
        
        else{
          sessionStorage.setItem("role","user")
          sessionStorage.setItem("userName",this.userName)
          window.location.href =  "http://localhost:4200/user/home"
        }
    })
 
    
    if(this.userName=="admin" && this.password == "admin"){  
      sessionStorage.setItem("role", "admin");
      window.location.href =  "http://localhost:4200/admin"
    }
    // if(body.userName !=this.res.msg.userName || body.password != this.res.msg.password)
    // {
    //   window.alert("enter valid username or password");

    //   //window.location.href = "http://localhost:4200/login"
    // }

    // else if(this.userName=="admin" && this.password == "admin"){  
    //   sessionStorage.setItem("role", "admin");
    //   window.location.href =  "http://localhost:4200/admin"
    // }
    // else {
      // sessionStorage.setItem("role","user")
      // sessionStorage.setItem("userName",this.userName)
    
      // window.location.href =  "http://localhost:4200/user/home"
    // }

}
}
