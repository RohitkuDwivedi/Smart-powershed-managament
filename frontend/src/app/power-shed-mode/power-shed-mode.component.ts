import { Component, OnInit } from '@angular/core';
import {TransformerService} from '../transformer.service'
import { checkAndUpdateDirectiveDynamic } from '@angular/core/src/view/provider';
 
import { from } from 'rxjs';

@Component({
  selector: 'app-power-shed-mode',
  templateUrl: './power-shed-mode.component.html',
  styleUrls: ['./power-shed-mode.component.css']
})

export class PowerShedModeComponent implements OnInit {
  constructor(private transformer : TransformerService) { }
  // check for tRansformer schema
  
  show:false
  
  transformers = 'T01'
  
  myTransformers:any
  cbTransformer:any
  // checked1:boolean = true;
  // checked = false;
  checked = false;
  status =this.checked;
  //  status :boolean
  
  // disabled : boolean =true;

  ngOnInit() {
    
    this.transformer.showall().subscribe(
      (val) => {
        this.myTransformers = val
        this.myTransformers = this.myTransformers.msg
        console.log( this.myTransformers);
     })
}
onclick(){
  const data={
    topic:"T01"
  }
  this.transformer.sendPsMode(data).subscribe(
    res => console.log(res)    
  )
  this.show = false

}
}

