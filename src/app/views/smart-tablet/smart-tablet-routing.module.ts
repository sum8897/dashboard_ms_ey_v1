import { RouterModule, Routes } from '@angular/router';
import { SmartTabletComponent } from './smart-tablet.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:  SmartTabletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartTabletRoutingModule { }