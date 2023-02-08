import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAttendanceSummaryRoutingModule } from './student-attendance-summary-routing.module';
import { StudentAttendanceSummaryComponent } from './student-attendance-summary.component';
import { AverageAttendanceComponent } from './reports/average-attendance/average-attendance.component';
import { GenderWiseAverageAttendanceComponent } from './reports/gender-wise-average-attendance/gender-wise-average-attendance.component';
import { GradeWiseAverageAttendanceComponent } from './reports/grade-wise-average-attendance/grade-wise-average-attendance.component';


@NgModule({
  declarations: [
    StudentAttendanceSummaryComponent,
    AverageAttendanceComponent,
    GenderWiseAverageAttendanceComponent,
    GradeWiseAverageAttendanceComponent
  ],
  imports: [
    CommonModule,
    StudentAttendanceSummaryRoutingModule
  ]
})
export class StudentAttendanceSummaryModule { }
