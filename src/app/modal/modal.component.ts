import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit, AfterViewInit {
  @ViewChild("myTable", { static: false }) tableRef: ElementRef;
  data;
  serachOpt = "select";
  searchQuerry;
  elementIndex = 1;

  realData: any[];
  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public datap: any
  ) {
    this.data = datap;
    this.realData = datap;
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.onFocus(1);
    console.log(this.tableRef);
    this.tableRef.nativeElement.focus();
  }
  searchfilter() {
    this.data = this.realData;
    if(!(this.searchQuerry)){
    this.onFocus(1);
    this.elementIndex=1;
    if ((this.serachOpt == "select")) {
      this.data = this.realData.filter((item) => {
        return (
          item.name.toLowerCase().includes(this.searchQuerry.toLowerCase()) ||
          item.code.toLowerCase().includes(this.searchQuerry.toLowerCase())
        );
      });
    } else if ((this.serachOpt == "code")) {
      this.data = this.realData.filter((item) => {
        return item.code
          .toLowerCase()
          .includes(this.searchQuerry.toLowerCase());
      });
    } else if ((this.serachOpt == "name")) {
      this.data = this.realData.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(this.searchQuerry.toLowerCase());
      });
    }
  }
  }
  save(data) {
    //console.log(data)
    this.dialogRef.close(data);
  }

  close() {
    this.dialogRef.close();
  }
  onFocus(i) {
    this.tableRef.nativeElement.children[i].focus();
    this.tableRef.nativeElement.children[i].bgColor = "whiteSmoke";
  }
  keyDown() {
    if (this.elementIndex < 8) {
      for(let i=1;i<this.data.length+1;i++){
        this.tableRef.nativeElement.children[i].bgColor = "white";
      }
      this.elementIndex=this.elementIndex+1;
      this.onFocus(this.elementIndex);
      console.log('keyDown')
    }
  }
  keyUP(){
    if (this.elementIndex>1 && this.elementIndex<8) {
      for(let i=1;i<this.data.length+1;i++){
        this.tableRef.nativeElement.children[i].bgColor = "white";
      }
      this.elementIndex=this.elementIndex-1;
      this.onFocus(this.elementIndex);
      console.log('keyUp')
    }
  }
  keyEnter(){
    console.log('key enter')
    console.log(this.tableRef.nativeElement.children[this.elementIndex].children[1].innerText);
    let data = this.tableRef.nativeElement.children[this.elementIndex].children[1].innerText;
    this.save(data);
  }
}
