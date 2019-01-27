import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private display:LoginService) { }
  
  user = {
    name:sessionStorage.getItem("name"),
    address:sessionStorage.getItem("address"),
    pincode:sessionStorage.getItem("pincode"),
    phoneno:sessionStorage.getItem("phoneno"),
    email:sessionStorage.getItem("email"),
    userName:sessionStorage.getItem("userName")
  }
  // users:any

  
  
  ngOnInit() {}
  

}
