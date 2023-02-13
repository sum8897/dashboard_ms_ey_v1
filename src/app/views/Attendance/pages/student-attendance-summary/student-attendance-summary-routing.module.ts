import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAttendanceSummaryComponent } from './student-attendance-summary.component';

const routes: Routes = [
  {
    path:'',
    component: StudentAttendanceSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAttendanceSummaryRoutingModule { }
