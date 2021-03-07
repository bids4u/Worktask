import { Component, Input, OnChanges, OnInit, Output} from '@angular/core';
import { CostService } from 'src/app/service/addCost.service';
//import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-add-td',
  templateUrl: './add-td.component.html',
  styleUrls: ['./add-td.component.css']
})
export class AddTdComponent implements OnInit,OnChanges {
@Input('value') public value;
data;
//@Output() public tdEvent = new EventEmitter();
inputdis;
  constructor(
    public addS : CostService,
  ) {
    // this.inputdis = this.value.data;
  }

  ngOnInit() {
  }
  ngOnChanges(){
    this.data = this.value;

  }
ChangeItem(){
  let dat = this.addS.editCost(this.data)
  console.log(dat)
}
}
