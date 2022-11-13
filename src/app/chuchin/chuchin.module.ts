import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChuchinRoutingModule } from './chuchin-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SharedModule } from '../shared/shared.module';

import { ChuchinPageComponent } from './page/chuchin-page/chuchin-page.component';


@NgModule({
  declarations: [
   
            

    ChuchinPageComponent
  ],
  imports: [
    CommonModule,
    ChuchinRoutingModule,
    MatTableModule,
    MatSidenavModule,
    SharedModule

  ]
})
export class ChuchinModule { }
