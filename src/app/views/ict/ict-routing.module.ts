import { RouterModule, Routes } from '@angular/router';
import { IctComponent } from './ict.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:  IctComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IctRoutingModule { }