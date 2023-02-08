import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherAttendanceSummaryRoutingModule } from './teacher-attendance-summary-routing.module';
import { TeacherAttendanceSummaryComponent } from './teacher-attendance-summary.component';
import { AverageAttendanceComponent } from './reports/average-attendance/average-attendance.component';


@NgModule({
  declarations: [
    TeacherAttendanceSummaryComponent,
    AverageAttendanceComponent
  ],
  imports: [
    CommonModule,
    TeacherAttendanceSummaryRoutingModule
  ]
})
export class TeacherAttendanceSummaryModule { }
