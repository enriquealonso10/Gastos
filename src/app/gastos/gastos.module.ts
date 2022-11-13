import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';

import { GastosPageComponent } from './page/gastos-page/gastos-page.component';
import { TablaGastosComponent } from './components/tabla-gastos/tabla-gastos.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    GastosPageComponent,
    TablaGastosComponent,
    
    
  ],
  imports: [
    CommonModule,
    GastosRoutingModule,
    MatTableModule,
    MatSidenavModule
    
  ]
})
export class GastosModule { }
