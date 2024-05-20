
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StaffStudentsComponent } from './staff-students.component';

const routes: Routes = [
  {
    path:'',
    component:  StaffStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffStudentsRoutingModule { }