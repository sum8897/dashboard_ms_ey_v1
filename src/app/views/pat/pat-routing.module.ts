import { RouterModule, Routes } from '@angular/router';
import { PatComponent } from './pat.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:  PatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatRoutingModule { }