import { Injectable } from "@angular/core";

@Injectable() // decorator to define class of service
export class CostService {
  costdata = [
    {
      id: 1,
      costType: "Group cost",
      additionalCost: "246 MOBILE HOUSE",
      amounts: "1000",
      credited: "246 MOBILE HOUSE",
      item: "5",
      remarks: "good to go",
      groupCostMode: "ON AMOUNT",
    },
    {
      id: 2,
      costType: "Group cost",
      additionalCost: "MOBILE HOUSE",
      amounts: "1000",
      credited: "MOBILE HOUSE",
      item: "6",
      remarks: "Bad to go",
      groupCostMode: "ON AMOUNT",
    }
  ];
  constructor() // public location:Location
  {}

  addCost(data) {
    this.costdata.push(data);
    return this.costdata;
  }
  editCost(data) {
    for (let i = 0; i < this.costdata.length; i++) {
      if (this.costdata[i].id == data.id) {
        this.costdata[i][data.type] = data.data;
        return "done";
        break;
      } else {
        return "err";
      }
    }
  }
  getCost() {
    return this.costdata;
  }
}
