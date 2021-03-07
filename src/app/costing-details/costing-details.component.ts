import { Component, OnInit } from '@angular/core';
import { CostService } from '../service/addCost.service';

@Component({
  selector: 'app-costing-details',
  templateUrl: './costing-details.component.html',
  styleUrls: ['./costing-details.component.css']
})
export class CostingDetailsComponent implements OnInit {
  th=["Item Code","costType","credited","remarks","amounts"]
  data;
  constructor(public costSrv:CostService) {
    this.data=this.costSrv.getCost()
  }

  ngOnInit() {
  }

}
