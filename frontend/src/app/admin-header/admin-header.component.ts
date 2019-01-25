import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logout(){
    sessionStorage.clear();
    window.location.href="http://localhost:4200/login"
    console.log("CLICKED");
    

  }

}
