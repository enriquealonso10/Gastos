import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TablaGastosSharedComponent } from './components/tabla-gastos-shared/tabla-gastos-shared.component';



@NgModule({
  declarations: [
    TablaGastosSharedComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    
        
  ],
  exports:[
    TablaGastosSharedComponent
  ]
})
export class SharedModule { }
