import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


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
  constructor(private http:HttpClient){}

  authenticateUser(body){
    return this.http.post(this.url+"/authenticate",body,this.httpOptions)
  }
  addUser(user){
    return this.http.post(this.url,user,this.httpOptions)
  }
}
