import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSonrisasComponent } from './page-sonrisas/page-sonrisas.component';


const routes: Routes = [
  {path:'', component: PageSonrisasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SonrisasRoutingModule { }
