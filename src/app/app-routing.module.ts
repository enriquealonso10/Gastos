import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'gastos', loadChildren: () => import('./gastos/gastos.module').then(m => m.GastosModule)},  
  {path:'chuchin', loadChildren:() => import('./chuchin/chuchin.module').then(m => m.ChuchinModule)},
  {path:'sonrisas', loadChildren:() => import('./sonrisas/sonrisas.module').then(m => m.SonrisasModule)},

  {path:'**', redirectTo:'gastos'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
