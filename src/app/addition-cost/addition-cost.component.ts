import { Component, OnInit } from "@angular/core";
import { AdditionalCost } from "../Models/additionalCost";
import { CostService } from "../service/addCost.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-addition-cost",
  templateUrl: "./addition-cost.component.html",
  styleUrls: ["./addition-cost.component.css"],
})
export class AdditionCostComponent implements OnInit {
  th: string[] = [
    "S.N",
    "Additional Cost A/C",
    "Amount",
    "Credited A/C",
    "Remarks",
    "Cost Type",
    "	G-Cost Mode",
    "Item Description",
  ];
  additionalModel = new AdditionalCost(3,null, null, null, null, null, null, null);
  costd: AdditionalCost[] = [];
  constructor(public costSrv: CostService, public dialog: MatDialog) {}

  ngOnInit() {
    this.costd = this.costSrv.getCost();
  }
  submit() {
    if(this.additionalModel.additionalCost && this.additionalModel.credited && this.additionalModel.amounts){
      this.costd = this.costSrv.addCost(this.additionalModel);
      let num = this.additionalModel.id+1
    //this.costd.push(this.additionalModel)
    this.additionalModel = new AdditionalCost(num,"", "", "", "", "", "", "");
    console.log(this.costd);
    }else{
      alert('Please provide required Data')
    }

  }

  openDialog(d:String) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = false;
    dialogConfig.position = {
      right: "0",
      bottom: "30px",
    };
    dialogConfig.data = [
      { code: "PA126", name: "_921_testsuplier messi" },
      { code: "PA48", name: "246 MOBILE HOUSE" },
      { code: "PA108", name: "ABCD123" },
      { code: "PA171", name: "ATOZ NEW" },
      { code: "PA180", name: "ATOZ OLD" },
      { code: "PA52", name: "B TO S TRADING COMPANY PVT LTD" },
      { code: "PA120", name: "Bhaskar Tradings" },
    ];
    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      //console.log("Dialog output:", data);
      if(d=='cost'){
        this.additionalModel.additionalCost = data;
      }else{
        this.additionalModel.credited = data;
      }
    });
  }
}
