import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user = {
    name:"Rohit Kumar Dwivedi",
    address:"E-175 Township Hirmi Raipur",
    pincode:20384,
    phoneno:998077770648,
    email:"rohit.ku.dwivedi@gmail.com",
    userName:"Rohit",
    password:"rkd"
  }
  constructor() { }

  ngOnInit() {
  }

}
