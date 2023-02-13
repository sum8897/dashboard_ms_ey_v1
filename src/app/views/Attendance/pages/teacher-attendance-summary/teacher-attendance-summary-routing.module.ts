import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherAttendanceSummaryComponent } from './teacher-attendance-summary.component';

const routes: Routes = [
  {
    path:'',
    component: TeacherAttendanceSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherAttendanceSummaryRoutingModule { }
