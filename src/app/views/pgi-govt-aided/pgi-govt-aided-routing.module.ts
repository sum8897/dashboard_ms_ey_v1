
import { RouterModule, Routes } from '@angular/router';
import { PgiGovtAidedComponent } from './pgi-govt-aided.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:  PgiGovtAidedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PgiGovtAidedRoutingModule { }