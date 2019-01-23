import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() {
    this.check()
   }

  ngOnInit() {
    
  }
  logout(){
    sessionStorage.clear()
    window.location.href="http://localhost:4200/login"    
  }
  check(){
    if(sessionStorage.getItem("role")!="admin"){
      window.location.href="http://localhost:4200/login"
    }
  }

}
