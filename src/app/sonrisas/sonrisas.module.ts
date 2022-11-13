import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SonrisasRoutingModule } from './sonrisas-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PageSonrisasComponent } from './page-sonrisas/page-sonrisas.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
       
    
  
    PageSonrisasComponent
  ],
  imports: [
    CommonModule,
    SonrisasRoutingModule,
    MatTableModule,
    MatSidenavModule,
    SharedModule
    
  ]
})
export class SonrisasModule { }
