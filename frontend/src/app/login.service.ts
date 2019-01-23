import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { locateHostElement } from '@angular/core/src/render3/instructions';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:3000/addUser"
  data:any
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  constructor(private http:HttpClient) { }
  checkUser(){
    return this.http.get(this.url)
  }
  addUser(user){
    return this.http.post(this.url,user,this.httpOptions)
}

}
