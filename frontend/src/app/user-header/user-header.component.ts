import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logout(){
    sessionStorage.clear()
    window.location.href = "http://localhost:4200/login"
  }
}
