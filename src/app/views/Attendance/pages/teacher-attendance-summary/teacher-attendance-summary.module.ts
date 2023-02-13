import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherAttendanceSummaryRoutingModule } from './teacher-attendance-summary-routing.module';
import { TeacherAttendanceSummaryComponent } from './teacher-attendance-summary.component';
import { AverageAttendanceSummaryComponent } from './reports/average-attendance/average-attendance.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TeacherAttendanceSummaryComponent,
    AverageAttendanceSummaryComponent
  ],
  imports: [
    MatTabsModule,
    SharedModule,
    CommonModule,
    TeacherAttendanceSummaryRoutingModule
  ]
})
export class TeacherAttendanceSummaryModule { }
