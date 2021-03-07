import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatDialogModule, MatFormFieldControl, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule, MatTabsModule, MatToolbarModule, MatTreeModule } from '@angular/material';

const MaterialComponent = [
  MatSidenavModule,
  MatTabsModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatIconModule,
  MatTreeModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, MaterialComponent
  ],
  exports : [MaterialComponent]
})
export class MaterialModule { }
