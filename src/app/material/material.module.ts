import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatSidenavModule

  ],
  exports:[
    MatTableModule,
    MatSidenavModule
  

  ]
})
export class MaterialModule { }
