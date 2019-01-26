import { Component, OnInit } from '@angular/core';
import {TransformerService} from "../transformer.service"

@Component({
  selector: 'app-add-new-transformer',
  templateUrl: './add-new-transformer.component.html',
  styleUrls: ['./add-new-transformer.component.css']
})
export class AddNewTransformerComponent implements OnInit {

  transformerCode:string
  transformerPin:number
  res:any
  body={
    transforemrId:this.transformerCode,
    areaPincode:this.transformerPin
  }
  constructor(private transforemr:TransformerService) { }
  ngOnInit(){}
  addNewTransformer(){
    this.transforemr.addNewTransformer(this.body).subscribe(
      temp => {
        this.res = temp
        console.log(temp)
      }
    )
  }

}
