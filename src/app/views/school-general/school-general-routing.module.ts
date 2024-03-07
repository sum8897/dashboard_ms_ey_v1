import { RouterModule, Routes } from '@angular/router';
import { SchoolGeneralComponent } from './school-general.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:  SchoolGeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolGeneralRoutingModule { }