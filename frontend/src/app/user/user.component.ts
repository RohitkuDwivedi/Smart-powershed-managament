import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import { log } from 'util';
// import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  
  
  constructor(private userService:LoginService) { 
  }
  user = sessionStorage.getItem("userName")
  arr =[]
  res:any
  i:Number
  
  
  ngOnInit(){
  
    if(sessionStorage.getItem("role")!="user"){
    window.location.href= "http://localhost:4200/login"
    }
    else{
      const  body={ 
        userName: sessionStorage.getItem("userName")
      }
      console.log("arr"+this.arr);
      
      
      
      this.userService.getConsumption().subscribe(
        (val) => {
          this.res = val
          this.res = this.res.msg
          console.log(this.res.length);
          
          var i;
          for (i = 0; i < this.res.length; i++) { 
            if(this.res[i].userName == body.userName)
            {
              console.log(this.res[i]._id)//,this.res[i].unitsConsumedPerDay);
             this.arr.push(this.res[i]);

            }
          }

          console.log(this.arr);
          
      }

      )
 
    }

  }

 
  
  
}
