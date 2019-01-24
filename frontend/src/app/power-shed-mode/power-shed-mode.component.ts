import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-power-shed-mode',
  templateUrl: './power-shed-mode.component.html',
  styleUrls: ['./power-shed-mode.component.css']
})
export class PowerShedModeComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ]
  color = 'accent';
  // check for tansformer schema
  transformers=[
    {id:"ts1",status:false},
    {id:"ts2",status:false},
    {id:"ts3",status:false},
    {id:"ts4",status:false},
    {id:"ts5",status:false}
  ]
  constructor() { }

  ngOnInit() {
  }

}
