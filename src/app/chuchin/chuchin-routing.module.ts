import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChuchinPageComponent } from './page/chuchin-page/chuchin-page.component';

const routes: Routes = [
  {path:'', component:ChuchinPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChuchinRoutingModule { }
