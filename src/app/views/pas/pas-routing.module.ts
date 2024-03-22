import { RouterModule, Routes } from '@angular/router';
import { PasComponent } from './pas.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:  PasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasRoutingModule { }