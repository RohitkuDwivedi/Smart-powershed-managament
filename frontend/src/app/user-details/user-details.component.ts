import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user = {
    name:sessionStorage.getItem("name"),
    address:sessionStorage.getItem("address"),
    pincode:sessionStorage.getItem("pincode"),
    phoneno:sessionStorage.getItem("phoneno"),
    email:sessionStorage.getItem("email"),
    userName:sessionStorage.getItem("userName")
  }
  // sessionStorage.setItem("name",this.res.msg.name)
  // sessionStorage.setItem("userName",this.res.msg.userName)
  // sessionStorage.setItem("address",this.res.msg.address)
  // sessionStorage.setItem("pincode",this.res.msg.pincode)
  // sessionStorage.setItem("phoneNo",this.res.msg.phoneno)
  // sessionStorage.setItem("email",this.res.msg.email)
  constructor() { }

  ngOnInit() {
  }

}
