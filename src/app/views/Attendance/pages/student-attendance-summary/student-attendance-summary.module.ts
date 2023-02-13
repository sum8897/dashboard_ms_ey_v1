import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule } from '@project-sunbird/sb-dashlet-v14';

import { StudentAttendanceSummaryRoutingModule } from './student-attendance-summary-routing.module';
import { StudentAttendanceSummaryComponent } from './student-attendance-summary.component';
import { AverageAttendanceComponent } from './reports/average-attendance/average-attendance.component';
import { GenderWiseAverageAttendanceComponent } from './reports/gender-wise-average-attendance/gender-wise-average-attendance.component';
import { GradeWiseAverageAttendanceComponent } from './reports/grade-wise-average-attendance/grade-wise-average-attendance.component';
import { DataService } from 'src/app/core/services/data.service';


@NgModule({
  declarations: [
    StudentAttendanceSummaryComponent,
    AverageAttendanceComponent,
    GenderWiseAverageAttendanceComponent,
    GradeWiseAverageAttendanceComponent
  ],
  imports: [
    DashletModule.forRoot({
      dataService: DataService
    }),
    MatTabsModule,
    SharedModule,
    CommonModule,
    StudentAttendanceSummaryRoutingModule
  ]
})
export class StudentAttendanceSummaryModule { }
