import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAttendanceComplianceComponent } from './student-attendance-compliance.component';

const routes: Routes = [
  {
    path:'',
    component: StudentAttendanceComplianceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAttendanceComplianceRoutingModule { }
