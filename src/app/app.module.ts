import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { TabsComponent } from './tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { PurchaseDetailComponent } from './purchase-detail/purchase-detail.component';
import { AdditionCostComponent } from './addition-cost/addition-cost.component';
import { CostingDetailsComponent } from './costing-details/costing-details.component';
import { ImportDocumentComponent } from './import-document/import-document.component';
import { AppServiceService } from './app-service.service';
import { NepaliCalendarService } from './calendar/nepali-calendar.service';
import { CostService } from './service/addCost.service';
import { AddNodeComponent, NewNodeDialog } from './purchase-detail/theme/add-node/add-node.component';
import { EditNodeComponent, EditNodeDialog } from './purchase-detail/theme/edit-node/edit-node.component';
import { DeleteNodeComponent } from './purchase-detail/theme/delete-node/delete-node.component';
import { AddTdComponent } from './addition-cost/add-td/add-td.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ModalComponent,
    TabsComponent,
    PurchaseDetailComponent,
    AdditionCostComponent,
    CostingDetailsComponent,
    ImportDocumentComponent,
    NewNodeDialog,
    EditNodeComponent,
    EditNodeDialog,
    DeleteNodeComponent,
    AddNodeComponent,
    AddTdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [AppServiceService,NepaliCalendarService,CostService],
  bootstrap: [AppComponent],
  entryComponents:[ModalComponent,NewNodeDialog,EditNodeDialog]
})
export class AppModule { }
