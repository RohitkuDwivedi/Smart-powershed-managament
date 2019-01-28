import { Component, OnInit } from '@angular/core';
import {TransformerService} from '../transformer.service'


import { from } from 'rxjs';
@Component({
  selector: 'app-power-shed-mode',
  templateUrl: './power-shed-mode.component.html',
  styleUrls: ['./power-shed-mode.component.css']
})
export class PowerShedModeComponent implements OnInit {
  constructor(private transformer : TransformerService) { }
  // check for tRansformer schema
  myTransformers:any

  ngOnInit() {
    this.transformer.showall().subscribe(
      (val) => {
        this.myTransformers = val
        this.myTransformers = this.myTransformers.msg
        console.log(this.myTransformers);
        
      }
    )
  }

}
