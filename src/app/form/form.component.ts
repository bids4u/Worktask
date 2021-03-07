import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { NepaliCalendarService } from "../calendar/nepali-calendar.service";
import { ModalComponent } from "../modal/modal.component";
import { Bottom } from "../Models/bottom";
import { Middle } from "../Models/middle";
import { Voucher } from "./../Models/voucher";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  @ViewChild('particular', { static: false }) particularRef: ElementRef;
  voucherModel = new Voucher(String(Math.random()*1000),new Date(),this.convertEngToNep(),new Date(),this.convertEngToNep());
  middleModel = new Middle("", "", "", "", "", "");
  bottomModel = new Bottom("", "", "", "", "");
  modalDisp = false;
  display = true;
  bottom = [];
  constructor(
    public dialog: MatDialog,
    private npCalService: NepaliCalendarService
    ) {}

  ngOnInit() {

  }
  setDisp() {
    this.display = false;
  }
  onenterclick() {
    console.log("enter key");
    // this.modalDisp = true;
    this.openDialog();
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = false;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.position={
      right:'0',
      'bottom':'30px'
    };
    dialogConfig.data = [
      {code: "PA126", name: "_921_testsuplier messi" },
      {code:'PA48',name:'246 MOBILE HOUSE'},
      {code:'PA108',name:'ABCD123'},
      {code:'PA171',name:'ATOZ NEW'},
      {code:'PA180',name:'ATOZ OLD'},
      {code:'PA52',name:'B TO S TRADING COMPANY PVT LTD'},
      {code:'PA120',name:'Bhaskar Tradings'},
    ];
    const dialogRef=this.dialog.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        //console.log("Dialog output:", data);
        this.bottomModel.particular = data;
      }

  );
  }
  submit() {
    if(this.bottomModel.particular==""){
      alert("Enter some data")
    }else{
      console.log(this.voucherModel, this.middleModel, this.bottomModel);
      // this.voucherModel = new Voucher("", null, null, null, null);
      // this.middleModel = new Middle("", "", "", "", "", "");
      this.bottom.push(this.bottomModel);
      this.bottomModel = new Bottom("", "", "", "", "");
      // this.particularRef.nativeElement.focus();
    }
  }
  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
}
convertEngToNep(data:any=new Date()){
  console.log(new Date())
  let date:any = this.npCalService.ConvertEngToNepDate(String(data))
  return `${date.Year}-${date.Month}-${date.Day}`;
}
changeEntry(d){
this.voucherModel.entryBS = this.convertEngToNep(d);
}
changeTrn(d){
  this.voucherModel.trnBS = this.convertEngToNep(d);
}
}
