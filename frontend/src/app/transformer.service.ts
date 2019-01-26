import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TransformerService {

  constructor( private http:HttpClient) { }

  url = "http://localhost:3000/addNewTransformer" 
  // url1 = "http://localhost:3000/addNewTransformer/displayAllTransformers"
  data:any
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  addNewTransformer(body){
    return this.http.post(this.url,body,this.httpOptions)
  }

  showall(){
    return this.http.get(this.url+"/displayAllTransformers",this.httpOptions)
  }
  
  
  
}
