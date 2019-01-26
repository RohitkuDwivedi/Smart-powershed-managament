import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  constructor(private user:LoginService) { }

  name:String
  address:String
  pincode:Number
  email:String
  userName:String
  password:String
  phoneno:Number
  res:any


  ngOnInit() {}

  addUser(){
    const body = {
      name:this.name,
      address:this.address,
      pincode:this.pincode,
      email:this.email,
      userName:this.userName,
      password:this.password,
      phoneno:this.phoneno
    } 
    console.log(body);
    this.user.addUser(body).subscribe(
      temp => {
        this.res = temp
        console.log("server Res"+ JSON.stringify(temp))
      }
    )

  }

}
