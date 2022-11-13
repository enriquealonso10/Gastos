import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosPageComponent } from './page/gastos-page/gastos-page.component';


const routes: Routes = [
  {path:'', component:GastosPageComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastosRoutingModule { }
